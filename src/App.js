import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Otherexperiences from './components/other-experiences/Other-experiences';
import Qualification from './components/qualifications/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scrollup from './components/scrollup/Scrollup';
import Work from './components/work/Work';

const App = () => {
  return (
    <>
      <Header />

      <main className="main">
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Otherexperiences />
        <Work />
        <Contact />
      </main>

      <Footer />
      <Scrollup />
    </>
  );
}

export default App;
