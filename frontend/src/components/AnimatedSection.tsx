import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

export default function AnimatedSection({ children }) {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div
      ref={ref}
      style={{
        opacity: "1.2",
        transition: "background-color 0.3s",
        backgroundColor: isIntersecting ? "#1c1c1b" : "#110603",
      }}
    >
      {children}
    </div>
  );
}
