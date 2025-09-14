import React from 'react';

function MainContent() {
  const mainStyle = {
    padding: '20px',
    margin: '20px',
    backgroundColor: '#ffffff',
    color: '#333333',
    lineHeight: '1.6'
  };

  const paragraphStyle = {
    fontSize: '1.2rem',
    marginBottom: '15px'
  };

  const listStyle = {
    listStyleType: 'square',
    paddingLeft: '20px'
  };

  const listItemStyle = {
    marginBottom: '8px'
  };

  return (
    <main style={mainStyle}>
      <p style={paragraphStyle}>
        Here is some interesting content about my favorite cities...
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Paris</li>
        <li style={listItemStyle}>Tokyo</li>
        <li style={listItemStyle}>New York</li>
      </ul>
    </main>
  );
}

export default MainContent;
