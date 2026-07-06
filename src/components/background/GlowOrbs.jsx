const ORBS = [
  { top: -100, left: -100, parallax: 0.18, size: 380, color: "var(--color-teal)", anim: "animate-orb-1" },
  { top: 180, right: -140, parallax: -0.14, size: 440, color: "var(--color-violet)", anim: "animate-orb-2" },
  { top: 820, left: -60, parallax: 0.22, size: 340, color: "var(--color-amber)", anim: "animate-orb-3" },
  { top: 1250, right: -80, parallax: -0.2, size: 300, color: "var(--color-teal)", anim: "animate-orb-4" },
  { top: 1700, left: "20%", parallax: 0.16, size: 320, color: "var(--color-violet)", anim: "animate-orb-5" },
  { top: 2150, right: "10%", parallax: -0.18, size: 280, color: "var(--color-amber)", anim: "animate-orb-6" },
];

/** Ambient decorative background glow orbs; drift on idle and parallax with scroll. */
export default function GlowOrbs({ scrollY }) {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {ORBS.map((orb, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: orb.top,
            left: orb.left,
            right: orb.right,
            transform: `translateY(${scrollY * orb.parallax}px)`,
            transition: "transform 0.05s linear",
          }}
        >
          <div
            className={`rounded-full blur-[70px] opacity-40 ${orb.anim}`}
            style={{
              width: orb.size,
              height: orb.size,
              background: `radial-gradient(circle at 40% 40%, ${orb.color}, transparent 70%)`,
            }}
          />
        </div>
      ))}
    </div>
  );
}
