import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Downloads from './components/Downloads';
import Support from './components/Support';
import About from './components/About';
import Footer from './components/Footer';

import './index.css';

const App = () => (
  <div className="App min-h-screen bg-black text-white font-poppins">
    <div className="bg-gradient-to-b from-red-600 to-black">
      <Navbar />
      <Home />
      <Downloads />
      <About />
      <Support/>
      <Footer />
    </div>
  </div>
);

export default App;
