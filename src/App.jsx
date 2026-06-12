import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import About from './components/About';
import Reviews from './components/Reviews';
import Questions from './components/Questions';
import Footer from './components/Footer';

function App() {
  return (
    <div className='bg-black min-h-screen max-w-screen pl-10 items-center'>
      <Navbar />
      <Header />
      <Dashboard />
      <About />
      <Reviews />
      <Questions />
      <Footer />
    </div>
  )
}

export default App
