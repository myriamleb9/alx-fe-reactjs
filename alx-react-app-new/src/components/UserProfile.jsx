import React from 'react';

function UserProfile(props) {
  const { name, age, bio } = props;

  const containerStyle = {
    border: '1px solid gray',
    padding: '15px',
    margin: '15px',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5'  // light background
  };

  const nameStyle = {
    color: 'blue',
    fontSize: '1.8rem',
    marginBottom: '10px'
  };

  const ageLabelStyle = {
    fontWeight: 'bold'
  };

  const bioStyle = {
    fontStyle: 'italic',
    marginTop: '10px'
  };

  return (
    <div style={containerStyle}>
      <h2 style={nameStyle}>{name}</h2>
      <p>
        Age: <span style={ageLabelStyle}>{age}</span>
      </p>
      <p style={bioStyle}>Bio: {bio}</p>
    </div>
  );
}

export default UserProfile;
