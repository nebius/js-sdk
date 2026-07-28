import { Comment, Converter, ReflectionKind } from 'typedoc';

const documentedKinds =
  ReflectionKind.Module |
  ReflectionKind.Namespace |
  ReflectionKind.Enum |
  ReflectionKind.EnumMember |
  ReflectionKind.Variable |
  ReflectionKind.Function |
  ReflectionKind.Class |
  ReflectionKind.Interface |
  ReflectionKind.Constructor |
  ReflectionKind.Property |
  ReflectionKind.Method |
  ReflectionKind.Accessor |
  ReflectionKind.TypeAlias;

const signatureKinds =
  ReflectionKind.CallSignature |
  ReflectionKind.IndexSignature |
  ReflectionKind.ConstructorSignature |
  ReflectionKind.GetSignature |
  ReflectionKind.SetSignature;

function words(name) {
  const text = name
    .replace(/^\$/, '')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/[_/-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .toLowerCase();
  const terms = new Map([
    ['api', 'API'],
    ['ca', 'CA'],
    ['grpc', 'gRPC'],
    ['http', 'HTTP'],
    ['id', 'ID'],
    ['json', 'JSON'],
    ['jwt', 'JWT'],
    ['oauth', 'OAuth'],
    ['pem', 'PEM'],
    ['pkce', 'PKCE'],
    ['sdk', 'SDK'],
    ['tls', 'TLS'],
    ['url', 'URL'],
  ]);
  return text
    .split(' ')
    .map((word) => terms.get(word) ?? word)
    .join(' ');
}

function nounAfterVerb(name, prefixLength, fallback) {
  const noun = words(name.slice(prefixLength));
  if (!noun || noun === 'value') return fallback;
  return noun;
}

function callableSummary(name) {
  const rules = [
    ['get', 'value', (noun) => `Returns the ${noun}.`],
    ['set', 'value', (noun) => `Sets the ${noun}.`],
    ['create', 'value', (noun) => `Creates the ${noun}.`],
    ['make', 'value', (noun) => `Creates the ${noun}.`],
    ['from', 'input', (noun) => `Creates a value from the ${noun}.`],
    ['to', 'requested format', (noun) => `Converts the value to ${noun}.`],
    ['encode', 'value', (noun) => `Encodes the ${noun}.`],
    ['decode', 'value', (noun) => `Decodes the ${noun}.`],
    ['parse', 'value', (noun) => `Parses the ${noun}.`],
    ['format', 'value', (noun) => `Formats the ${noun}.`],
    ['serialize', 'value', (noun) => `Serializes the ${noun}.`],
    ['deserialize', 'value', (noun) => `Deserializes the ${noun}.`],
    ['list', 'items', (noun) => `Lists the ${noun}.`],
    ['read', 'value', (noun) => `Reads the ${noun}.`],
    ['load', 'value', (noun) => `Loads the ${noun}.`],
    ['write', 'value', (noun) => `Writes the ${noun}.`],
    ['save', 'value', (noun) => `Saves the ${noun}.`],
    ['add', 'value', (noun) => `Adds the ${noun}.`],
    ['remove', 'value', (noun) => `Removes the ${noun}.`],
    ['delete', 'value', (noun) => `Deletes the ${noun}.`],
    ['update', 'value', (noun) => `Updates the ${noun}.`],
    ['reset', 'value', (noun) => `Resets the ${noun}.`],
    ['renew', 'value', (noun) => `Renews the ${noun}.`],
    ['resolve', 'value', (noun) => `Resolves the ${noun}.`],
    ['sanitize', 'value', (noun) => `Removes sensitive data from the ${noun}.`],
    ['wait', 'result', (noun) => `Waits for the ${noun}.`],
    ['close', 'resource', (noun) => `Closes the ${noun}.`],
    ['cancel', 'task', (noun) => `Cancels the ${noun}.`],
    ['start', 'task', (noun) => `Starts the ${noun}.`],
    ['stop', 'task', (noun) => `Stops the ${noun}.`],
    ['is', 'specified', (noun) => `Checks whether the ${noun} condition is true.`],
    ['has', 'value', (noun) => `Checks whether the ${noun} exists.`],
    ['can', 'action', (noun) => `Checks whether the ${noun} is allowed.`],
    ['should', 'perform the action', (noun) => `Checks whether to ${noun}.`],
  ];

  for (const [prefix, fallback, describe] of rules) {
    const boundary = name[prefix.length];
    if (
      name.toLowerCase().startsWith(prefix) &&
      (name.length === prefix.length || boundary === '_' || /[A-Z0-9]/.test(boundary))
    ) {
      return describe(nounAfterVerb(name, prefix.length, fallback));
    }
  }
  return `Calls the \`${name}\` method.`;
}

function moduleSummary(name) {
  if (name.startsWith('api/')) {
    return `Provides generated APIs for the \`${name.slice(4).replaceAll('/', '.')}\` protobuf package.`;
  }
  if (name === 'sdk') {
    return 'Creates and configures Nebius SDK clients.';
  }
  return `Provides the ${words(name)} APIs.`;
}

function declarationSummary(reflection) {
  const name = reflection.name;
  const label = words(name);

  if (reflection.kindOf(ReflectionKind.Module | ReflectionKind.Namespace)) {
    return moduleSummary(name);
  }
  if (reflection.kindOf(ReflectionKind.Enum)) {
    return `Lists the supported ${label} values.`;
  }
  if (reflection.kindOf(ReflectionKind.EnumMember)) {
    return `Represents the ${label} value.`;
  }
  if (reflection.kindOf(ReflectionKind.Class)) {
    if (name.endsWith('Error')) return `Reports a ${words(name.slice(0, -5))} error.`;
    if (name.endsWith('Service')) return `Calls the ${words(name.slice(0, -7))} API.`;
    if (name.endsWith('Bearer')) return `Provides ${words(name.slice(0, -6))} credentials.`;
    if (name.endsWith('Parser')) return `Parses ${words(name.slice(0, -6))} values.`;
    return `Provides the ${label} API.`;
  }
  if (reflection.kindOf(ReflectionKind.Interface)) {
    if (name.endsWith('Options')) return `Defines options for ${words(name.slice(0, -7))}.`;
    if (name.endsWith('Server')) return `Defines the ${words(name.slice(0, -6))} server API.`;
    if (name.endsWith('Client')) return `Defines the ${words(name.slice(0, -6))} client API.`;
    return `Defines the ${label} API.`;
  }
  if (reflection.kindOf(ReflectionKind.TypeAlias)) {
    return `Defines the ${label} type.`;
  }
  if (reflection.kindOf(ReflectionKind.Variable)) {
    return `Contains the ${label} value.`;
  }
  if (reflection.kindOf(ReflectionKind.Property)) {
    if (name === '$type') return 'Contains the fully qualified protobuf type name.';
    return `Contains the ${label}.`;
  }
  if (reflection.kindOf(ReflectionKind.Constructor)) {
    return `Creates a new \`${reflection.parent?.name ?? 'instance'}\`.`;
  }
  if (reflection.kindOf(ReflectionKind.Accessor)) {
    if (reflection.getSignature && !reflection.setSignature) {
      return `Returns the ${label}.`;
    }
    if (reflection.setSignature && !reflection.getSignature) {
      return `Sets the ${label}.`;
    }
    return `Gets or sets the ${label}.`;
  }
  if (reflection.kindOf(ReflectionKind.Function | ReflectionKind.Method)) {
    return callableSummary(name);
  }
  return `Describes the ${label}.`;
}

function isGeneratedApi(reflection) {
  return (
    reflection.sources?.some(
      (source) =>
        source.fileName?.startsWith('src/api/') || source.fileName === 'src/runtime/protos/wkt.ts',
    ) ?? false
  );
}

function isAnonymousTypeElement(reflection) {
  let parent = reflection.parent;
  while (parent) {
    if (parent.name === '__type') return true;
    parent = parent.parent;
  }
  return false;
}

function addFallback(reflection) {
  if (!reflection.kindOf(documentedKinds)) return false;
  if (reflection.kindOf(ReflectionKind.Reference)) return false;
  if (
    !reflection.kindOf(ReflectionKind.Module | ReflectionKind.Namespace) &&
    !isGeneratedApi(reflection) &&
    !isAnonymousTypeElement(reflection)
  ) {
    return false;
  }
  if (reflection.inheritedFrom) return false;
  if (reflection.sources?.some((source) => source.fullFileName?.includes('/node_modules/'))) {
    return false;
  }
  if (reflection.hasComment()) return false;

  reflection.comment = new Comment([{ kind: 'text', text: declarationSummary(reflection) }]);
  return true;
}

function copySummary(comment) {
  return new Comment(comment.summary.map((part) => ({ ...part })));
}

function documentedOwner(reflection) {
  let owner = reflection.parent;
  while (owner && !owner.hasComment()) owner = owner.parent;
  return owner;
}

function addSignatureFallback(reflection) {
  if (!reflection.kindOf(signatureKinds) || reflection.hasComment()) return false;

  const owner = documentedOwner(reflection);
  if (owner?.comment) {
    reflection.comment = copySummary(owner.comment);
    return true;
  }
  if (reflection.kindOf(ReflectionKind.ConstructorSignature)) {
    reflection.comment = new Comment([{ kind: 'text', text: 'Creates a new client instance.' }]);
    return true;
  }
  if (reflection.kindOf(ReflectionKind.IndexSignature)) {
    reflection.comment = new Comment([{ kind: 'text', text: 'Returns the value for a key.' }]);
    return true;
  }
  if (reflection.kindOf(ReflectionKind.GetSignature)) {
    reflection.comment = new Comment([{ kind: 'text', text: 'Returns the property value.' }]);
    return true;
  }
  if (reflection.kindOf(ReflectionKind.SetSignature)) {
    reflection.comment = new Comment([{ kind: 'text', text: 'Sets the property value.' }]);
    return true;
  }
  reflection.comment = new Comment([{ kind: 'text', text: 'Calls this function.' }]);
  return true;
}

export function load(app) {
  app.converter.on(Converter.EVENT_RESOLVE_END, (context) => {
    let count = 0;
    for (const reflection of Object.values(context.project.reflections)) {
      if (addFallback(reflection)) count += 1;
    }
    for (const reflection of Object.values(context.project.reflections)) {
      if (addSignatureFallback(reflection)) count += 1;
    }
    app.logger.info(`Added fallback documentation to ${count} public API elements.`);
  });
}
