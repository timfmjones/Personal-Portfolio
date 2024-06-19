// useSmoothScroll.js
import { useEffect } from 'react';

const useSmoothScroll = (selector) => {
  useEffect(() => {
    if (selector) {
      const element = document.querySelector(selector);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  }, [selector]);
};

export default useSmoothScroll;
