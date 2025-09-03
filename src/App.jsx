import { useMemo } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink, Mail, Linkedin, MapPin } from "lucide-react";

export default function MazenPortfolio() {
  const projects = useMemo(
    () => [
      {
        name: "SkillSync",
        blurb:
          "Compare your resume vs a job description to see overlap, gaps, and extras.",
        live:
          "https://skillsync-c2jh2qw2z-mazen-mohammeds-projects.vercel.app/",
        repo: "https://github.com/Mazensm/skillsync",
        stack: ["React", "TypeScript", "Node", "Express"],
      },
      {
        name: "InsightAI",
        blurb:
          "Upload PDFs/notes, get executive summaries, insights, and action items.",
        live:
          "https://insightai-web-public-jrv9odp2n-mazen-mohammeds-projects.vercel.app/",
        repo: "https://github.com/Mazensm/insightai",
        stack: ["Python", "FastAPI", "OpenAI API", "React"],
      },
      {
        name: "MediTrack (in progress)",
        blurb:
          "Patient metrics dashboard: role-based auth, vitals trends, CSV/PDF exports.",
        live: null,
        repo: "https://github.com/mohammedms2/MediTrack",
        stack: ["Angular", "Node", "PostgreSQL/Supabase", "Chart.js"],
      },
    ],
    []
  );

  const Item = ({ children }) => (
    <motion.li
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-sm text-zinc-300 leading-6"
    >
      {children}
    </motion.li>
  );

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <header className="sticky top-0 z-20 border-b border-zinc-800 bg-zinc-950/85 backdrop-blur">
        <nav className="mx-auto max-w-6xl px-5 py-3 flex items-center justify-between">
          <a href="#top" className="font-semibold tracking-wide">
            Mazen Mohammed
          </a>
          <div className="flex items-center gap-4 text-sm">
            <a href="#projects" className="hover:text-white">
              Projects
            </a>
            <a href="#experience" className="hover:text-white">
              Experience
            </a>
            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section id="top" className="mx-auto max-w-6xl px-5 pb-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid gap-8 md:grid-cols-3"
        >
          <div className="md:col-span-2">
            <h1 className="text-3xl md:text-4xl font-semibold leading-tight">
              Software Engineer • AI‑curious • Product‑minded
            </h1>
            <p className="mt-4 text-zinc-300 max-w-2xl">
              I build practical, user‑focused apps and APIs across the stack.
              Recent work: resume‑to‑JD matching (SkillSync), document
              summarization (InsightAI), and a patient metrics dashboard
              (MediTrack).
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="mailto:mazenmohammed.msm@gmail.com"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              >
                <Mail size={16} /> mazenmohammed.msm@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/mazen-mohammed-a7143a2b3/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              >
                <Linkedin size={16} /> LinkedIn
              </a>
              <a
                href="https://github.com/Mazensm"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-2xl border border-zinc-800 px-4 py-2 hover:bg-zinc-900"
              >
                <Github size={16} /> GitHub
              </a>
            </div>
            <div className="mt-3 flex items-center gap-2 text-sm text-zinc-400">
              <MapPin size={14} /> Richmond, VA
            </div>
          </div>
          <div className="border border-zinc-800 rounded-2xl p-4 bg-zinc-900/30">
            <h2 className="font-medium">Toolkit</h2>
            <ul className="mt-2 grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-zinc-300">
              <li>TypeScript / JS</li>
              <li>Python / FastAPI</li>
              <li>React / Next.js</li>
              <li>Node / Express</li>
              <li>Angular</li>
              <li>PostgreSQL / Supabase</li>
              <li>Tailwind</li>
              <li>JWT / Auth</li>
            </ul>
          </div>
        </motion.div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-xl font-semibold">Projects</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-3">
          {projects.map((p) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium leading-tight">{p.name}</h3>
                <div className="flex items-center gap-2">
                  {p.live && (
                    <a href={p.live} target="_blank" rel="noreferrer" title="Live">
                      <ExternalLink size={18} className="text-zinc-300 hover:text-white" />
                    </a>
                  )}
                  <a href={p.repo} target="_blank" rel="noreferrer" title="GitHub">
                    <Github size={18} className="text-zinc-300 hover:text-white" />
                  </a>
                </div>
              </div>
              <p className="mt-2 text-sm text-zinc-300">{p.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded-full border border-zinc-800 bg-zinc-900 px-2 py-1 text-xs text-zinc-300">
                    {s}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="experience" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-xl font-semibold">Experience</h2>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          <Card
            title="TELUS Digital — Software Engineer Intern"
            subtitle="May 2025 – Aug 2025"
            bullets={[
              "Built and enhanced web apps used by Fortune 500 clients using Angular + TypeScript.",
              "Contributed across sprints: planning, demos, troubleshooting, and iterative improvements.",
              "Presented progress to stakeholders; gathered feedback to drive continuous improvement.",
            ]}
          />
          <Card
            title="Global Tech Experience — Web Development Trainee"
            subtitle="Jan 2024 – May 2024"
            bullets={[
              "Shipped interactive web experiences with HTML, CSS, Bootstrap, and JavaScript.",
              "Integrated third‑party APIs and practiced UX prototyping and documentation reading.",
              "Collaborated with a global team to complete technical tasks.",
            ]}
          />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-5 py-10">
        <h2 className="text-xl font-semibold">Get in touch</h2>
        <ul className="mt-4 space-y-2 text-sm text-zinc-300">
          <Item><a className="hover:text-white" href="mailto:mazenmohammed.msm@gmail.com">mazenmohammed.msm@gmail.com</a></Item>
          <Item><a className="hover:text-white" href="https://www.linkedin.com/in/mazen-mohammed-a7143a2b3/" target="_blank" rel="noreferrer">LinkedIn</a></Item>
          <Item><a className="hover:text-white" href="https://github.com/Mazensm" target="_blank" rel="noreferrer">GitHub</a></Item>
        </ul>
      </section>

      <footer className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Mazen Mohammed. Built with React, Tailwind, and framer‑motion.
      </footer>
    </div>
  );
}

function Card({ title, subtitle, bullets }) {
  return (
    <article className="rounded-2xl border border-zinc-800 bg-zinc-900/30 p-4">
      <h3 className="font-medium leading-tight">{title}</h3>
      <p className="text-xs text-zinc-400 mt-1">{subtitle}</p>
      <ul className="mt-3 space-y-2">
        {bullets.map((b, i) => (
          <li key={i} className="text-sm text-zinc-300 leading-6">• {b}</li>
        ))}
      </ul>
    </article>
  );
}