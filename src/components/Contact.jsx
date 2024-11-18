import React from 'react';
import { FaLinkedin, FaWhatsapp, FaEnvelope, FaFacebook, FaGithub } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id="contact" className="py-16 bg-gray-800 text-white">
      <div className="container mx-auto px-6 text-center">
        {/* Enhanced Heading */}
        <h3 className="text-5xl font-extrabold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">
          Get in Touch
        </h3>

        <p className="mb-4 text-lg text-gray-300">
          I'm open to remote job opportunities. Feel free to reach out!
        </p>
        <div className="flex justify-center space-x-8">
          {/* LinkedIn - Slightly Larger and Colorful */}
          <a
            href="https://www.linkedin.com/in/johnson-adedokun/"
            className="text-blue-500 text-3xl hover:text-blue-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          {/* GitHub - Stand Out */}
          <a
            href="https://github.com/jglobal1"
            className="text-gray-200 text-3xl hover:text-gray-400 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          {/* WhatsApp */}
          <a
            href="https://wa.me/yourwhatsapplink"
            className="text-green-500 text-2xl hover:text-green-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          {/* Email */}
          <a
            href="mailto:youremail@example.com"
            className="text-gray-500 text-2xl hover:text-gray-600 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </a>
          {/* Facebook */}
          <a
            href="https://www.facebook.com/yourfacebookprofile"
            className="text-blue-600 text-2xl hover:text-blue-700 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
