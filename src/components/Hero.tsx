import { ArrowRight, GraduationCap, MapPin, MessageSquare } from "lucide-react";
import { hero, site } from "@/data/portfolio";
import { button, cn, container } from "@/lib/utils";
import { CvButton } from "./CvButton";

export function Hero({ cvAvailable }: { cvAvailable: boolean }) {
  return (
    <section id="home" aria-labelledby="home-title" className="relative overflow-hidden">
      {/* Decorative background: faint grid + soft accent glow */}
      <div
        aria-hidden="true"
        className="bg-grid pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,black,transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-48 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-accent/10 blur-3xl"
      />

      <div
        className={cn(
          container,
          "relative grid items-center gap-14 pt-16 pb-24 sm:pt-24 sm:pb-32 lg:grid-cols-[1.2fr_0.8fr]",
        )}
      >
        <div>
          {site.availability && (
            <p className="inline-flex items-center gap-2 rounded-full border border-line-strong bg-surface/70 px-3 py-1 text-xs text-muted">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-pulse-dot rounded-full bg-emerald-400" />
              </span>
              {site.availability}
            </p>
          )}

          <p className="mt-8 font-mono text-sm text-accent">{site.shortName}</p>
          <h1
            id="home-title"
            className="mt-3 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl"
          >
            {hero.heading}
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">{hero.intro}</p>

          <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-sm text-subtle">
            <li className="inline-flex items-center gap-1.5">
              <GraduationCap className="size-4" aria-hidden="true" />
              BS Information Technology · {site.education.schoolShort} ’{site.education.graduation.slice(-2)}
            </li>
            <li className="inline-flex items-center gap-1.5">
              <MapPin className="size-4" aria-hidden="true" />
              {site.location}
            </li>
          </ul>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a href="#projects" className={button.primary}>
              View My Projects
              <ArrowRight aria-hidden="true" />
            </a>
            <CvButton available={cvAvailable} />
            <a href="#contact" className={button.ghost}>
              <MessageSquare aria-hidden="true" />
              Contact Me
            </a>
          </div>
        </div>

        <CodeCard />
      </div>
    </section>
  );
}

/** Decorative "code editor" card that summarises Kevin in code. */
function CodeCard() {
  const k = "text-violet-300"; // keyword
  const p = "text-sky-300"; // property
  const s = "text-emerald-300"; // string
  const n = "text-amber-300"; // number / boolean
  const c = "text-subtle"; // comment / punctuation

  return (
    <div className="relative hidden sm:block" aria-hidden="true">
      <div className="absolute -inset-px rounded-2xl bg-gradient-to-b from-accent/25 to-transparent opacity-60" />
      <div className="relative overflow-hidden rounded-2xl border border-line-strong bg-surface/95 shadow-2xl shadow-black/40">
        <div className="flex items-center gap-2 border-b border-line px-4 py-3">
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="size-2.5 rounded-full bg-line-strong" />
          <span className="ml-3 font-mono text-xs text-subtle">kevin.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-6">
          <code>
            <span className={c}>{"// always a work in progress"}</span>
            {"\n"}
            <span className={k}>const</span> kevin <span className={c}>=</span> {"{"}
            {"\n  "}
            <span className={p}>studies</span>: <span className={s}>&quot;BS Information Technology&quot;</span>,
            {"\n  "}
            <span className={p}>school</span>: <span className={s}>&quot;UA&amp;P&quot;</span>,
            {"\n  "}
            <span className={p}>graduating</span>: <span className={n}>2027</span>,
            {"\n  "}
            <span className={p}>interests</span>: [
            {"\n    "}
            <span className={s}>&quot;web development&quot;</span>,
            {"\n    "}
            <span className={s}>&quot;software QA&quot;</span>,
            {"\n    "}
            <span className={s}>&quot;system analysis&quot;</span>,
            {"\n  "}],
            {"\n  "}
            <span className={p}>usesAI</span>: <span className={s}>&quot;to learn, not to skip learning&quot;</span>,
            {"\n  "}
            <span className={p}>openToInternships</span>: <span className={n}>true</span>,
            {"\n"}
            {"};"}
            {"\n\n"}
            kevin.<span className={p}>keepBuilding</span>();
            <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 animate-blink bg-accent" />
          </code>
        </pre>
      </div>
    </div>
  );
}
