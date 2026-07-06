

/** Renders the `// section-name.js` code-comment style label above each section. */
export default function SectionComment({ children, colorClass = "text-inkMute" }) {
  return (
    <div className={`font-mono text-[13px] mb-3 ${colorClass}`}>
      {"// "}
      {children}
    </div>
  );
}
