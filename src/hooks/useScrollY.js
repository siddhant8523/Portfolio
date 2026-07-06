import { useEffect, useState } from "react";

/** Tracks the current vertical scroll offset of the window. */
export default function useScrollY() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY || window.pageYOffset || 0);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollY;
}
