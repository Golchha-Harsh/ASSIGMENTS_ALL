import React, { useState, useCallback } from 'react';
import CountDisplay from './components/CountDisplay';
import ThemeDisplay from './components/ThemeDisplay';

const App = () => {
  const [count, setCount] = useState(0);
  const [theme, setTheme] = useState('light');

  const increment = useCallback(() => {
    setCount(prev => prev + 1);
  }, []);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '2rem' }}>
      <h1>React.memo + useCallback Demo</h1>
      <button onClick={increment}>Increment Count</button>
      <button onClick={toggleTheme}>Toggle Theme</button>

      <CountDisplay count={count} onClick={increment} />
      <ThemeDisplay theme={theme} />
    </div>
  );
};

export default App;
