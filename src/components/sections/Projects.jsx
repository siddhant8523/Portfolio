import { ExternalLink, ArrowUpRight, CheckCircle2 } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import Chip from "../common/Chip";
import projects from "../../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="max-w-[900px] mx-auto px-8 py-7 scroll-mt-[70px]">
      <Reveal>
        <SectionComment>projects.js</SectionComment>
      </Reveal>
      <div className="flex flex-col gap-3.5">
        {projects.map((p, i) => (
          <Reveal key={p.name} delay={i * 0.08}>
            <div className="card-glow bg-card border border-border rounded-xl p-5">
              <div className="flex justify-between items-start gap-2 flex-wrap mb-2.5">
                <div className="flex items-center gap-2.5">
                  <h3 className="font-mono text-base font-semibold m-0">{p.name}</h3>
                  <span
                    className={`font-mono text-[11px] px-2 py-1 rounded-full flex items-center gap-1 ${
                      p.status === "shipped" ? "bg-tealSoft text-teal" : "bg-amberSoft text-amber"
                    }`}
                  >
                    {p.status === "shipped" && <CheckCircle2 size={11} />}
                    {p.status}
                  </span>
                </div>
                <div className="flex gap-3.5">
                  <a href={p.demo} className="flex items-center gap-1 text-[13px] text-teal no-underline">
                    demo <ExternalLink size={12} />
                  </a>
                  <a href={p.repo} className="flex items-center gap-1 text-[13px] text-teal no-underline">
                    code <ArrowUpRight size={12} />
                  </a>
                </div>
              </div>
              <p className="text-sm text-inkSoft mb-3.5 leading-relaxed">{p.desc}</p>
              <div className="flex gap-2 flex-wrap">
                {p.stack.map((s) => (
                  <Chip key={s}>{s}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
