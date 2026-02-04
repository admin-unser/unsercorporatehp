'use client';

import { useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches);
    };
    
    checkDesktop();
    window.addEventListener('resize', checkDesktop);

    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;

    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseEnter = () => setIsHovering(true);
    const handleMouseLeave = () => setIsHovering(false);

    const handleMouseOut = (e: MouseEvent) => {
      if (!e.relatedTarget) {
        setIsVisible(false);
      }
    };

    const handleMouseOver = () => {
      setIsVisible(true);
    };

    window.addEventListener('mousemove', updateMousePosition);
    document.addEventListener('mouseout', handleMouseOut);
    document.addEventListener('mouseover', handleMouseOver);

    // インタラクティブ要素のイベント
    const addInteractiveListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
      interactiveElements.forEach((el) => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });
      return interactiveElements;
    };

    const elements = addInteractiveListeners();

    // MutationObserverで動的な要素にも対応
    const observer = new MutationObserver(() => {
      addInteractiveListeners();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      document.removeEventListener('mouseout', handleMouseOut);
      document.removeEventListener('mouseover', handleMouseOver);
      elements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      observer.disconnect();
    };
  }, [isDesktop, isVisible]);

  if (!isDesktop) return null;

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 rounded-full pointer-events-none z-[9999]"
        style={{
          border: '1px solid rgba(99, 102, 241, 0.4)',
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 20,
          mass: 0.5,
        }}
      />
      {/* Inner Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full pointer-events-none z-[9999]"
        style={{
          background: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)',
          mixBlendMode: 'difference',
        }}
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0.5 : 1,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 25,
        }}
      />
    </>
  );
}
