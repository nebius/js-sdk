# SDK agent rules

- Public API needs real JSDoc coverage: modules, exports, types, members. Matching inherited docs OK.
- Generic TypeDoc fallback ≠ proof of coverage.
- New/changed API: explain behavior, defaults, failures when non-obvious.
- Behavior change → sync JSDoc, README examples, migration notes.
- Comments/docs use STE (Simplified Technical English): short sentences, active voice, simple words, one idea per sentence, stable terms. Define acronyms first use. No fluff.
- Comment intent and non-obvious logic. No line-by-line narration.
- Missing-doc warnings must fail validation. Never relax coverage checks.
