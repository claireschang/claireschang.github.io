import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Mail,
  Github,
  GraduationCap,
  FlaskConical,
  Award,
  Briefcase,
  Sparkles,
  BookOpen,
  Code2,
  Presentation,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Claire Chang — Operations Research & Information Engineering" },
      {
        name: "description",
        content:
          "Claire Chang, Ph.D. student at Cornell ORIE. Research in stochastic processes, ranking methods, and information design. Fun-but-academic personal site.",
      },
      { property: "og:title", content: "Claire Chang — ORIE @ Cornell" },
      {
        property: "og:description",
        content:
          "Ph.D. student in Operations Research & Information Engineering. Research, publications, teaching, and more.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Work+Sans:wght@300;400;500;600&display=swap",
      },
    ],
  }),
});

function Section({
  id,
  icon: Icon,
  title,
  kicker,
  children,
}: {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  kicker?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 py-14 md:py-20">
      <div className="mb-8 flex items-center gap-3">
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Icon className="h-4 w-4" />
        </span>
        <div>
          {kicker && (
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {kicker}
            </div>
          )}
          <h2 className="text-3xl md:text-4xl font-normal">{title}</h2>
        </div>
      </div>
      {children}
    </section>
  );
}

function Entry({
  title,
  meta,
  sub,
  children,
}: {
  title: string;
  meta?: string;
  sub?: string;
  children?: React.ReactNode;
}) {
  return (
    <article className="rounded-2xl border border-border bg-card p-5 md:p-6 transition-colors hover:border-primary/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <h3 className="text-lg md:text-xl font-medium text-foreground">{title}</h3>
        {meta && (
          <span className="text-xs md:text-sm text-muted-foreground tabular-nums">
            {meta}
          </span>
        )}
      </div>
      {sub && (
        <p className="mt-1 text-sm italic text-muted-foreground">{sub}</p>
      )}
      {children && <div className="mt-3 text-sm leading-relaxed text-foreground/85">{children}</div>}
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-serif text-xl">
            Claire <span className="text-primary">Chang</span>
          </a>
          <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
            <a href="#research" className="hover:text-foreground">Research</a>
            <a href="#publications" className="hover:text-foreground">Publications</a>
            <a href="#teaching" className="hover:text-foreground">Teaching</a>
            <a href="#projects" className="hover:text-foreground">Projects</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="mx-auto max-w-5xl px-5">
        {/* Hero */}
        <section className="relative py-16 md:py-28">
          <div className="absolute inset-0 -z-10 paper-grain opacity-40" aria-hidden />
          <div className="absolute right-0 top-10 -z-10 h-40 w-40 rounded-full bg-rose/40 blur-3xl" aria-hidden />
          <div className="absolute left-10 bottom-0 -z-10 h-32 w-32 rounded-full bg-sage/40 blur-3xl" aria-hidden />

          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Currently: Ph.D. student at Cornell ORIE
          </p>
          <h1 className="font-serif text-5xl leading-[1.05] md:text-7xl">
            Hi, I'm Claire — I study how{" "}
            <em className="text-primary">information, uncertainty,</em> and{" "}
            <span className="squiggle text-primary">decisions</span> tangle together.
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-lg text-muted-foreground">
            Operations research by day, ranking algorithms and the occasional
            audio-tampering experiment by night. I like clean proofs, messy
            data, and explaining both with a whiteboard marker that's running
            slightly low on ink.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:claires.chang@gmail.com"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Say hi
            </a>
            <a
              href="https://github.com/claireschang/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>

        {/* Education */}
        <Section id="education" icon={GraduationCap} title="Education" kicker="01 — Schooling">
          <div className="grid gap-4 md:grid-cols-2">
            <Entry
              title="Cornell University"
              meta="Expected Spring 2028"
              sub="Ph.D., Operations Research & Information Engineering — Ithaca, NY"
            >
              Coursework: Stochastic Processes, Mathematical Programming,
              Statistics, Structure of Information Networks, Information Design
              & Multi-Agent RL, Stochastic Control.
            </Entry>
            <Entry
              title="Harvey Mudd College"
              meta="May 2023"
              sub="B.S., Mathematics & Computer Science — Claremont, CA"
            >
              Discrete Math, Algorithms, Signal Processing, Analysis, Abstract
              Algebra, Probability, Deterministic & Stochastic Operations
              Research.
            </Entry>
          </div>
        </Section>

        {/* Research */}
        <Section id="research" icon={FlaskConical} title="Research" kicker="02 — Lab notebooks">
          <div className="grid gap-4">
            <Entry
              title="Senior Thesis in Mathematics"
              meta="Aug 2022 – May 2023"
              sub="Advisor: Jamie Haddock"
            >
              Studied the sensitivity of ranking methods for sports (least
              squares & Markov chain methods), exploring a network-diffusion
              interpretation for a family of Laplacian rankings.
            </Entry>
            <Entry
              title="HMC × Boston College Clinic"
              meta="Aug 2022 – May 2023"
              sub="Advisors: Lisette de Pillis, Nadia Abuelezam"
            >
              Incorporated racism into a COVID-19 infectious disease model
              using a systems-science approach; modeled interventions for an
              NIH grant in a team of 5.
            </Entry>
            <Entry
              title="Operations Research Lab"
              meta="Jan – May 2022"
              sub="Advisor: Susan Martonosi"
            >
              Refined an LP model for optimal price & quantity of hexavalent
              vaccines for GAVI; built Python tooling for AMPL solver output.
            </Entry>
            <Entry
              title="Music Information Retrieval Lab"
              meta="May 2021 – Apr 2022"
              sub="Advisor: Timothy J. Tsai"
            >
              Investigated a new Dynamic Time Warping variant to detect audio
              tampering across 800+ minutes of recordings. First-author paper
              in <em>Applied Sciences</em> (2022).
            </Entry>
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" icon={BookOpen} title="Publications" kicker="03 — In print">
          <Entry title="Parameter-Free Ordered Partial Match Alignment with Hidden State Time Warping" meta="Apr 2022" sub="Appl. Sci. 2022, 12, 3783">
            Chang, C.; Shaw, T.; Goutam, A.; Lau, C.; Shan, M.; Tsai, T.J.{" "}
            <a
              href="https://doi.org/10.3390/app12083783"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              doi.org/10.3390/app12083783
            </a>
          </Entry>
        </Section>

        {/* Awards */}
        <Section id="awards" icon={Award} title="Awards" kicker="04 — Shiny things">
          <ul className="grid gap-3 md:grid-cols-2">
            {[
              ["Robert E. Bechhofer Fellowship", "Cornell · 2023–2024"],
              ["NSF Graduate Research Fellowship", "2023–2028"],
              ["Henry A. Krieger Prize in Decision Sciences", "HMC · Oct 2022"],
              ["1,000 Dreams Fund + HARMAN's New Face of Tech", "Dec 2020"],
            ].map(([title, meta]) => (
              <li
                key={title}
                className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="font-medium">{title}</div>
                  <div className="text-xs text-muted-foreground">{meta}</div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Teaching & Work */}
        <Section id="teaching" icon={Briefcase} title="Teaching & Work" kicker="05 — Day jobs">
          <div className="grid gap-4">
            <Entry title="Inspirit AI — AI Instructor" meta="Jun 2021 – Present" sub="Remote">
              Teach high schoolers AI from logistic regression to NLP &
              neural networks, then mentor through capstone projects.
            </Entry>
            <Entry
              title="HMC Math & CS — Grader / Tutor"
              meta="Aug 2020 – Dec 2022"
              sub="Claremont, CA"
            >
              Intro CS, Data Structures, Discrete Math, Computability & Logic,
              Scientific Computing, Operations Research. Weekly tutoring,
              emphasizing mathematical clarity.
            </Entry>
            <Entry
              title="HMC Admission — Senior Intern"
              meta="Aug – Dec 2022"
              sub="Claremont, CA"
            >
              Interviewed prospective students ~5 hrs/week, lowering the
              barrier for first-gen and low-income applicants.
            </Entry>
            <Entry
              title="Amazon Web Services — SDE Intern, RDS"
              meta="May – Aug 2022"
            >
              Built read-replica creation for Single-AZ SQL databases. Learned
              the gospel of code review.
            </Entry>
            <Entry title="Juni Learning — CS Tutor" meta="Jun 2020 – May 2021" sub="Remote">
              Taught Scratch, Python, Java, and web dev to students ages 6–18.
            </Entry>
          </div>
        </Section>

        {/* Presentations */}
        <Section id="presentations" icon={Presentation} title="Presentations" kicker="06 — Talks">
          <Entry title="Sensitivity of a Laplacian Family of Ranking Methods">
            <ul className="space-y-1">
              <li>MAA SoCal-Nevada Fall Meeting — Dec 2022</li>
              <li>IMSSRS — April 2023</li>
              <li>SOCAMS — April 2023</li>
              <li>MAA SoCal-Nevada Spring Meeting — April 2023</li>
            </ul>
          </Entry>
        </Section>

        {/* Activities */}
        <Section id="activities" icon={Users} title="Activities" kicker="07 — Off the clock">
          <div className="grid gap-4 md:grid-cols-3">
            <Entry title="ACM-W Co-Chair" meta="2019 – 2023" sub="Claremont, CA">
              Ran workshops, mentorship & tech talks impacting 200+ people.
            </Entry>
            <Entry title="Rewriting the Code" meta="Summer 2022" sub="Seattle Hub Leader">
              Doubled event attendance vs. peer cities on a $4,500 budget.
            </Entry>
            <Entry title="Study Cloud Co-President" meta="2019 – 2021" sub="Web dev club">
              Built a student resource-sharing site on DigitalOcean.
            </Entry>
          </div>
        </Section>

        {/* Projects */}
        <Section id="projects" icon={Code2} title="Projects" kicker="08 — Side quests">
          <div className="grid gap-4 md:grid-cols-3">
            <Entry title="CS Class Preplacement (MIP)" meta="2021">
              Mixed integer programming + goal programming to balance average
              and maximin student happiness.
            </Entry>
            <Entry title="NMF Movie Recommender" meta="2021">
              Non-negative matrix factorization to extract latent "genre"
              features and predict ratings.
            </Entry>
            <Entry title="Global Climate Modeling" meta="2021">
              Solved PDEs with the Legendre-Galerkin spectral method to model
              temperature across time and latitude.
            </Entry>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" icon={Sparkles} title="Skills" kicker="09 — Toolbox">
          <div className="grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">Languages</h3>
              <div className="flex flex-wrap gap-2">
                {["Python","Java","C++","AMPL","R","LaTeX","SQL","PHP","MATLAB","HTML","CSS","JavaScript"].map(s => (
                  <span key={s} className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground">{s}</span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-5">
              <h3 className="mb-3 text-sm uppercase tracking-widest text-muted-foreground">Frameworks & Tools</h3>
              <div className="flex flex-wrap gap-2">
                {["Git","NumPy","AWS","Linux","React","Laravel"].map(s => (
                  <span key={s} className="rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" icon={Mail} title="Let's talk" kicker="10 — Contact">
          <div className="rounded-3xl border border-border bg-gradient-to-br from-card to-accent/40 p-8 md:p-12">
            <p className="font-serif text-2xl md:text-3xl">
              Always happy to chat about ranking algorithms, grad school, or
              the best places to find a quiet whiteboard in Ithaca.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="mailto:claires.chang@gmail.com"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
              >
                <Mail className="h-4 w-4" /> claires.chang@gmail.com
              </a>
              <a
                href="https://github.com/claireschang/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium"
              >
                <Github className="h-4 w-4" /> github.com/claireschang
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-border py-10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Claire Chang · Made with too much chai.
        </footer>
      </main>
    </div>
  );
}
