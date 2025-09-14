import React from 'react';

function Header() {
  const headerStyle = {
    backgroundColor: 'navy',
    color: 'white',
    textAlign: 'center',
    padding: '20px'         // extra styling for spacing
  };

  const h1Style = {
    margin: 0,              // remove default margin
    fontSize: '2.5rem'       // bigger heading
  };

  return (
    <header style={headerStyle}>
      <h1 style={h1Style}>My Favorite Cities</h1>
    </header>
  );
}

export default Header;
