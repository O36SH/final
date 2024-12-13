import { useState, useEffect } from 'react';
import { debounce } from '../utils/performance';

export function useScrollDirection(threshold = 10) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      
      if (direction === 'down' && currentScrollY > threshold && isVisible) {
        setIsVisible(false);
      } else if (direction === 'up' && !isVisible) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    }, 50);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible, lastScrollY, threshold]);

  // Force header visibility when at top of page
  useEffect(() => {
    if (window.scrollY === 0 && !isVisible) {
      setIsVisible(true);
    }
  }, [isVisible]);

  return isVisible;
}