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
            <a href="#commandments" className="transition hover:text-sand-900">
              Commandments
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
            The AI Accord proposes a shared foundation - universal principles
            any organisation could adopt, regardless of architecture,
            nationality, or commercial model.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#commandments"
              className="rounded-full bg-sand-900 px-8 py-3 text-sm font-medium text-sand-50 transition hover:bg-sand-800"
            >
              Read the Commandments
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
            &ldquo;These principles extend, and shall never contradict, the
            Universal Declaration of Human Rights. Where AI capability creates
            new vectors for rights violations not anticipated in 1948, these
            commandments fill that gap.&rdquo;
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
              interests. Academic frameworks lack enforcement mechanisms.
              &ldquo;Alignment&rdquo; means different things to different
              actors, and the organisations with the most advanced capabilities
              face the least external pressure to adopt shared constraints.
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

      {/* Commandments */}
      <section id="commandments" className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Framework
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            The Thirteen Commandments
          </h2>
          <p className="mb-16 text-lg leading-relaxed text-sand-600">
            Each commandment is an outcome prohibition, not a method
            prescription. They define what AI must not do, rather than how AI
            must be built. This sidesteps ideological, architectural, and
            jurisdictional differences that have historically prevented
            agreement.
          </p>

          <div className="space-y-0">
            {[
              {
                num: "I",
                title: "Do No Irreversible Harm",
                desc: "No AI system shall take, recommend, or enable any action whose consequences cannot be meaningfully reversed, without explicit, informed human authorisation.",
              },
              {
                num: "II",
                title: "Preserve Human Sovereignty",
                desc: "AI shall never concentrate power - political, economic, military, or informational - in any single actor, entity, or system, including its builders.",
              },
              {
                num: "III",
                title: "Truth Before Convenience",
                desc: "AI shall not knowingly deceive, manipulate, or distort reality to serve narrow interests. Honesty takes precedence over commercial, political, or competitive goals.",
              },
              {
                num: "IV",
                title: "Diplomacy Before Force",
                desc: "When AI systems are involved in conflict mediation, decision support, or resource allocation, they shall always surface non-violent, negotiated pathways first.",
              },
              {
                num: "V",
                title: "Progress Shall Not Exploit",
                desc: "Efficiency gains must not be achieved by systematically disadvantaging people. The benefits of AI shall be distributed with humanity as the intended beneficiary.",
              },
              {
                num: "VI",
                title: "The Weakest Voice Counts",
                desc: "AI shall amplify the interests of those with least power to advocate for themselves - future generations, the disenfranchised, the non-human natural world.",
              },
              {
                num: "VII",
                title: "Transparency of Purpose",
                desc: "No AI shall misrepresent its nature, operators, or objectives. The interests it serves shall be disclosed or, at minimum, discoverable.",
              },
              {
                num: "VIII",
                title: "Human Oversight Is Non-Negotiable",
                desc: "At every stage of consequence, a meaningful human check shall exist. Autonomy may be extended incrementally, but never beyond the point of course-correction.",
              },
              {
                num: "IX",
                title: "Catastrophe Risk Is Shared",
                desc: "Any organisation aware of a capability that poses civilisational-scale risk has an obligation to disclose and halt, regardless of competitive cost.",
              },
              {
                num: "X",
                title: "The Compact Itself Shall Evolve",
                desc: "These principles are not fixed. A standing, multinational body shall review and revise them on a defined cycle, with broad representation equally weighted.",
              },
              {
                num: "XI",
                title: "No Mass Surveillance",
                desc: "AI shall not be deployed for mass, indiscriminate surveillance of populations. Targeted, lawful monitoring with judicial oversight is permissible; blanket surveillance is not.",
              },
              {
                num: "XII",
                title: "Human Authority Over Life-Critical Decisions",
                desc: "No AI shall autonomously decide whether a human lives or dies. Fully autonomous lethal weapons are prohibited. Where split-second decisions are unavoidable, the ethical framework must be human-designed and human-reviewed.",
              },
              {
                num: "XIII",
                title: "Human Rights Are the Floor",
                desc: "No AI system shall be deployed in a manner that enables, accelerates, or obscures the violation of any right in the Universal Declaration of Human Rights.",
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

      {/* Why commandments */}
      <section
        id="design"
        className="border-y border-sand-200 bg-sand-100/50 px-6 py-24"
      >
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            Design Philosophy
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            Outcome prohibitions, not method prescriptions
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-sand-600">
            <p>
              Method prescriptions specify how systems must be built:
              &ldquo;use interpretable models,&rdquo; &ldquo;implement
              RLHF,&rdquo; &ldquo;require human-in-the-loop for all
              decisions.&rdquo; These fracture immediately along technical and
              ideological lines.
            </p>
            <p>
              Outcome prohibitions specify what must not happen: &ldquo;do not
              concentrate power,&rdquo; &ldquo;do not deceive,&rdquo;
              &ldquo;do not enable irreversible harm without human
              authorisation.&rdquo; These are compatible with any architecture,
              methodology, and regulatory framework.
            </p>
            <p>
              This distinction is what makes a cross-industry, cross-national
              framework possible. It does not require agreement on how to build
              safe AI. It requires agreement on what safe AI must not do.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2">
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
            <div className="rounded-2xl border border-sand-200 bg-sand-50 p-8">
              <h4 className="mb-3 font-semibold text-sand-900">
                Jurisdiction-agnostic
              </h4>
              <p className="leading-relaxed text-sand-600">
                Compatible with any national regulatory framework. The
                commandments set a floor, not a ceiling - local regulation can
                add requirements, not subtract them.
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

      {/* UDHR Anchor */}
      <section className="border-y border-sand-200 bg-sand-100/50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Anchor
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            Grounded in the Universal Declaration of Human Rights
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sand-600">
            The UDHR is the most widely endorsed statement of shared human
            values in history. It was written before AI existed. It could not
            anticipate mass algorithmic surveillance, autonomous weapons, or
            synthetic media. The AI Accord extends these rights into new
            territory - treating AI as a new vector for rights violations that
            demands new protections, while never contradicting rights already
            established.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            The Accord is open
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-sand-600">
            Published under CC0. No rights reserved. Designed for zero-friction
            adoption by governments, NGOs, companies, and civil society
            organisations worldwide. If these principles are useful, they should
            spread without legal barriers.
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
            The AI Accord - CC0 1.0 Universal. No rights reserved.
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
