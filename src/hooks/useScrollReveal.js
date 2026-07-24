import { useEffect } from 'react';

export default function useScrollReveal(activeTab) {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      const revealElements = document.querySelectorAll('.reveal-on-scroll');
      if (revealElements.length === 0) return;

      const observer = new IntersectionObserver(
        (entries, obs) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              obs.unobserve(entry.target);
            }
          });
        },
        { rootMargin: '0px 0px -80px 0px', threshold: 0.1 }
      );

      revealElements.forEach((elem) => {
        if (!elem.classList.contains('is-visible')) {
          observer.observe(elem);
        }
      });

      return () => {
        observer.disconnect();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [activeTab]);
}
