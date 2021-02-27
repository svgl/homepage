import { useEffect, useState } from 'react';

export function useIsScrolled() {
  const [isScrolled, setIsScrolled] = useState(window.scrollY > 0);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 0);
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () =>
      window.removeEventListener('scroll', handleScroll, { passive: true });
  }, [isScrolled]);

  return [isScrolled];
}
