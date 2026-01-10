import React from "react";
import Navbar from "../Components/layout/Navbar";
import FeaturedCourses from "./FeaturedCourses";
import Footer from "../Components/layout/Footer";
import Hero from "../Components/layout/Hero";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* NAVBAR */}
      <Hero />
      <FeaturedCourses />
      <Footer />
      {/* HERO */}
    </div>
  );
};

export default Home;
