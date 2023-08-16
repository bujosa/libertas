import React from 'react';
import Header from './components/Header/Header';
import Features from './components/Features/Features';
import Home from './components/Home/Home';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import './App.css';

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
