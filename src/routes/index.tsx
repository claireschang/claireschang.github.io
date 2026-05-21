import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import {
  Mail,
  Github,
  GraduationCap,
  Award,
  Briefcase,
  Sparkles,
  BookOpen,
  Presentation,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Claire Chang — ORIE @ Cornell" },
      {
        name: "description",
        content:
          "Claire Chang, Ph.D. student at Cornell ORIE working on combinatorial optimization, fairness, and algorithm design.",
      },
      { property: "og:title", content: "Claire Chang — ORIE @ Cornell" },
      {
        property: "og:description",
        content:
          "Ph.D. student in Operations Research & Information Engineering. Publications, teaching, awards.",
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
    <section id={id} className="scroll-mt-20 py-10 sm:py-14">
      <div className="mb-5 flex items-center gap-2.5">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-accent-foreground">
          <Icon className="h-3.5 w-3.5" />
        </span>
        <div>
          {kicker && (
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {kicker}
            </div>
          )}
          <h2 className="text-2xl sm:text-3xl font-normal font-serif">{title}</h2>
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
    <article className="rounded-xl border border-border bg-card p-4 transition-colors hover:border-primary/40">
      <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-0.5">
        <h3 className="text-base sm:text-lg font-medium text-foreground">{title}</h3>
        {meta && (
          <span className="text-xs text-muted-foreground tabular-nums">{meta}</span>
        )}
      </div>
      {sub && <p className="mt-0.5 text-xs sm:text-sm italic text-muted-foreground">{sub}</p>}
      {children && (
        <div className="mt-2 text-sm leading-relaxed text-foreground/85">{children}</div>
      )}
    </article>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-4 py-2.5">
          <a href="#top" className="font-serif text-lg">
            Claire <span className="text-primary">Chang</span>
          </a>
          <nav className="hidden gap-5 text-sm text-muted-foreground sm:flex">
            <a href="#publications" className="hover:text-foreground">Publications</a>
            <a href="#teaching" className="hover:text-foreground">Work</a>
            <a href="#contact" className="hover:text-foreground">Contact</a>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main id="top" className="mx-auto max-w-3xl px-4">
        {/* Hero */}
        <section className="relative py-12 sm:py-20">
          <div className="absolute inset-0 -z-10 paper-grain opacity-40" aria-hidden />
          <div className="absolute right-0 top-6 -z-10 h-32 w-32 rounded-full bg-rose/40 blur-3xl" aria-hidden />
          <div className="absolute left-4 bottom-0 -z-10 h-24 w-24 rounded-full bg-sage/40 blur-3xl" aria-hidden />

          <p className="mb-3 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Ph.D. student · Cornell ORIE
          </p>
          <h1 className="font-serif text-4xl leading-[1.08] sm:text-6xl">
            Hi, I'm Claire — I work on{" "}
            <em className="text-primary">combinatorial optimization</em>,{" "}
            <span className="squiggle text-primary">fairness</span>, and algorithm design.
          </h1>
          <p className="mt-5 max-w-xl text-sm sm:text-base text-muted-foreground">
            Advised by David B. Shmoys. I like clean proofs, messy data, and
            whiteboard markers that are running slightly low on ink.
          </p>

          <div className="mt-6 flex flex-wrap gap-2.5">
            <a
              href="mailto:csc258@cornell.edu"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" /> Say hi
            </a>
            <a
              href="https://github.com/claireschang/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" /> GitHub
            </a>
          </div>
        </section>

        {/* Education */}
        <Section id="education" icon={GraduationCap} title="Education" kicker="01 — Schooling">
          <div className="grid gap-3 sm:grid-cols-2">
            <Entry
              title="Cornell University"
              meta="Expected 2028"
              sub="Ph.D., ORIE — Ithaca, NY"
            >
              Combinatorial optimization, fairness, algorithm design. Advised by
              David B. Shmoys.
            </Entry>
            <Entry
              title="Harvey Mudd College"
              meta="May 2023"
              sub="B.S., Math & CS — Claremont, CA"
            >
              Algorithms, analysis, probability, deterministic & stochastic
              operations research.
            </Entry>
          </div>
        </Section>

        {/* Publications */}
        <Section id="publications" icon={BookOpen} title="Publications" kicker="02 — In print">
          <div className="grid gap-3">
            <Entry
              title="Optimizing for Fairness in Generalized Kidney Exchange: Theory and Computations"
              meta="2026"
              sub="INFORMS Optimization Society Conference"
            >
              Chang, C.; Khare, A.; Shmoys, D.{" "}
              <a
                href="https://arxiv.org/abs/2605.20070"
                target="_blank"
                rel="noreferrer"
                className="text-primary underline-offset-4 hover:underline"
              >
                arxiv.org/abs/2605.20070
              </a>
            </Entry>
            <Entry
              title="Parameter-Free Ordered Partial Match Alignment with Hidden State Time Warping"
              meta="Apr 2022"
              sub="Applied Sciences 2022, 12, 3783"
            >
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
          </div>
        </Section>

        {/* Awards */}
        <Section id="awards" icon={Award} title="Awards" kicker="03 — Shiny things">
          <ul className="grid gap-2.5 sm:grid-cols-2">
            {[
              ["NSF Graduate Research Fellowship", "2023–2028"],
              ["Robert E. Bechhofer Fellowship", "Cornell · 2023–2024"],
              ["Henry A. Krieger Prize in Decision Sciences", "HMC · Oct 2022"],
            ].map(([title, meta]) => (
              <li
                key={title}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-card p-3"
              >
                <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <div>
                  <div className="text-sm font-medium">{title}</div>
                  <div className="text-xs text-muted-foreground">{meta}</div>
                </div>
              </li>
            ))}
          </ul>
        </Section>

        {/* Teaching & Work */}
        <Section id="teaching" icon={Briefcase} title="Teaching & Work" kicker="04 — Day jobs">
          <div className="grid gap-3">
            <Entry
              title="HMC Math & CS — Teaching Assistant"
              meta="Aug 2020 – Dec 2022"
              sub="Claremont, CA"
            >
              Intro CS, Data Structures, Discrete Math, Computability & Logic,
              Scientific Computing, Operations Research.
            </Entry>
            <Entry
              title="Amazon Web Services — SDE Intern, RDS"
              meta="May – Aug 2022"
            >
              Built read-replica creation for Single-AZ SQL databases.
            </Entry>
            <Entry title="Inspirit AI — AI Instructor" meta="Jun 2021 – Aug 2022" sub="Remote">
              Taught high schoolers AI from logistic regression to NLP and
              neural networks.
            </Entry>
            <Entry
              title="HMC Admission — Senior Intern"
              meta="Aug – Dec 2022"
              sub="Claremont, CA"
            >
              Interviewed prospective students ~5 hrs/week.
            </Entry>
          </div>
        </Section>

        {/* Presentations */}
        <Section id="presentations" icon={Presentation} title="Presentations" kicker="05 — Talks">
          <Entry title="Sensitivity of a Laplacian Family of Ranking Methods">
            <ul className="space-y-1 text-sm">
              <li>MAA SoCal-Nevada Fall Meeting — Dec 2022</li>
              <li>IMSSRS — Apr 2023</li>
              <li>SOCAMS — Apr 2023</li>
              <li>MAA SoCal-Nevada Spring Meeting — Apr 2023</li>
            </ul>
          </Entry>
        </Section>

        {/* Service */}
        <Section id="service" icon={Users} title="Service" kicker="06 — Off the clock">
          <div className="grid gap-3 sm:grid-cols-2">
            <Entry title="Discrete Optimization Reading Group" meta="2025 – Present" sub="Co-Organizer">
              Curate papers on online matching and rounding methods.
            </Entry>
            <Entry title="Cornell ORIE Grad Association" meta="2024 – 2025" sub="Co-President, WiOR Rep">
              Workshops, mentorship, and events for 200+ people.
            </Entry>
            <Entry title="ACM-W" meta="2019 – 2023" sub="Co-Chair, Claremont">
              Workshops and tech talks for women in computing.
            </Entry>
            <Entry title="Rewriting the Code" meta="Summer 2022" sub="Seattle Hub Leader">
              Doubled event attendance on a $4,500 budget.
            </Entry>
          </div>
        </Section>

        {/* Skills */}
        <Section id="skills" icon={Sparkles} title="Skills" kicker="07 — Toolbox">
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex flex-wrap gap-1.5">
              {["Python","Java","C++","AMPL","R","LaTeX","SQL","MATLAB","Git","NumPy","AWS","Linux"].map(s => (
                <span key={s} className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-secondary-foreground">{s}</span>
              ))}
            </div>
          </div>
        </Section>

        {/* Contact */}
        <Section id="contact" icon={Mail} title="Let's talk" kicker="08 — Contact">
          <div className="rounded-2xl border border-border bg-gradient-to-br from-card to-accent/40 p-6 sm:p-8">
            <p className="font-serif text-xl sm:text-2xl">
              Always happy to chat about optimization, fairness, or where to
              find a quiet whiteboard in Ithaca.
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              <a
                href="mailto:csc258@cornell.edu"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
              >
                <Mail className="h-4 w-4" />csc258@cornell.edu
              </a>
              <a
                href="https://github.com/claireschang/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
              >
                <Github className="h-4 w-4" />github.com/claireschang
              </a>
            </div>
          </div>
        </Section>

        <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Claire Chang · Made with too much chai.
        </footer>
      </main>
    </div>
  );
}
