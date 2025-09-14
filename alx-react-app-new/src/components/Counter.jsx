// src/components/Counter.jsx

import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const containerStyle = {
    textAlign: 'center',
    marginTop: '40px',
    padding: '20px',
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    width: '300px',
    marginLeft: 'auto',
    marginRight: 'auto',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    margin: '10px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    borderRadius: '5px',
    border: '1px solid #ccc',
    backgroundColor: '#ffffff'
  };

  const countStyle = {
    fontSize: '1.5rem',
    marginBottom: '20px'
  };

  return (
    <div style={containerStyle}>
      <p style={countStyle}>Current Count: {count}</p>
      <button style={buttonStyle} onClick={() => setCount(count + 1)}>Increment</button>
      <button style={buttonStyle} onClick={() => setCount(count - 1)}>Decrement</button>
      <button style={buttonStyle} onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

export default Counter;
