import React from 'react';

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white p-6 relative font-poppins"
    >
      {/* Background Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className=" bg-yellow-400 opacity-30 rounded-full blur-3xl absolute -top-20 -left-20 sm:w-64 sm:h-64 sm:-top-10 sm:-left-10"></div>
        <div className=" bg-blue-500 opacity-30 rounded-full blur-3xl absolute -bottom-20 -right-20 sm:w-64 sm:h-64 sm:-bottom-10 sm:-right-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        <h2 className="text-4xl sm:text-3xl md:text-6xl font-extrabold leading-tight mb-4">
          Hi, I'm <span className="text-yellow-400">JOHNSON ADEDOKUN</span>
        </h2>
        <p className="text-lg sm:text-base md:text-xl mb-6 text-gray-300 max-w-2xl mx-auto">
          A passionate <span className="text-blue-400">Front-end Developer</span> creating modern and interactive web
          applications using React and cutting-edge technologies.
        </p>
        <div className="space-x-4 sm:space-x-2">
          <a
            href="#projects"
            className="bg-yellow-400 hover:bg-yellow-500 text-black py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="bg-transparent border border-yellow-400 text-yellow-400 py-3 px-6 rounded-lg hover:bg-yellow-400 hover:text-black shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Contact Me
          </a>
        </div>
      </div>

      {/* Decorative Icons or Shapes */}
      <div className="absolute bottom-10 flex gap-8 justify-center text-gray-500 animate-bounce">
        <a href="#projects" className="hover:text-yellow-400 transition">
          <i className="fas fa-chevron-down text-2xl sm:text-xl"></i>
        </a>
      </div>
    </section>
  );
};

export default Hero;
