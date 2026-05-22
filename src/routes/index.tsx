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
          "Ph.D. student in Operations Research and Information Engineering.",
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
      <h2 className="mb-4 text-xl sm:text-2xl font-medium tracking-tight">
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
          <a href="#top" className="text-base font-medium">
            Claire Chang
          </a>
          <nav className="flex items-center gap-4 text-sm text-muted-foreground">
            <a href="#publications" className="hover:text-foreground">
              Publications
            </a>
            <a href="#talks" className="hover:text-foreground">
              Talks
            </a>
            <a href="#contact" className="hover:text-foreground">
              Contact
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-2xl px-4">
        {/* Hero / Bio */}
        <section className="py-10 sm:py-14">
          <h1 className="text-3xl sm:text-4xl font-medium tracking-tight">
            Claire Chang
          </h1>
          <p className="mt-4 text-sm sm:text-base text-foreground/85 leading-relaxed">
            I am a Ph.D. student in Operations Research and Information
            Engineering at Cornell University, advised by{" "}
            <a
              href="https://people.orie.cornell.edu/shmoys/"
              target="_blank"
              rel="noreferrer"
              className="text-primary underline-offset-4 hover:underline"
            >
              David B. Shmoys
            </a>
            . I received my B.S. in Mathematics and Computer Science from
            Harvey Mudd College in 2023.
          </p>
          <p className="mt-3 text-sm sm:text-base text-foreground/85 leading-relaxed">
            My research is in combinatorial optimization, with a focus on
            fairness and algorithm design for problems arising in healthcare
            and public policy. I am supported by the NSF Graduate Research
            Fellowship (2023 to 2028), the Robert E. Bechhofer Fellowship at
            Cornell (2023 to 2024), and previously received the Henry A.
            Krieger Prize in Decision Sciences from Harvey Mudd College
            (2022).
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

        {/* Publications */}
        <Section id="publications" title="Publications">
          <ol className="space-y-4 text-sm sm:text-base">
            <li>
              <div>
                Claire Chang, Aditya Khare, David B. Shmoys.{" "}
                <span className="italic">
                  Optimizing for Fairness in Generalized Kidney Exchange:
                  Theory and Computations.
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

        {/* Talks */}
        <Section id="talks" title="Talks">
          <div className="space-y-6 text-sm sm:text-base">
            <div>
              <p className="italic">
                Optimizing for Fairness in Generalized Kidney Exchange: Theory
                and Computations.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Marketplace Innovation Workshop, May 2026</li>
                <li>NYC Operations Day, March 2026</li>
                <li>INFORMS Optimization Society, March 2026</li>
                <li>INFORMS Annual Meeting, October 2025</li>
              </ul>
            </div>
            <div>
              <p className="italic">
                Sensitivity of a Laplacian Family of Ranking Methods.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>MAA SoCal Nevada Spring Meeting, April 2023</li>
                <li>
                  Southern California Applied Mathematics Symposium, April 2023
                </li>
                <li>
                  Inland Math Stat Student Research Symposium, April 2023
                </li>
                <li>MAA SoCal Nevada Fall Meeting, December 2022</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Teaching, Experience, and Service */}
        <Section id="teaching" title="Teaching, Experience, and Service">
          <ul className="space-y-3 text-sm sm:text-base">
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">Teaching Assistant</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2020 to 2022
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Harvey Mudd College. Intro CS, Data Structures, Discrete
                Mathematics, Computability and Logic, Scientific Computing,
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
                  2021 to 2022
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Inspirit AI. Introductory machine learning and NLP for high
                school students.
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">
                  Discrete Optimization Reading Group
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2025 to present
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Co-organizer, Cornell ORIE.
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">
                  Cornell ORIE Graduate Student Association
                </span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2024 to 2025
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Co-president and Women in OR representative.
              </div>
            </li>
            <li>
              <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                <span className="font-medium">ACM-W</span>
                <span className="text-xs text-muted-foreground tabular-nums">
                  2019 to 2023
                </span>
              </div>
              <div className="text-sm text-muted-foreground">
                Co-chair, Claremont Colleges.
              </div>
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
