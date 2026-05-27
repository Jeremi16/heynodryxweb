import { useEffect, useRef, useState } from 'react';

/**
 * Track which heading is currently in view for sidebar navigation.
 * @param {string[]} headingIds - array of element IDs to track
 * @returns {string} - the currently active heading ID
 */
export default function useScrollSpy(headingIds) {
  const [activeId, setActiveId] = useState(headingIds[0] || '');

  useEffect(() => {
    const elements = headingIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: '-80px 0px -80% 0px' }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [headingIds]);

  return activeId;
}
