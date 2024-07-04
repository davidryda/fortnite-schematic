import React, { useEffect, useState } from 'react';
import styles from './SchematicCard.module.scss';

// .floatingTriangle {
//   position: absolute;
//   bottom: -100px;
//   // left: This value is controlled in the FloatingTriangle.tsx component
//   width: 100px;
//   height: 100px;
//   clip-path: polygon(0 0, 100% 0, 0 100%);
//   background-color: black;

//   &.animate {
//     animation-name: zeroGravity;
//     // animation-duration: This value is controlled in the FloatingTriangle.tsx component
//     animation-timing-function: linear;
//     animation-iteration-count: infinite;
//     // transform: This value is controlled in the FloatingTriangle.tsx component
//   }
// }

function rng(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

interface FloatingTriangleProps {
  initialLeft: number;
  initialDuration: number;
  initialRotation: number;
}

const FloatingTriangle: React.FC<FloatingTriangleProps> = ({
  initialLeft,
  initialDuration,
  initialRotation,
}) => {
  const [left, setLeft] = useState(initialLeft);
  const [duration, setDuration] = useState(initialDuration);
  const [rotation, setRotation] = useState(initialRotation);
  const [clipPath, setClipPath] = useState("0 0, 100% 0, 0 100%");
  const [isAnimating, setIsAnimating] = useState(true);

  const generateRandomClipPath = () => {
    // Generate the first point in the left half
    const x1 = Math.floor(Math.random() * 40);
    const y1 = Math.floor(Math.random() * 100);
  
    // Generate the second point in the right half
    const x2 = Math.floor(Math.random() * 40) + 60;
    const y2 = Math.floor(Math.random() * 100);
  
    // Generate the third point ensuring it's not too close to the line formed by the first two points
    let x3, y3;
    do {
      x3 = Math.floor(Math.random() * 100);
      y3 = Math.floor(Math.random() * 100);
    } while (isPointTooClose(x1, y1, x2, y2, x3, y3));
  
    return `${x1}% ${y1}%, ${x2}% ${y2}%, ${x3}% ${y3}%`;
  };
  
  // Helper function to check if a point is too close to a line
  const isPointTooClose = (x1: number, y1: number, x2: number, y2: number, x3: number, y3: number) => {
    const distanceThreshold = 15; // Adjust this value to control minimum "thickness"
  
    // Calculate the distance from point 3 to the line formed by points 1 and 2
    const numerator = Math.abs((y2-y1)*x3 - (x2-x1)*y3 + x2*y1 - y2*x1);
    const denominator = Math.sqrt((y2-y1)**2 + (x2-x1)**2);
    const distance = numerator / denominator;
  
    return distance < distanceThreshold;
  };

  const updateTriangle = () => {
    setIsAnimating(false);

    // Generate new values
    const newDuration = rng(20, 30);
    const newLeftPosition = rng(0, 100);
    const newRotation = rng(0, 359);
    const newClipPath = generateRandomClipPath();

    // Apply new values and restart animation
    setTimeout(() => {
      setDuration(newDuration);
      setLeft(newLeftPosition);
      setRotation(newRotation);
      setClipPath(newClipPath);
      setIsAnimating(true);
    }, 50); // Small delay to ensure CSS update
  };

  useEffect(() => {
    const timer = setTimeout(updateTriangle, duration * 1000);
    return () => clearTimeout(timer);
  }, [duration]);

  return (
    <div
      className={`${styles.floatingTriangle} ${
        isAnimating ? styles.animate : ''
      }`}
      style={{
        left: `${left}%`,
        animationDuration: `${duration}s`,
        transform: `rotate(${rotation}deg)`,
        clipPath: `polygon(${clipPath})`,
      }}
    />
  );
};

export default FloatingTriangle;
