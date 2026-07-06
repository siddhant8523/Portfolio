import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import problemSolving from "../../data/problemSolving";

export default function ProblemSolving() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment>problem-solving.js</SectionComment>
      </Reveal>
      <div className="flex">
        {problemSolving.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08}>
            <div className="bg-card border border-border rounded-xl p-[18px] min-w-[220px]">
              <div className="font-mono text-[28px] font-bold text-teal">{stat.value}</div>
              <div className="text-[13px] font-medium mt-1 mb-0.5">{stat.label}</div>
              <div className="text-xs text-inkMute">{stat.source}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
