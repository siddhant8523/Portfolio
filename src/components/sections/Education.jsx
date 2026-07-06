import { GraduationCap } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import Chip from "../common/Chip";
import education from "../../data/education";

export default function Education() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment colorClass="text-teal">education.js</SectionComment>
      </Reveal>
      <div className="flex flex-col gap-3.5">
        {education.map((ed, i) => (
          <Reveal key={ed.school} delay={i * 0.06}>
            <div className="card-glow bg-card border border-border rounded-xl p-5">
              <div className="flex justify-between items-start gap-2 flex-wrap mb-1.5">
                <div className="flex items-center gap-2.5">
                  <GraduationCap size={16} className="text-teal" />
                  <h3 className="font-mono text-[15.5px] font-semibold m-0">{ed.school}</h3>
                </div>
                <span className="font-mono text-xs text-inkMute">{ed.period}</span>
              </div>
              <div className="text-[13.5px] text-inkSoft mt-1.5 mb-1">{ed.degree}</div>
              <div className="text-[12.5px] text-inkMute mb-3">{ed.detail}</div>
              <div className="flex gap-2 flex-wrap">
                {ed.coursework.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
