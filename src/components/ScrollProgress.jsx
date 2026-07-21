import React from 'react';
import { useScrollProgress } from '../hooks/usePortfolioHooks';

const ScrollProgress = () => {
  const scale = useScrollProgress();
  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[60] pointer-events-none">
      <div className="scroll-progress h-full bg-gradient-accent" style={{ transform: `scaleX(${scale})` }} />
    </div>
  );
};

export default ScrollProgress;
