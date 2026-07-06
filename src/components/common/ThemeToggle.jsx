
import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

/** Sun/Moon button that flips the global theme via ThemeContext. */
export default function ThemeToggle() {
  const { mode, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className="w-8 h-8 flex items-center justify-center rounded-md border border-border text-ink transition-transform hover:rotate-[20deg]"
    >
      {mode === "dark" ? <Sun size={15} /> : <Moon size={15} />}
    </button>
  );
}
