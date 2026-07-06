import { useState } from "react";
import { Terminal } from "lucide-react";
import navLinks from "../../constants/navLinks";
import ThemeToggle from "../common/ThemeToggle";
import MobileMenu from "./MobileMenu";

/**
 * Fixed top navigation. Desktop shows inline links (>=640px); below that
 * breakpoint they're replaced by the three-dot MobileMenu dropdown.
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavigate = (e, id) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-10 border-b border-border bg-bg backdrop-blur-sm text-ink font-sans"
style={{ backgroundColor: "color-mix(in srgb, var(--color-bg) 75%, transparent)" }}>
      <div className="max-w-225 mx-auto px-8 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-[13px] bg-card border border-border px-3 py-1.5 rounded-t-md">
          <Terminal size={13} className="text-teal" />
          siddhant_chauhan.jsx
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavigate(e, link.id)}
                className="text-[13px] font-mono text-inkSoft no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>

          <ThemeToggle />
          <MobileMenu open={menuOpen} setOpen={setMenuOpen} onNavigate={handleNavigate} />
        </div>
      </div>
    </div>
  );
}
