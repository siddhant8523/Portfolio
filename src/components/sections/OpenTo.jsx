import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import openToRoles from "../../data/openToRoles";

export default function OpenTo() {
  return (
    <section className="max-w-[900px] mx-auto px-8 pt-7 pb-6">
      <Reveal>
        <SectionComment colorClass="text-violet">open_to_work_as.js</SectionComment>
        <div className="flex gap-2.5 flex-wrap">
          {openToRoles.map((role) => (
            <span
              key={role}
              className="chip font-mono text-[13px] text-violet bg-violetSoft border border-border px-3.5 py-[7px] rounded-full hover:-translate-y-0.5"
            >
              {role}
            </span>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
