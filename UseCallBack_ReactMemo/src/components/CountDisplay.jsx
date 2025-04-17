import React, { useEffect, useState } from 'react';
import './CountDisplay.css';
//here count state and onclick event as a props coming from app.jsx
const CountDisplay = ({ count, onClick }) => {
  //animate will handle state if it bounce or not
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
    const timeout = setTimeout(() => setAnimate(false), 300);
    return () => clearTimeout(timeout);
  }, [count]);

  console.log('Rendering CountDisplay');
  return (
    <div className="count-display">
      <h2 className={animate ? 'bounce' : ''}>Count: {count}</h2>
      <button onClick={onClick}>Click Me to Increment</button>
    </div>
  );
};  

export default React.memo(CountDisplay);
