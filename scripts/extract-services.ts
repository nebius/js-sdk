#!/usr/bin/env ts-node
/**
 * Extract all service classes from the generated API files
 * and create a markdown documentation listing them
 */

import * as fs from 'fs';
import * as path from 'path';

interface ServiceInfo {
  className: string;
  filePath: string;
  relativePath: string;
  namespace: string;
  version: string;
  description?: string;
}

function extractServicesFromFile(filePath: string): ServiceInfo[] {
  const content = fs.readFileSync(filePath, 'utf-8');
  const services: ServiceInfo[] = [];

  // Match service class definitions
  const serviceClassRegex = /export class (\w+Service) implements \1/g;
  const matches = content.matchAll(serviceClassRegex);

  for (const match of matches) {
    const className = match[1];

    // Extract JSDoc comment before the interface definition
    const interfacePattern = new RegExp(
      `/\\*\\*([^*]|\\*(?!/))*\\*/\\s*export interface ${className}\\s*{`,
      'g',
    );
    const interfaceMatch = interfacePattern.exec(content);

    let description: string | undefined;
    if (interfaceMatch) {
      const jsdoc = interfaceMatch[0];
      // Extract first line of description
      const descMatch = jsdoc.match(/\/\*\*\s*\n\s*\*\s*(.+)/);
      if (descMatch) {
        description = descMatch[1].trim();
      }
    }

    // Extract namespace and version from file path
    const relativePath = path.relative(path.join(__dirname, '..'), filePath);
    const pathParts = relativePath.split(path.sep);

    // Example path: src/api/nebius/compute/v1/index.ts
    let namespace = '';
    let version = '';

    if (pathParts.includes('nebius')) {
      const nebiusIndex = pathParts.indexOf('nebius');
      const pathAfterNebius = pathParts.slice(nebiusIndex + 1);
      version = pathAfterNebius[pathAfterNebius.length - 2]; // e.g., "v1" or "v1alpha1"
      namespace = pathAfterNebius.slice(0, -2).join('.'); // e.g., "compute" or "msp.postgresql"
    }

    services.push({
      className,
      filePath,
      relativePath: relativePath.replace(/\\/g, '/'),
      namespace,
      version,
      description,
    });
  }

  return services;
}

function findAllServiceFiles(dir: string): string[] {
  const files: string[] = [];

  function walk(currentDir: string) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        walk(fullPath);
      } else if (entry.isFile() && entry.name.endsWith('.ts')) {
        // Only process files in the nebius API directory
        if (fullPath.includes(path.join('api', 'nebius'))) {
          files.push(fullPath);
        }
      }
    }
  }

  walk(dir);
  return files;
}

function generateMarkdown(services: ServiceInfo[]): string {
  // Group by namespace and version
  const grouped = new Map<string, ServiceInfo[]>();

  for (const service of services) {
    const key = `${service.namespace}.${service.version}`;
    if (!grouped.has(key)) {
      grouped.set(key, []);
    }
    grouped.get(key)!.push(service);
  }

  // Sort groups
  const sortedGroups = Array.from(grouped.entries()).sort((a, b) => a[0].localeCompare(b[0]));

  let markdown = `# Nebius SDK Services\n\n`;
  markdown += `This document lists all available services in the Nebius SDK.\n\n`;
  markdown += `**Total Services:** ${services.length}\n\n`;
  markdown += `---\n\n`;

  for (const [, groupServices] of sortedGroups) {
    const firstService = groupServices[0];
    markdown += `## ${firstService.namespace} (${firstService.version})\n\n`;

    for (const service of groupServices.sort((a, b) => a.className.localeCompare(b.className))) {
      markdown += `### ${service.className}\n\n`;

      if (service.description) {
        markdown += `${service.description}\n\n`;
      }

      // Create TypeDoc link - remove 'src/' and '/index.ts', then replace slashes with underscores
      const docLink = service.relativePath
        .replace('src/', '')
        .replace('/index.ts', '.ts')
        .replace('.ts', '')
        .replace(/\//g, '_');

      markdown += `**Package:** \`nebius.${service.namespace}.${service.version}\`\n\n`;
      markdown += `**API Documentation:** [${service.className} API Reference](../classes/${docLink}.${service.className}.html)\n\n`;
      markdown += `---\n\n`;
    }
  }

  return markdown;
}

function main() {
  const srcDir = path.join(__dirname, '..', 'src');
  const intermediateDir = path.join(__dirname, '..', '.typedoc');

  console.log('Scanning for services...');
  const serviceFiles = findAllServiceFiles(srcDir);
  console.log(`Found ${serviceFiles.length} TypeScript files`);

  const allServices: ServiceInfo[] = [];

  for (const file of serviceFiles) {
    const services = extractServicesFromFile(file);
    allServices.push(...services);
  }

  console.log(`Extracted ${allServices.length} services`);

  // Create intermediate directory
  fs.mkdirSync(intermediateDir, { recursive: true });

  // Generate markdown for TypeDoc to process as external document
  const markdown = generateMarkdown(allServices);
  const markdownOutputPath = path.join(intermediateDir, 'SERVICES.md');
  fs.writeFileSync(markdownOutputPath, markdown);
  console.log(`✓ Generated service markdown at ${markdownOutputPath}`);

  // Also generate a JSON index for potential future use
  const jsonOutput = path.join(intermediateDir, 'services.json');
  fs.writeFileSync(jsonOutput, JSON.stringify(allServices, null, 2));
  console.log(`✓ Generated service index at ${jsonOutput}`);
}

main();
