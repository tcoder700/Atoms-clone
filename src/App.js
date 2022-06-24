import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Cards from './components/Cards';
import Profile from './components/Profile';

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Landing />
      <Cards />
      <Profile />
    </React.Fragment>
  );
}

export default App;
