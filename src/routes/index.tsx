import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Mail, Github } from "lucide-react";

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
          "Ph.D. student in Operations Research & Information Engineering.",
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
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 py-8 sm:py-10">
      <h2 className="mb-4 font-serif text-2xl sm:text-3xl font-normal">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-4 py-2.5">
          <a href="#top" className="font-serif text-lg">
            Claire Chang
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#publications" className="hover:text-foreground">
              Publications
            </a>
            <a href="#teaching" className="hover:text-foreground">
              Teaching
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-2xl px-4">
        {/* Hero */}
        <section className="py-10 sm:py-14">
          <h1 className="font-serif text-3xl sm:text-4xl leading-tight">
            Claire Chang
          </h1>
          <p className="mt-3 text-sm sm:text-base text-muted-foreground">
            Ph.D. student in Operations Research and Information Engineering at
            Cornell University, advised by{" "}
            <a
              href="https://people.orie.cornell.edu/shmoys/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              David B. Shmoys
            </a>
            .
          </p>
          <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
            My research is in combinatorial optimization, with a focus on
            fairness and algorithm design for problems arising in healthcare
            and public policy. I am supported by the NSF Graduate Research
            Fellowship.
          </p>
          <p className="mt-4 text-sm text-muted-foreground">
            <a
              href="mailto:csc258@cornell.edu"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Mail className="h-3.5 w-3.5" />
              csc258@cornell.edu
            </a>
            <span className="mx-2">·</span>
            <a
              href="https://github.com/claireschang/"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 hover:text-foreground"
            >
              <Github className="h-3.5 w-3.5" />
              GitHub
            </a>
          </p>
        </section>

        {/* Education */}
        <Section id="education" title="Education">
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">Cornell University</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2023 – 2028 (expected)
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Ph.D., Operations Research and Information Engineering
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">Harvey Mudd College</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  May 2023
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                B.S., Mathematics and Computer Science
              </div>
            </li>
          </ul>
        </Section>

        {/* Publications */}
        <Section id="publications" title="Publications">
          <ol className="space-y-4 text-sm sm:text-base">
            <li>
              <div>
                Claire Chang, Aditya Khare, David B. Shmoys.{" "}
                <span className="italic">
                  Optimizing for Fairness in Generalized Kidney Exchange: Theory
                  and Computations.
                </span>{" "}
                INFORMS Optimization Society Conference, 2026.{" "}
                <a
                  href="https://arxiv.org/abs/2605.20070"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  [arXiv]
                </a>
              </div>
            </li>
            <li>
              <div>
                Claire Chang, T. Shaw, A. Goutam, C. Lau, M. Shan, T.J. Tsai.{" "}
                <span className="italic">
                  Parameter-Free Ordered Partial Match Alignment with Hidden
                  State Time Warping.
                </span>{" "}
                Applied Sciences, 12(8):3783, 2022.{" "}
                <a
                  href="https://doi.org/10.3390/app12083783"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:underline"
                >
                  [doi]
                </a>
              </div>
            </li>
          </ol>
        </Section>

        {/* Presentations */}
        <Section id="presentations" title="Presentations">
          <p className="mb-2 text-sm sm:text-base">
            <span className="italic">
              Sensitivity of a Laplacian Family of Ranking Methods.
            </span>
          </p>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>MAA SoCal-Nevada Spring Meeting — April 2023</li>
            <li>Southern California Applied Mathematics Symposium — April 2023</li>
            <li>Inland Math/Stat Student Research Symposium — April 2023</li>
            <li>MAA SoCal-Nevada Fall Meeting — December 2022</li>
          </ul>
        </Section>

        {/* Teaching & Experience */}
        <Section id="teaching" title="Teaching and Experience">
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">Teaching Assistant</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2020 – 2022
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Harvey Mudd College — Intro CS, Data Structures, Discrete
                Mathematics, Computability &amp; Logic, Scientific Computing,
                Operations Research.
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">
                  Software Development Engineer Intern
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  Summer 2022
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Amazon Web Services, Relational Database Service team.
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">AI Instructor</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2021 – 2022
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Inspirit AI — Introductory machine learning and NLP for high
                school students.
              </div>
            </li>
          </ul>
        </Section>

        {/* Service */}
        <Section id="service" title="Service">
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <span className="font-medium">
                Discrete Optimization Reading Group
              </span>
              , co-organizer (2025 – present).
            </li>
            <li>
              <span className="font-medium">
                Cornell ORIE Graduate Student Association
              </span>
              , co-president and Women in OR representative (2024 – 2025).
            </li>
            <li>
              <span className="font-medium">ACM-W</span>, co-chair, Claremont
              Colleges (2019 – 2023).
            </li>
          </ul>
        </Section>

        {/* Awards */}
        <Section id="awards" title="Awards">
          <ul className="space-y-2 text-sm sm:text-base">
            <li className="flex flex-wrap items-baseline justify-between gap-x-3">
              <span>NSF Graduate Research Fellowship</span>
              <span className="text-xs text-muted-foreground tabular-nums">
                2023 – 2028
              </span>
            </li>
            <li className="flex flex-wrap items-baseline justify-between gap-x-3">
              <span>Robert E. Bechhofer Fellowship, Cornell University</span>
              <span className="text-xs text-muted-foreground tabular-nums">
                2023 – 2024
              </span>
            </li>
            <li className="flex flex-wrap items-baseline justify-between gap-x-3">
              <span>
                Henry A. Krieger Prize in Decision Sciences, Harvey Mudd College
              </span>
              <span className="text-xs text-muted-foreground tabular-nums">
                2022
              </span>
            </li>
          </ul>
        </Section>

        {/* Contact */}
        <Section id="contact" title="Contact">
          <p className="text-sm sm:text-base text-foreground/85">
            The best way to reach me is by email at{" "}
            <a
              href="mailto:csc258@cornell.edu"
              className="text-primary underline-offset-4 hover:underline"
            >
              csc258@cornell.edu
            </a>
            . I am always happy to talk about optimization, fairness, or
            graduate school.
          </p>
        </Section>

        <footer className="border-t border-border py-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Claire Chang
        </footer>
      </main>
    </div>
  );
}
