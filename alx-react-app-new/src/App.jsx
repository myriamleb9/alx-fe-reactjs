import React from 'react';
import Header from './components/Header';
import UserProfile from './components/UserProfile';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <UserProfile
        name="Alice Smith"
        age={29}
        bio="I love to travel and explore new cities in my free time."
      />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
