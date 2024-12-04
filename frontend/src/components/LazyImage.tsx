import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const LazyImage = ({ src, alt, ...props }) => {
  const [ref, isIntersecting] = useIntersectionObserver();

  return (
    <div ref={ref}>
      {isIntersecting ? (
        <img src={src} alt={alt} {...props} />
      ) : (
        <div style={{ height: props.height, width: props.width }} />
      )}
    </div>
  );
};

export default LazyImage;
