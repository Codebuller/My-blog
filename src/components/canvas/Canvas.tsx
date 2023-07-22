import React, { useRef, useEffect } from 'react';
import styles from './Canvas.module.css'
const Canvas = ({ width, height }) => {
  const canvasRef = useRef(null);
  const pointsRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const points = pointsRef.current;

    let radius = 50;
    let dr = 0.1;
    let period = 60000;
    let t = window.performance.now();

    const draw = () => {
      context.clearRect(0, 0, width, height);
      let i = 0;
      let deleted = 0;
      let dt = -t + (t = window.performance.now());
      
      context.beginPath();
      while (i++ < points.length-1) {
        let p = points[i];
        let r = radius - (p.time += dt) * dr;
        let blur = Math.max(0, 10   - p.time / period * p.blur);
        context.fillStyle='rgba(255,0,0,0.5)'
        context.shadowBlur = '10px'
        context.moveTo(p.x, p.y);
        if (r > 0 && p.time <= period) context.arc(p.x, p.y, r, 0, 2*Math.PI, true);
        else deleted = i;
      }
      context.fill();
      points.splice(0, deleted);

      window.requestAnimationFrame(draw);
    };

    canvas.addEventListener('mousemove', (event) => {
      const { left, top } = canvas.getBoundingClientRect();
      const x:number = event.clientX - left;
      const y:number = event.clientY - top;
      points.push({  x: x,y: y,time: 0,blur:10});
      
      if (points.length > 2000) {
        points.shift();
      }
    });

    draw();

    canvas.addEventListener('mouseenter', (event) => {
      canvas.removeEventListener('mouseenter', () => {});
    })
  }, [width, height]);

  return <canvas className={styles.canva} ref={canvasRef} width={width} height={height} />;
};

export default Canvas;