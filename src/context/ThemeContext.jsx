import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

/**
 * Provides `mode` ("dark" | "light") and `toggleTheme` to the whole app.
 * Toggling adds/removes the `.dark` class on <html>, which drives every
 * CSS-variable-based color token defined in src/index.css.
 */
export function ThemeProvider({ children }) {
  const [mode, setMode] = useState("dark");

  useEffect(() => {
    const root = document.documentElement;
    if (mode === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [mode]);

  const toggleTheme = () => setMode((prev) => (prev === "dark" ? "light" : "dark"));

  return (
    <ThemeContext.Provider value={{ mode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return ctx;
}
