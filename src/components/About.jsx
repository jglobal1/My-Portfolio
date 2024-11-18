import React from 'react';
import Pic from '../assets/Image(24).jpeg';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Enlarged Profile Image */}
          <div className="w-36 h-36 rounded-full overflow-hidden mb-8">
            <img
              src={Pic}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <p className="text-lg md:text-xl leading-relaxed text-gray-300 max-w-3xl mx-auto mb-6">
            I'm a front-end developer from Nigeria with expertise in React, TypeScript, and modern CSS frameworks like Tailwind.
            I enjoy building interactive and responsive web applications that provide smooth user experiences across devices.
            I am currently looking for remote job opportunities where I can contribute my skills to impactful projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
