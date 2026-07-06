import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";
import relocationCities from "../../data/relocationCities";

export default function OpenToRelocate() {
    return (
        <section className="max-w-[900px] mx-auto px-8 pt-7 pb-6">
            <Reveal>
                <SectionComment colorClass="text-amber">open_to_relocate.js</SectionComment>
                <div className="flex gap-2.5 flex-wrap">
                    {relocationCities.map((city) => (
                        <span
                            key={city}
                            className="chip font-mono text-[13px] text-amber bg-amberSoft border border-border px-3.5 py-[7px] rounded-full hover:-translate-y-0.5"
                        >
                            {city}
                        </span>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}