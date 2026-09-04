import { useEffect, useState } from "react";

export function useTypingEffect(roles) {
  const [text, setText] = useState(roles[0]?.slice(0, 1) ?? "");

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      setText(roles[0] ?? "");
      return;
    }

    let roleIdx = 0;
    let charIdx = 0;
    let deleting = false;
    let timeoutId;

    function tick() {
      const current = roles[roleIdx];
      if (!deleting) {
        charIdx++;
        if (charIdx > current.length) {
          deleting = true;
          timeoutId = setTimeout(tick, 1400);
          return;
        }
      } else {
        charIdx--;
        if (charIdx < 0) {
          deleting = false;
          roleIdx = (roleIdx + 1) % roles.length;
          charIdx = 0;
        }
      }
      setText(current.slice(0, charIdx));
      timeoutId = setTimeout(tick, deleting ? 35 : 65);
    }

    timeoutId = setTimeout(tick, 65);
    return () => clearTimeout(timeoutId);
  }, [roles]);

  return text;
}
