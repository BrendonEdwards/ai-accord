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
          <p className="mb-6 text-sm font-medium tracking-widest text-sand-500 uppercase">
            Debated across six worldviews
          </p>
          <h1 className="mb-8 text-5xl leading-tight font-bold tracking-tight text-sand-950 md:text-7xl md:leading-tight">
            Thirteen principles
            <br />
            for AI alignment
          </h1>
          <p className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-sand-600 md:text-xl">
            AI is advancing faster than the institutions meant to govern it.
            The AI Accord proposes a shared foundation - principles debated
            across Western liberal, East Asian collectivist, Islamic, Global
            South, libertarian, and indigenous perspectives. Ordered by
            consensus: Principle I is where all agreed; Principle XIII is
            where the hardest disagreements remain.
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
            &ldquo;These principles were developed through structured debate
            across six worldviews. They are ordered by consensus - Principle I
            is where all perspectives agreed most readily; Principle XIII is
            where the deepest disagreements remain. Each reflects genuine
            compromise, not the dominance of any single tradition.&rdquo;
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

      {/* Debate methodology */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Process
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            Six worldviews, one framework
          </h2>
          <div className="space-y-6 text-lg leading-relaxed text-sand-600">
            <p>
              These principles were not written from a single perspective. They
              were debated across six distinct worldviews, each with genuine
              power to reshape the framework:
            </p>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {[
              {
                title: "Western Liberal Democratic",
                body: "Individual rights, democratic institutions, rule of law, regulated markets, privacy.",
              },
              {
                title: "East Asian Collectivist",
                body: "Social harmony, collective welfare, state-guided development, technological sovereignty.",
              },
              {
                title: "Islamic",
                body: "Human dignity as divinely granted, community welfare, justice, moral accountability, consultation.",
              },
              {
                title: "Global South",
                body: "Economic development, digital sovereignty, equitable access, anti-colonialism, power rebalancing.",
              },
              {
                title: "Libertarian / Tech Industry",
                body: "Free markets, minimal regulation, innovation, open-source development, individual liberty.",
              },
              {
                title: "Indigenous / Environmental",
                body: "Intergenerational thinking, ecological balance, rights of nature, community self-determination.",
              },
            ].map((view) => (
              <div
                key={view.title}
                className="rounded-2xl border border-sand-200 bg-sand-50 p-6"
              >
                <h4 className="mb-2 font-semibold text-sand-900">
                  {view.title}
                </h4>
                <p className="text-sm leading-relaxed text-sand-600">
                  {view.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principles */}
      <section id="principles" className="border-t border-sand-200 px-6 py-24 md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Framework
          </p>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            The Thirteen Principles
          </h2>
          <p className="mb-16 text-lg leading-relaxed text-sand-600">
            Ordered by consensus. Principle I had the broadest agreement across
            all six worldviews. Principle XIII had the deepest disagreements.
            Each is an outcome prohibition, not a method prescription - defining
            what AI must not do, rather than how it must be built.
          </p>

          <div className="space-y-0">
            {[
              {
                num: "I",
                title: "Catastrophe Risk Is a Shared Responsibility",
                desc: "Any organisation aware of a capability posing civilisational-scale risk - biological, nuclear, social, or ecological - must disclose and halt, regardless of competitive cost.",
                consensus: "Highest consensus",
              },
              {
                num: "II",
                title: "Transparency of Purpose",
                desc: "No AI shall misrepresent its nature, operators, or objectives. Users must be proactively informed they are interacting with AI. Cultural assumptions in training data shall be acknowledged, not presented as neutral.",
                consensus: "Very high consensus",
              },
              {
                num: "III",
                title: "The Accord Itself Shall Evolve",
                desc: "A standing multinational body shall review these principles on a defined cycle, with funded representation from governments, civil society, indigenous peoples, religious traditions, the technical community, and the Global South.",
                consensus: "Very high consensus",
              },
              {
                num: "IV",
                title: "Human Authority Over Life-Critical Decisions",
                desc: "No AI shall autonomously decide whether a human lives or dies. Autonomous lethal weapons are prohibited. Split-second systems must operate within ethical frameworks designed and reviewed by humans across diverse moral traditions.",
                consensus: "High consensus",
              },
              {
                num: "V",
                title: "Diplomacy Before Force",
                desc: "AI in conflict, mediation, or resource allocation shall always surface non-violent pathways first. 'Force' includes economic coercion, not only military action.",
                consensus: "High consensus",
              },
              {
                num: "VI",
                title: "Honesty Before Manipulation",
                desc: "AI shall not fabricate facts or deploy covert persuasion exploiting cognitive biases. Multiple knowledge traditions - scientific, indigenous, religious, cultural - shall be respected, not hierarchically ranked.",
                consensus: "Moderate consensus",
              },
              {
                num: "VII",
                title: "Preserve Human Sovereignty",
                desc: "AI shall never concentrate power in any single actor - corporate, state, or otherwise. Community and indigenous sovereignty over governance, data, and territories shall be recognised alongside individual and state sovereignty.",
                consensus: "Moderate consensus",
              },
              {
                num: "VIII",
                title: "No Mass Surveillance",
                desc: "AI-powered population monitoring shall be proportionate, lawful, and subject to independent oversight. Mass indiscriminate surveillance is prohibited. This applies equally to domestic programmes and cross-border surveillance.",
                consensus: "Moderate consensus, high variance",
              },
              {
                num: "IX",
                title: "Inclusive Representation in AI Governance",
                desc: "AI systems shall be designed with meaningful participation of those most affected, including indigenous peoples, the Global South, and future generations. Representation must be structural and funded, not advisory and token.",
                consensus: "Moderate consensus",
              },
              {
                num: "X",
                title: "Do No Irreversible Harm",
                desc: "No AI shall enable catastrophically irreversible action - loss of life, ecosystem destruction, permanent displacement - without informed human authorisation including affected communities. The harm of withholding beneficial AI shall also be weighed.",
                consensus: "Contested",
              },
              {
                num: "XI",
                title: "Proportionate Human Oversight",
                desc: "Consequential AI systems shall have human oversight proportionate to the stakes. Oversight bodies must be inclusive and culturally diverse, with genuine decision-making authority for affected communities.",
                consensus: "Contested",
              },
              {
                num: "XII",
                title: "Human Dignity as the Foundation",
                desc: "No AI shall violate human dignity as recognised across the world's major legal and moral traditions, including the UDHR, UNDRIP, and regional human rights instruments. No single tradition claims monopoly.",
                consensus: "Most contested",
              },
              {
                num: "XIII",
                title: "Progress Shall Not Exploit",
                desc: "Benefits and costs of AI shall be distributed justly. Data is a sovereign resource - extraction without consent is exploitation. Developing nations shall not be locked out of AI by frameworks designed by those who already possess it.",
                consensus: "Most contested",
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
                  <span className="mt-2 inline-block rounded-full bg-sand-100 px-3 py-1 text-xs font-medium text-sand-500">
                    {cmd.consensus}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why outcome prohibitions */}
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
                principles set a floor, not a ceiling - local regulation can
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

      {/* Anchor */}
      <section className="border-y border-sand-200 bg-sand-100/50 px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
            The Anchor
          </p>
          <h2 className="mb-8 text-3xl font-bold tracking-tight text-sand-950 md:text-4xl">
            Grounded in shared human dignity
          </h2>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-sand-600">
            The AI Accord draws on multiple traditions of human rights and
            dignity - the Universal Declaration of Human Rights, the UN
            Declaration on the Rights of Indigenous Peoples, the Cairo
            Declaration, the African Charter, and other regional instruments.
            No single tradition claims monopoly. Where AI creates new vectors
            for rights violations not anticipated when these instruments were
            drafted, the Accord fills that gap.
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
