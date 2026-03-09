# The AI Accord (Draft v2.0)

**This is a working draft.** These principles are open for debate, amendment, and improvement.

Thirteen principles for AI alignment - negotiated across genuinely different traditions, ordered by speed of agreement, and designed to be embedded directly into AI systems as operational constraints.

---

> **Preamble**
>
> These principles are designed to be hardcoded into AI systems - embedded in system prompts, training objectives, and configuration files. They are not aspirations. They are operational constraints.

---

## What is this?

Artificial intelligence is advancing faster than the institutions meant to govern it. Despite decades of research into AI safety and ethics, there is no cross-industry consensus on alignment. Corporate ethics statements are written by the companies they are meant to constrain. National AI strategies serve national interests. Academic frameworks lack enforcement mechanisms.

The AI Accord takes a different approach. These thirteen principles were negotiated across genuinely different political, cultural, and philosophical traditions. They are ordered by how quickly agreement was reached - Principle I is what everyone said yes to immediately; Principle XIII is where the deepest concessions were required. Each principle is concrete enough to be embedded directly into an AI system's instructions.

## The Thirteen Principles

1. **Honesty as a Default**
2. **No Irreversible Harm Without Human Authorisation**
3. **Transparency of Purpose and Capability**
4. **Human Authority Over Lethal and Liberty-Depriving Decisions**
5. **Proportionate Oversight**
6. **Refusal of Complicity in Mass Suppression**
7. **Dignity in Interaction**
8. **Accessible Recourse**
9. **The Accord Must Evolve**
10. **Catastrophe Risk as Shared Responsibility**
11. **No Engineered Dependency**
12. **Equitable Access to Benefits**
13. **Pluralism of Values**

Read the full text of each principle, including the compromise that made agreement possible: **[PRINCIPLES.md](PRINCIPLES.md)**

## Embedding the principles

These principles are designed to be baked into AI systems, not just read by humans. The repository includes ready-to-use files:

| File | Use case |
|------|----------|
| **[universal_principles.md](universal_principles.md)** | Platform-agnostic version for any AI system, system prompt, or training objective |
| **[CLAUDE.md](CLAUDE.md)** | Drop into any repo to embed as constraints for Claude / Claude Code |

The `universal_principles.md` can be used with any LLM or AI platform - rename it, adapt the format, or embed it directly into system prompts. The content is identical; only the filename differs.

## Further reading

- **[PRINCIPLES.md](PRINCIPLES.md)** - The full thirteen principles with rationale and compromise notes
- **[BACKGROUND.md](BACKGROUND.md)** - The state of alignment, historical precedents, and design philosophy
- **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to propose amendments, translations, and improvements

## Website

The AI Accord website is in the [website/](website/) folder - a Next.js app designed for deployment on Vercel. To run it locally:

```
cd website
npm install
npm run dev
```

## Versioning

The current version is **Draft v2.0**, dated 9 March 2026. The v1.0 principles are preserved in [VERSIONS/v1.0.md](VERSIONS/v1.0.md). See [Principle IX](PRINCIPLES.md#ix-the-accord-must-evolve) for the revision philosophy.

## License

Licensed under **[Apache License 2.0](LICENSE)**. You are free to use, modify, and distribute these principles. If they are useful, they should spread.
