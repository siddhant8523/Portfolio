import { useEffect, useRef } from "react";
import { MoreVertical, X } from "lucide-react";
import navLinks from "../../constants/navLinks";

/**
 * Mobile-only nav trigger: three vertical dots that open a dropdown
 * with the same links shown inline on desktop. Closes on outside click,
 * link click, or by tapping the icon again (which becomes an X while open).
 */
export default function MobileMenu({ open, setOpen, onNavigate }) {
  const menuRef = useRef(null);

  useEffect(() => {
    const onClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, [setOpen]);

  return (
    <div ref={menuRef} className="relative sm:hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open navigation menu"
        aria-expanded={open}
        className={`w-8 h-8 flex items-center justify-center rounded-md border border-border text-ink transition-colors ${
          open ? "bg-card" : "bg-transparent"
        }`}
      >
        {open ? <X size={15} /> : <MoreVertical size={15} />}
      </button>

      {open && (
        <div className="animate-menu-in absolute right-0 top-[calc(100%+8px)] min-w-[150px] bg-card border border-border rounded-xl shadow-xl overflow-hidden z-20">
          {navLinks.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => onNavigate(e, link.id)}
              className="block px-4 py-[11px] text-[13px] font-mono text-inkSoft border-b border-border last:border-b-0 no-underline"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
