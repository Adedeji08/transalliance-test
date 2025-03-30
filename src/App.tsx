import React from 'react';
import TransalliancePages from './pages';
import './App.css';
import Navbar from './components/navbar';

function App() {
  return (
  <div className='max-w-screen-2xl mx-auto'>
    <Navbar />
    <TransalliancePages />
  </div>
  );
}

export default App;
