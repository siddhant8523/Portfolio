
/** Small pill used for tech-stack tags, coursework tags, hobbies, etc. */
export default function Chip({ children, className = "" }) {
  return (
    <span
      className={`chip inline-block font-mono text-xs text-inkSoft border border-border rounded-md px-2 py-1 hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </span>
  );
}
