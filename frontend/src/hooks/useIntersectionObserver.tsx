import { useState, useEffect, useRef } from "react";

export function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);

  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px", threshold: 0.1, ...options },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [options]);
  return [ref, isIntersecting];
}
