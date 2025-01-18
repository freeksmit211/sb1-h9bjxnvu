import React from 'react';
import { Dumbbell, Mail, Phone, Instagram, Calendar, Salad, Users } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h3 className="text-xl font-bold">RealFitness</h3>
              <p className="text-gray-400">Middelburg, MP South Africa</p>
            </div>
            <div className="flex space-x-6">
              <a href="tel:+27123456789" className="hover:text-green-500">
                <Phone className="w-6 h-6" />
              </a>
              <a href="mailto:niel@realfitness.co.za" className="hover:text-green-500">
                <Mail className="w-6 h-6" />
              </a>
              <a href="https://instagram.com/realfitness" className="hover:text-green-500">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} RealFitness. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;