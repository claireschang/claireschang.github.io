import { useEffect, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Mail, Github, GraduationCap } from "lucide-react";

// Kept in pieces so no scrapeable "user@host" string or mailto: href ships in the
// HTML; the address is only assembled in the browser when the icon is clicked.
const EMAIL_USER = "csc258";
const EMAIL_DOMAIN = "cornell.edu";

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
        content: "Ph.D. student in Operations Research and Information Engineering.",
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
    <section id={id} className="scroll-mt-16 py-8">
      <h2 className="mb-5 text-lg font-semibold tracking-tight">
        <span className="marker-highlight">{title}</span>
      </h2>
      {children}
    </section>
  );
}

function Entry({ role, when, detail }: { role: string; when?: string; detail: string }) {
  return (
    <li>
      <div className="flex flex-wrap items-baseline justify-between gap-x-3">
        <span className="font-medium">{role}</span>
        {when && <span className="text-xs text-muted-foreground tabular-nums">{when}</span>}
      </div>
      <div className="mt-0.5 text-sm text-muted-foreground">{detail}</div>
    </li>
  );
}

function Index() {
  // Filled in after hydration only, so the address never appears in the served HTML
  // but the icon still behaves like a normal link (open in new tab, copy, etc.).
  const [mailtoHref, setMailtoHref] = useState<string | undefined>(undefined);
  useEffect(() => {
    setMailtoHref(`mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-2xl items-center justify-between px-5 py-3">
          <a href="#top" className="text-sm font-semibold tracking-tight">
            Claire Chang
          </a>
          <nav className="flex items-center gap-5 text-sm text-muted-foreground">
            <a href="#publications" className="transition-colors hover:text-rose">
              Publications
            </a>
            <a href="#talks" className="transition-colors hover:text-rose">
              Talks
            </a>
            <a href="#teaching" className="transition-colors hover:text-rose">
              Teaching
            </a>
            <ThemeToggle />
          </nav>
        </div>
      </header>

      <main id="top" className="mx-auto max-w-2xl px-5">
        {/* Profile */}
        <section className="flex flex-col items-center py-14 text-center">
          <img
            src="/headshot.jpg"
            alt="Claire Chang"
            width={160}
            height={160}
            className="h-40 w-40 rounded-full object-cover ring-2 ring-rose ring-offset-4 ring-offset-background"
          />
          <h1 className="mt-6 text-3xl font-semibold tracking-tight">Claire Chang</h1>

          <div className="prose-links mt-5 space-y-4 text-left text-[0.95rem] leading-relaxed text-foreground/85">
            <p>
              Hello! I am a Ph.D. student in Operations Research and Information Engineering at
              Cornell University, advised by{" "}
              <a href="https://people.orie.cornell.edu/shmoys/" target="_blank" rel="noreferrer">
                <strong>David B. Shmoys</strong>
              </a>
              . I received my B.S. in Mathematics and Computer Science from Harvey Mudd College in
              2023, where I worked with{" "}
              <a
                href="https://sites.google.com/g.hmc.edu/hmc-mir/bio"
                target="_blank"
                rel="noreferrer"
              >
                <strong>TJ Tsai</strong>
              </a>
              ,{" "}
              <a
                href="https://www.hmc.edu/mathematics/faculty-staff/martonosi/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Susan Martonosi</strong>
              </a>
              , and{" "}
              <a href="https://jamiehaddock.com" target="_blank" rel="noreferrer">
                <strong>Jamie Haddock</strong>
              </a>
              .
            </p>
            <p>
              My research is in combinatorial optimization, with a focus on fairness and algorithm
              design for problems arising in healthcare and public policy. I am supported by the{" "}
              <a href="https://www.nsfgrfp.org/" target="_blank" rel="noreferrer">
                <strong>NSF Graduate Research Fellowship</strong>
              </a>{" "}
              (2023 to 2028) and the Robert E. Bechhofer Fellowship at Cornell (2023 to 2024), and
              previously received the Henry A. Krieger Prize in Decision Sciences from Harvey Mudd
              College (2022).
            </p>
            <p>
              Feel free to reach out at{" "}
              <span className="whitespace-nowrap font-medium">
                {EMAIL_USER} AT {EMAIL_DOMAIN.replace(".", " DOT ")}
              </span>
              ; I&rsquo;m always happy to chat about research!
            </p>
          </div>

          <div className="mt-7 flex items-center justify-center gap-5 text-muted-foreground dark:text-mint">
            <a
              href={mailtoHref}
              onClick={(e) => {
                // Before hydration there is no href to follow, so send the click along manually.
                if (!mailtoHref) {
                  e.preventDefault();
                  window.location.href = `mailto:${EMAIL_USER}@${EMAIL_DOMAIN}`;
                }
              }}
              title="Email"
              aria-label="Email"
              className="transition-colors hover:text-rose"
            >
              <Mail className="h-5 w-5" />
            </a>
            <a
              href="https://scholar.google.com/citations?hl=en&user=1Ldy7sAAAAAJ"
              target="_blank"
              rel="noreferrer"
              title="Google Scholar"
              aria-label="Google Scholar"
              className="transition-colors hover:text-rose"
            >
              <GraduationCap className="h-5 w-5" />
            </a>
            <a
              href="https://github.com/claireschang/"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
              aria-label="GitHub"
              className="transition-colors hover:text-rose"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>
        </section>

        {/* Publications */}
        <Section id="publications" title="Selected Publications">
          <ol className="prose-links space-y-5 text-[0.95rem] leading-relaxed">
            <li>
              <span className="font-medium">Claire S. Chang</span>, Arin Khare, David B. Shmoys.{" "}
              <span className="italic">
                Optimizing for Fairness in Generalized Kidney Exchange: Theory and Computations.
              </span>{" "}
              INFORMS Optimization Society Conference, 2026.{" "}
              <a
                href="https://arxiv.org/abs/2605.20070"
                target="_blank"
                rel="noreferrer"
                className="tag"
              >
                arXiv
              </a>
            </li>
            <li>
              <span className="font-medium">Claire S. Chang</span>, T. Shaw, A. Goutam, C. Lau, M.
              Shan, T.J. Tsai.{" "}
              <span className="italic">
                Parameter-Free Ordered Partial Match Alignment with Hidden State Time Warping.
              </span>{" "}
              Applied Sciences, 12(8):3783, 2022.{" "}
              <a
                href="https://doi.org/10.3390/app12083783"
                target="_blank"
                rel="noreferrer"
                className="tag"
              >
                doi
              </a>
            </li>
          </ol>
        </Section>

        {/* Talks */}
        <Section id="talks" title="Talks">
          <div className="space-y-6 text-[0.95rem]">
            <div>
              <p className="italic">
                Optimizing for Fairness in Generalized Kidney Exchange: Theory and Computations.
              </p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>Marketplace Innovation Workshop, May 2026</li>
                <li>NYC Operations Day, March 2026</li>
                <li>INFORMS Optimization Society, March 2026</li>
                <li>INFORMS Annual Meeting, October 2025</li>
              </ul>
            </div>
            <div>
              <p className="italic">Sensitivity of a Laplacian Family of Ranking Methods.</p>
              <ul className="mt-2 space-y-1 text-sm text-muted-foreground">
                <li>MAA SoCal Nevada Spring Meeting, April 2023</li>
                <li>Southern California Applied Mathematics Symposium, April 2023</li>
                <li>Inland Math Stat Student Research Symposium, April 2023</li>
                <li>MAA SoCal Nevada Fall Meeting, December 2022</li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Teaching, Experience, and Service */}
        <Section id="teaching" title="Teaching, Experience, and Service">
          <ul className="space-y-4 text-[0.95rem]">
            <Entry
              role="Co-instructor"
              when="Summer 2026"
              detail="Cornell University. ENGRI 1101, Engineering Operations: Data Science and Decision Making."
            />
            <Entry
              role="Discrete Optimization Reading Group"
              when="2025 to present"
              detail="Co-organizer, Cornell ORIE."
            />
            <Entry
              role="Cornell ORIE Graduate Student Association"
              when="2024 to 2025"
              detail="Co-president and Women in OR representative."
            />
            <Entry role="ACM-W" when="2019 to 2023" detail="Co-chair, Claremont Colleges." />
            <Entry
              role="Teaching Assistant"
              when="2020 to 2022"
              detail="Harvey Mudd College. Intro CS, Data Structures, Discrete Mathematics, Computability and Logic, Scientific Computing, Operations Research."
            />
            <Entry
              role="Software Development Engineer Intern"
              when="Summer 2022"
              detail="Amazon Web Services, Relational Database Service team."
            />
          </ul>
        </Section>

        <footer className="mt-8 border-t border-border py-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Claire Chang
        </footer>
      </main>
    </div>
  );
}
