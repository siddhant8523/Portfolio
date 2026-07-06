import { BookOpen } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import currentlyLearning from "../../data/learning";

export default function CurrentlyLearning() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment colorClass="text-amber">currently-learning.js</SectionComment>
      </Reveal>
      <div className="grid gap-3.5" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
        {currentlyLearning.map((item, i) => (
          <Reveal key={item.topic} delay={i * 0.08}>
            <div className="card-glow bg-card border border-border rounded-xl p-4">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen size={15} className="text-amber" />
                <span className="font-medium text-sm">{item.topic}</span>
              </div>
              <p className="text-[13px] text-inkMute m-0 leading-snug">{item.note}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
