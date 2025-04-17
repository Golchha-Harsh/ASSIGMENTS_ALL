import React from 'react';

const ThemeDisplay = ({ theme }) => {
  console.log('Rendering ThemeDisplay');
  return <h2>Current Theme: {theme}</h2>;
};

export default React.memo(ThemeDisplay);
