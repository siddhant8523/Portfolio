
import useReveal from "../../hooks/useReveal";

/** Fades and slides its children up into view the first time they scroll into the viewport. */
export default function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      className="transition-all duration-500 ease-out"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
