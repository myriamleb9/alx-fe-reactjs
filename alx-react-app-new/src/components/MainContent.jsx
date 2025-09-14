import React from 'react';

function MainContent() {
  const mainStyle = {
    padding: '20px',
    backgroundColor: '#f0f0f0',
    color: '#333',
    borderRadius: '10px',
    margin: '20px'
  };

  const textStyle = {
    fontSize: '1.2rem'
  };

  return (
    <main style={mainStyle}>
      <p style={textStyle}>
        I love to visit New York, Paris, and Tokyo.
      </p>
    </main>
  );
}

export default MainContent;
