import { Code2, Server, Database, Container, GitBranch, Palette } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import Chip from "../common/Chip";
import skills from "../../data/skills";

const SKILL_ICON = { Code2, Server, Database, Container, GitBranch, Palette };

export default function Skills() {
  return (
    <section id="skills" className="max-w-[900px] mx-auto px-8 py-7 scroll-mt-[70px]">
      <Reveal>
        <SectionComment>skills.js</SectionComment>
      </Reveal>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}>
        {skills.map((s, i) => {
          const Icon = SKILL_ICON[s.icon];
          return (
            <Reveal key={s.group} delay={i * 0.06}>
              <div className="card-glow bg-card border border-border rounded-xl p-4">
                <div className="flex items-center gap-2 mb-2.5">
                  <div className="w-[26px] h-[26px] rounded-md bg-violetSoft flex items-center justify-center">
                    <Icon size={14} className="text-violet" />
                  </div>
                  <span className="font-medium text-[13.5px]">{s.group}</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {s.items.map((it) => (
                    <Chip key={it}>{it}</Chip>
                  ))}
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
