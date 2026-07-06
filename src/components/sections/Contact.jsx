import { Mail } from "lucide-react";
import Reveal from "../common/Reveal";
import SectionComment from "../common/SectionComment";

export default function Contact() {
  return (
    <section id="contact" className="max-w-[900px] mx-auto px-8 pt-7 pb-[72px] scroll-mt-[70px]">
      <Reveal>
        <SectionComment>contact.js</SectionComment>
        <div className="inline-flex items-center gap-2 bg-violetSoft text-violet px-2.5 py-1.5 rounded-md text-[12.5px] font-mono mb-[18px]">
          <span className="w-1.5 h-1.5 rounded-full bg-violet inline-block" />
          open to opportunities
        </div>
        <h2 className="font-mono text-[22px] font-bold mb-3">Let's talk</h2>
        <p className="text-[15px] text-inkSoft mb-2 max-w-[480px] leading-relaxed">
          Looking for Java backend or Spring Boot developer roles. Reach out — I reply fast.
        </p>
        <p className="text-[13px] text-inkMute mb-5 font-mono">
          +91 9172767219 · Budh Vihar, New Delhi
        </p>
        <a
          href="mailto:siddhantc08@gmail.com"
          className="btn-solid inline-flex items-center gap-2 bg-teal text-bg px-[18px] py-2.5 rounded-lg text-sm font-mono font-medium no-underline"
        >
          <Mail size={15} /> siddhantc08@gmail.com
        </a>
      </Reveal>
    </section>
  );
}
