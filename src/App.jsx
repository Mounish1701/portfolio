import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WhatIBuild from './components/WhatIBuild';
import AIArchitecture from './components/AIArchitecture';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Strengths from './components/Strengths';
import GithubSection from './components/GithubSection';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="portfolio-app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <WhatIBuild />
        <AIArchitecture />
        <Education />
        <Certifications />
        <Strengths />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
