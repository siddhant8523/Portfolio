import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import experience from "../../data/experience";

export default function Experience() {
  return (
    <section className="max-w-[900px] mx-auto px-8 py-7">
      <Reveal>
        <SectionComment colorClass="text-teal">experience.js</SectionComment>
      </Reveal>
      {experience.map((job) => (
        <Reveal key={job.company} delay={0.05}>
          <div className="card-glow bg-card border border-border rounded-xl p-5">
            <div className="flex justify-between items-start gap-2 flex-wrap mb-2">
              <div>
                <h3 className="font-mono text-base font-semibold m-0">{job.role}</h3>
                <div className="text-[13px] text-inkSoft mt-0.5">{job.company}</div>
              </div>
              <span className="font-mono text-xs text-inkMute">{job.period}</span>
            </div>
            <ul className="mt-2.5 pl-[18px] text-inkSoft text-[13.5px] leading-[1.7] list-disc">
              {job.points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </section>
  );
}
