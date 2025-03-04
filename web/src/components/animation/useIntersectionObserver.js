import { useEffect } from 'react';

/**
 * Custom hook for Intersection Observer
 * @param {React.RefObject} targetRef - Reference to the element to be observed
 * @param {Function} callback - Callback to execute when the element comes into view
 * @param {number} threshold - The percentage of the element that needs to be visible for the observer to trigger
 */
const useIntersectionObserver = (targetRef, callback, threshold = 0.5) => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target);
          observer.unobserve(entry.target); // Stop observing once the element is in view
        }
      });
    }, { threshold });

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [targetRef, callback, threshold]);
};

export default useIntersectionObserver;
