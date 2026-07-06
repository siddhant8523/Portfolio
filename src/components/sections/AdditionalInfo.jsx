import { Heart, Globe2 } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import Chip from "../common/Chip";
import additionalInfo from "../../data/additionalInfo";

export default function AdditionalInfo() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment colorClass="text-violet">additional.js</SectionComment>
      </Reveal>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        <Reveal>
          <div className="card-glow bg-card border border-border rounded-xl p-[18px]">
            <div className="flex items-center gap-2 mb-2.5">
              <Heart size={15} className="text-violet" />
              <span className="font-medium text-[13.5px]">Hobbies</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {additionalInfo.hobbies.map((h) => (
                <Chip key={h}>{h}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.06}>
          <div className="card-glow bg-card border border-border rounded-xl p-[18px]">
            <div className="flex items-center gap-2 mb-2.5">
              <Globe2 size={15} className="text-violet" />
              <span className="font-medium text-[13.5px]">Languages</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {additionalInfo.languages.map((l) => (
                <Chip key={l}>{l}</Chip>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
