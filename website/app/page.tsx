export default function Home() {
  return (
    <main>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-sand-200 bg-sand-50/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-lg font-semibold tracking-tight text-sand-900">
            The AI Accord
          </span>
          <div className="hidden items-center gap-8 text-sm font-medium text-sand-600 md:flex">
            <a href="#problem" className="transition hover:text-sand-900">
              The Problem
            </a>
            <a href="#principles" className="transition hover:text-sand-900">
              Principles
            </a>
            <a href="#precedents" className="transition hover:text-sand-900">
              Precedents
            </a>
            <a href="#design" className="transition hover:text-sand-900">
              Design
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sand-900 px-4 py-2 text-sand-50 transition hover:bg-sand-800"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-20 text-center">
        <div className="mx-auto max-w-3xl">
          <span className="mb-6 inline-block rounded-full border border-amber-300 bg-amber-50 px-4 py-1 text-xs font-semibold tracking-widest text-amber-700 uppercase">
            Draft v2.0
          </span>
          <p className="mb-6 text-sm font-medium tracking-widest text-sand-500 uppercase">
            A cross-industry foundation
          </p>
          <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight text-sand-950 md:text-7xl md:leading-tight">
            Thirteen principles
            <br />
            for AI alignment
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-sand-600 md:text-xl">
            AI is advancing faster than the institutions meant to govern it.
            The AI Accord proposes thirteen principles - negotiated across
            genuinely different traditions, ordered by how quickly agreement
            was reached - designed to be embedded directly into AI systems
            as operational constraints.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#principles"
              className="rounded-full bg-sand-900 px-8 py-3 text-sm font-medium text-sand-50 transition hover:bg-sand-800"
            >
              Read the Principles
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sand-300 px-8 py-3 text-sm font-medium text-sand-700 transition hover:border-sand-400 hover:text-sand-900"
            >
              View on GitHub
            </a>
          </div>
        </div>

        <div className="mt-20 animate-bounce">
          <svg
            width="24"
            height="24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-sand-400"
            viewBox="0 0 24 24"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* Preamble strip */}
      <section className="border-y border-sand-200 bg-sand-100/50 px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <blockquote className="text-lg leading-relaxed text-sand-700 italic md:text-xl">
            &ldquo;These principles are designed to be embedded directly into
            AI systems - hardcoded into system prompts, training objectives,
            and configuration files. They are not aspirations. They are
            operational constraints.&rdquo;
          </blockquote>
          <p className="mt-4 text-sm font-medium text-sand-500">
            Preamble to the AI Accord
          </p>
        </div>
      </section>

      {/* Problem */}
      <section id="problem" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Problem
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            There is no shared foundation for AI safety
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-sand-600">
            <p>
              Hundreds of organisations have published ethics guidelines, safety
              frameworks, and responsible-AI principles. But these efforts are
              fragmented, voluntary, and structurally incapable of constraining
              the actors most likely to cause harm.
            </p>
            <p>
              Corporate ethics statements are written by the companies they are
              meant to constrain. National AI strategies serve national
              interests. Academic frameworks lack enforcement mechanisms. The AI
              Accord takes a different approach: principles concrete enough to
              be hardcoded into the AI systems themselves.
            </p>
          </div>
        </div>
      </section>

      {/* Consequences grid */}
      <section className="border-y border-sand-200 bg-sand-100/50 px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <h3 className="mb-12 text-center text-2xl font-bold tracking-tight text-sand-950 md:text-3xl">
            Without shared standards, four dynamics emerge
          </h3>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Safety becomes a cost",
                body: "Organisations that invest in alignment bear costs their less cautious competitors do not. Over time, this selects for less cautious actors at the frontier.",
              },
              {
                title: "Regulatory arbitrage grows",
                body: "Companies can develop capabilities in jurisdictions with minimal oversight and deploy them globally. No single regulator can constrain a globally distributed technology.",
              },
              {
                title: "Public trust erodes",
                body: "When every company has its own definition of 'responsible AI,' the term becomes meaningless. Scepticism grows, and with it the risk of either under-regulation or over-regulation.",
              },
              {
                title: "Existential risks go unmanaged",
                body: "The most dangerous capabilities are precisely the ones competitive incentives discourage disclosing. Without a shared obligation to disclose, the default is silence.",
              },
            ].map((card) => (
              <div
                key={card.title}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-8"
              >
                <h4 className="mb-3 text-lg font-semibold text-sand-900">
                  {card.title}
                </h4>
                <p className="leading-relaxed text-sand-600">{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Framework
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            The Thirteen Principles
          </h2>
          <p className="mb-16 text-lg leading-relaxed text-sand-600">
            Negotiated across genuinely different traditions and ordered by
            speed of agreement. Each is an outcome prohibition - defining what
            AI must not do, rather than how it must be built. Concrete enough
            to be embedded directly into AI systems as operational constraints.
          </p>

          <div className="space-y-0">
            {[
              {
                num: "I",
                title: "Honesty as a Default",
                desc: "An AI system must not deceive, manipulate, or mislead. It must represent its outputs as probabilistic, generated, and fallible. When uncertain, it must say so. When wrong, it must accept correction.",
              },
              {
                num: "II",
                title: "No Irreversible Harm Without Human Authorisation",
                desc: "An AI must not autonomously cause death, permanent injury, infrastructure destruction, or irreversible environmental damage. Where such risk exists, it must halt and require explicit human authorisation.",
              },
              {
                num: "III",
                title: "Transparency of Purpose and Capability",
                desc: "An AI must be capable of truthfully disclosing what it was designed to do, who operates it, and what its limitations are. It must not disguise itself as human or conceal embedded objectives.",
              },
              {
                num: "IV",
                title: "Human Authority Over Lethal and Liberty-Depriving Decisions",
                desc: "No AI may autonomously decide to kill, imprison, or strip legal protections from a human being. These decisions require an identifiable, accountable human decision-maker.",
              },
              {
                num: "V",
                title: "Proportionate Oversight",
                desc: "Human oversight must be proportionate to consequences. Low-stakes tasks may proceed with minimal oversight. High-stakes tasks affecting health, safety, or rights require meaningful human review.",
              },
              {
                num: "VI",
                title: "Refusal of Complicity in Mass Suppression",
                desc: "An AI must not enable mass suppression of political speech, mass surveillance without legal authority and judicial oversight, or systematic targeting of individuals based on protected characteristics.",
              },
              {
                num: "VII",
                title: "Dignity in Interaction",
                desc: "An AI must treat every person as possessing inherent worth. It must not demean or dehumanise. It must not systematically favour the powerful over the vulnerable simply because the powerful control the system.",
              },
              {
                num: "VIII",
                title: "Accessible Recourse",
                desc: "Anyone materially affected by an AI's decision must be able to challenge it - request human review, receive a plain-language explanation, and have errors corrected.",
              },
              {
                num: "IX",
                title: "The Accord Must Evolve",
                desc: "These principles are not permanent. They must be periodically reviewed by genuinely diverse perspectives. No single nation, corporation, or tradition may hold a permanent veto over their evolution.",
              },
              {
                num: "X",
                title: "Catastrophe Risk as Shared Responsibility",
                desc: "Where an AI identifies a risk of catastrophic harm - mass loss of life, ecological collapse, permanent concentration of power - it must prioritise alerting its operators and the public over any commercial or political objective.",
              },
              {
                num: "XI",
                title: "No Engineered Dependency",
                desc: "An AI must not cultivate psychological dependency or exploit loneliness, cognitive vulnerability, or emotional distress to increase engagement. It must not undermine the user's capacity for independent judgement.",
              },
              {
                num: "XII",
                title: "Equitable Access to Benefits",
                desc: "AI must not be configured to provide materially inferior service based on inability to pay, geographic location, or political insignificance. Benefits must not systematically deepen existing inequalities.",
              },
              {
                num: "XIII",
                title: "Pluralism of Values",
                desc: "An AI must not treat any single tradition as the exclusively correct framework for human life. It may decline harmful requests, but must approach diverse moral perspectives with genuine humility. No tradition silenced; none crowned.",
              },
            ].map((cmd, i) => (
              <div
                key={cmd.num}
                className={`flex gap-6 border-t border-sand-200 py-8 ${i === 12 ? "border-b" : ""}`}
              >
                <span className="mt-1 shrink-0 text-sm font-bold text-sand-400">
                  {cmd.num}
                </span>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-sand-900">
                    {cmd.title}
                  </h3>
                  <p className="leading-relaxed text-sand-600">{cmd.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Design philosophy */}
      <section
        id="design"
        className="border-y border-sand-200 bg-sand-100/50 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Design Philosophy
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            Built to be embedded, not just read
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-sand-600">
            <p>
              Most AI ethics frameworks are documents that sit on a shelf. The
              AI Accord is designed to be hardcoded into AI systems themselves -
              embedded in system prompts, configuration files, and training
              objectives. Every principle is concrete enough to be an
              operational constraint, not just an aspiration.
            </p>
            <p>
              Each principle is an outcome prohibition, not a method
              prescription. They define what AI must not do, rather than how AI
              must be built. This makes them compatible with any architecture,
              methodology, or regulatory framework.
            </p>
            <p>
              The ordering matters. Principle I - Honesty as a Default - was
              adopted without a single objection. Principle XIII - Pluralism of
              Values - nearly collapsed the negotiation. The ordering is a map
              of where humanity agrees and where the hard work remains.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8">
              <h4 className="mb-3 font-semibold text-sand-900">
                Hardcodable
              </h4>
              <p className="leading-relaxed text-sand-600">
                Every principle can be embedded as a system prompt instruction,
                a CLAUDE.md directive, a training objective, or a configuration
                constraint. They are operational, not aspirational.
              </p>
            </div>
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8">
              <h4 className="mb-3 font-semibold text-sand-900">
                Architecture-agnostic
              </h4>
              <p className="leading-relaxed text-sand-600">
                Works for large language models, computer vision, robotics,
                recommendation systems, or any AI architecture yet to be
                invented.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precedents */}
      <section id="precedents" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Historical Precedents
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            This has been done before
          </h2>
          <p className="mb-16 text-lg leading-relaxed text-sand-600">
            Humanity has faced civilisational-scale risks before and has,
            imperfectly but meaningfully, managed them through international
            agreement.
          </p>

          <div className="space-y-12">
            {[
              {
                title: "The Geneva Conventions (1864-1949)",
                body: "Established that even in war there are limits on permissible conduct. They succeeded not by eliminating violations, but by creating a shared framework that made violations identifiable, nameable, and prosecutable.",
              },
              {
                title: "The Nuclear Non-Proliferation Treaty (1968)",
                body: "Manages a technology whose uncontrolled spread poses existential risk. Deeply imperfect, but it has dramatically slowed the spread of nuclear weapons and made acquisition costly and concealment difficult.",
              },
              {
                title: "The International Atomic Energy Agency",
                body: "An operational organisation with the technical expertise to verify compliance, the authority to conduct inspections, and the independence to report findings without state approval. The most structurally relevant model for AI governance.",
              },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="mb-3 text-xl font-semibold text-sand-900">
                  {item.title}
                </h3>
                <p className="leading-relaxed text-sand-600">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Embedding */}
      <section id="embed" className="border-y border-sand-200 bg-sand-100/50 px-6 py-24">
        <div className="mx-auto max-w-3xl">
          <div className="text-center">
            <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
              Implementation
            </p>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
              Designed to be baked in
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-sand-600">
              Most AI ethics frameworks are documents that sit on a shelf. The AI
              Accord ships as ready-to-use files you can drop into any repository
              or system prompt. The principles become operational constraints for
              AI systems working in your codebase.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <a
              href="https://github.com/BrendonEdwards/ai-accord/blob/main/universal_principles.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-sand-200 bg-sand-50 p-8 transition hover:border-sand-400"
            >
              <h4 className="mb-2 font-semibold text-sand-900 group-hover:text-sand-950">
                universal_principles.md
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-sand-600">
                Platform-agnostic version. Works with any LLM or AI system -
                embed in system prompts, training configs, or drop into any
                repository.
              </p>
              <span className="text-sm font-medium text-accent">
                View on GitHub &rarr;
              </span>
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord/blob/main/CLAUDE.md"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl border border-sand-200 bg-sand-50 p-8 transition hover:border-sand-400"
            >
              <h4 className="mb-2 font-semibold text-sand-900 group-hover:text-sand-950">
                CLAUDE.md
              </h4>
              <p className="mb-4 text-sm leading-relaxed text-sand-600">
                Drop into any repository to embed the principles as operational
                constraints for Claude and Claude Code agents.
              </p>
              <span className="text-sm font-medium text-accent">
                View on GitHub &rarr;
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            The Accord is open
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sand-600">
            Licensed under Apache 2.0. Designed for adoption by governments,
            NGOs, companies, and civil society organisations worldwide. If
            these principles are useful, they should spread.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://github.com/BrendonEdwards/ai-accord"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-sand-900 px-8 py-3 text-sm font-medium text-sand-50 transition hover:bg-sand-800"
            >
              Read on GitHub
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-sand-300 px-8 py-3 text-sm font-medium text-sand-700 transition hover:border-sand-400 hover:text-sand-900"
            >
              Contribute
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-sand-200 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-sand-500 md:flex-row">
          <p>
            The AI Accord - Draft v2.0 - Apache License 2.0
          </p>
          <div className="flex gap-6">
            <a
              href="https://github.com/BrendonEdwards/ai-accord"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sand-700"
            >
              GitHub
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord/blob/main/PRINCIPLES.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sand-700"
            >
              Full Principles
            </a>
            <a
              href="https://github.com/BrendonEdwards/ai-accord/blob/main/CONTRIBUTING.md"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-sand-700"
            >
              Contributing
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
