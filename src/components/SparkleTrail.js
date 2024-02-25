import React, { useEffect, useRef } from 'react';
import './styles/SparkleTrail.css';

const SparkleTrail = ({ targetSelector }) => {
  useEffect(() => {
    const sparkles = [];

    const createSparkle = (x, y) => {
      const sparkle = document.createElement('div');
      sparkle.classList.add('sparkle');
      sparkle.style.left = `${x}px`;
      sparkle.style.top = `${y}px`;
      sparkle.textContent = '\u2b52';
      document.body.appendChild(sparkle);

      setTimeout(() => {
        document.body.removeChild(sparkle);
      }, 500);
    };

    const onMouseMove = (e) => {
      console.log('over');
      const { clientX, clientY } = e;
      const target = document.querySelector(targetSelector);
      console.log(target);
      if (target && target.contains(e.target)) {
        const rect = target.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        console.log(x, y);
        createSparkle(x, y);
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, [targetSelector]);

  return null;
};

export default SparkleTrail;
