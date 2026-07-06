import { Award } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import certifications from "../../data/certifications";

export default function Certifications() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment>certifications.js</SectionComment>
      </Reveal>
      <div className="flex flex-col gap-2.5">
        {certifications.map((c) => (
          <Reveal key={c.name} delay={0.06}>
            <div className="bg-card border border-border rounded-xl px-[18px] py-3.5 flex justify-between items-center gap-2 flex-wrap">
              <div className="flex items-center gap-2.5">
                <Award size={15} className="text-amber" />
                <div>
                  <div className="text-sm font-medium">{c.name}</div>
                  <div className="text-[12.5px] text-inkMute">{c.issuer}</div>
                </div>
              </div>
              <span className="font-mono text-xs text-inkMute">{c.year}</span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
