import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    padding: '10px',
    display: 'flex',
    justifyContent: 'space-around'
  };

  const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.1rem'
  };

  return (
    <nav style={navStyle}>
      <Link style={linkStyle} to="/">Home</Link>
      <Link style={linkStyle} to="/about">About</Link>
      <Link style={linkStyle} to="/services">Services</Link>
      <Link style={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;
