import { useEffect, useRef } from 'react';

const useScrollReveal = ({ threshold = 0.1, rootMargin = '0px 0px -50px 0px' } = {}) => {
  const ref = useRef(null);

  useEffect(() => {
    const currentRef = ref.current;
    if (!currentRef) return;

    // Optional: respect reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      currentRef.classList.add('reveal-active');
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        currentRef.classList.add('reveal-active');
        observer.unobserve(currentRef);
      }
    }, { threshold, rootMargin });

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
};

export default useScrollReveal;
