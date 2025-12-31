import React from 'react';
import Navbar from '../Components/Navbar';
import Hero from '../Components/Hero';
import FeaturedCourses from './FeaturedCourses';
import Footer from '../Components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* NAVBAR */}
      <Hero/>
      <FeaturedCourses/>
      <Footer/>
      {/* HERO */} 
        </div>
    
  );
};

export default Home;