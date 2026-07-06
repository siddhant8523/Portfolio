
import useScrollY from "../hooks/useScrollY";
import GlowOrbs from "../components/background/GlowOrbs";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/sections/Hero";
import OpenTo from "../components/sections/OpenTo";
import Experience from "../components/sections/Experience";
import CurrentlyLearning from "../components/sections/CurrentlyLearning";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import ProblemSolving from "../components/sections/ProblemSolving";
import Education from "../components/sections/Education";
import Certifications from "../components/sections/Certifications";
import AdditionalInfo from "../components/sections/AdditionalInfo";
import Contact from "../components/sections/Contact";
import OpenToRelocate from "../components/sections/OpenToRelocate";

/** The single-page portfolio, composed from section components. */export default function Home() {
  const scrollY = useScrollY();

  return (
    <>
      <Navbar />
      <div className="relative isolate min-h-screen overflow-x-hidden bg-bg text-ink font-sans transition-colors duration-300">
        <GlowOrbs scrollY={scrollY} />
        <Hero />
        <OpenTo />
        <Experience />
        <CurrentlyLearning />
        <Projects />
        <Skills />
        <ProblemSolving />
        <Education />
        <Certifications />
        <AdditionalInfo />
        <OpenToRelocate />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
