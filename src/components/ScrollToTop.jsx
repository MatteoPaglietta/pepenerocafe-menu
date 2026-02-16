import { useState, useEffect } from 'react';
import { getSeasonKey } from '../data/menuData';

const ScrollToTop = ({ containerRef }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [bottomOffset, setBottomOffset] = useState('30px');
  const currentSeason = getSeasonKey();

  const toggleVisibility = () => {
    if (!containerRef || !containerRef.current) return;

    const container = containerRef.current;
    const scrollTop = container.scrollTop;
    const footerElement = container.querySelector('.main-footer');

    if (scrollTop > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
      return;
    }

    if (footerElement) {
      const footerTop = footerElement.offsetTop;
      const containerHeight = container.clientHeight;
      const scrollBottom = scrollTop + containerHeight;
      const distanceToFooter = footerTop - scrollBottom;

      if (distanceToFooter < 80) {
        setIsVisible(false);
      } else {
        setBottomOffset('30px');
      }
    }
  };

  const scrollToTop = () => {
    if (!containerRef || !containerRef.current) return;

    const container = containerRef.current;
    const scrollDuration = 800;
    const startPosition = container.scrollTop;
    const startTime = performance.now();

    const easeInOutQuad = (t) => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const scroll = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / scrollDuration, 1);
      const ease = easeInOutQuad(progress);

      container.scrollTop = startPosition * (1 - ease);

      if (progress < 1) {
        requestAnimationFrame(scroll);
      }
    };

    requestAnimationFrame(scroll);
  };

  useEffect(() => {
    const container = containerRef?.current;
    if (!container) return;

    container.addEventListener('scroll', toggleVisibility);
    return () => {
      container.removeEventListener('scroll', toggleVisibility);
    };
  }, [containerRef]);

  return (
    <>
      {isVisible && (
        <button
          className={`scroll-to-top scroll-to-top-${currentSeason}`}
          onClick={scrollToTop}
          style={{ bottom: bottomOffset }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="18 15 12 9 6 15"></polyline>
          </svg>
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
