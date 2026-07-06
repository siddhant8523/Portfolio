import { Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Profile from "/src/assets/Profile.jpg";

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-[88px] sm:pt-[96px]">
      <div className="animate-breathe absolute inset-0 bg-gradient-to-b from-bgWash to-bg" />

      <section className="relative z-10 max-w-[900px] mx-auto px-8 pt-16">
        <div className="flex items-center gap-5 mb-6 flex-wrap">
          <div className="w-48 h-48 rounded-full border-[3px] border-teal p-1 shadow-[0_0_40px_-6px_var(--color-teal)]">
            <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
              <img
                src={Profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="inline-flex items-center gap-2 bg-tealSoft text-teal px-3 py-1.5 rounded-md text-[13px] font-mono">
            $ status --online
            <span className="animate-cursor">▌</span>
          </div>
        </div>

        <h1 className="font-mono text-[34px] font-bold leading-tight mb-4">
          <span className="text-inkMute">const</span> name ={" "}
          <span className="text-teal">
            "Siddhant Rajendra Chauhan"
          </span>
          ;
        </h1>

        <p className="text-base text-inkSoft max-w-[560px] leading-relaxed mb-7">
          Java Backend Developer with strong expertise in Core Java and Spring
          Boot. I build scalable backend systems, REST APIs, and secure
          applications — focused on clean code, performance, and continuous
          learning.
        </p>

        <div className="flex gap-3 flex-wrap">
          <a
            href="https://drive.google.com/file/d/1IFPWYXxtvAUFOR7hCDHKk65Nh0aAbE0h/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-solid flex items-center gap-2 bg-teal text-bg px-[18px] py-2.5 rounded-lg text-sm font-mono font-medium no-underline"
          >
            <Download size={15} />
            resume.pdf
          </a>

          <a
            href="https://github.com/siddhant8523"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border bg-card px-[18px] py-2.5 rounded-lg text-sm font-mono font-medium no-underline"
          >
            <FaGithub size={15} />
            github
          </a>

          <a
            href="https://linkedin.com/in/siddhant-chauhan-7a25881a7"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 border border-border bg-card px-[18px] py-2.5 rounded-lg text-sm font-mono font-medium no-underline"
          >
            <FaLinkedin size={15} />
            linkedin
          </a>
        </div>
      </section>
    </div>
  );
}