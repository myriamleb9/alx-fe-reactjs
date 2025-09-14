import React from 'react';

function Footer() {
  const footerStyle = {
    backgroundColor: '#222222',
    color: '#ffffff',
    textAlign: 'center',
    padding: '15px',
    position: 'fixed',
    width: '100%',
    bottom: 0
  };

  const pStyle = {
    margin: 0,
    fontSize: '0.9rem'
  };

  return (
    <footer style={footerStyle}>
      <p style={pStyle}>© 2025 My Favorite Cities. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
