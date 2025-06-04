// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\App.js
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import GuitarSection from './GuitarSection';
import AmplifierSection from './AmplifierSection';
import EffectsSection from './EffectsSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import '../css/App.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <GuitarSection />
        <AmplifierSection />
        <EffectsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

export default App;