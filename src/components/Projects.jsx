import React from 'react';

const projects = [
  { title: 'Movie Search App', description: 'A responsive app to search, view, and save favorite movies.', link: 'https://movie-site-pied-ten.vercel.app' },
  { title: 'Brightside Restaurant', description: 'A responsive website for a restaurant to showcase its menu, allow customers to place orders via WhatsApp, and provide information about the restaurant’s offerings and ambiance.', link: 'https://brightsidebite.com/' },
  { title: 'Event Management Dashboard', description: 'A responsive dashboard for event management, allowing users to view and manage event details, attendees, and schedules.', link: 'https://event-management-dashboard-ghtc.vercel.app/' },
  { title: 'Weather App', description: 'A responsive weather app that allows users to check current weather conditions and forecasts for any location.', link: 'https://weather-app-one-iota-67.vercel.app/' },
  { title: 'Booking site', description: 'A responsive booking app that allows users to search, view, and book available accommodations or services.', link: 'https://booking-app-react-beige.vercel.app/' },
  { title: 'Desygnative', description: 'A responsive website for an e-commerce platform, enabling users to browse products, view details, and make purchases.', link: 'https://aj-theta.vercel.app/' },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16 bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
          Featured Projects
        </h3>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:bg-gray-700 duration-300"
            >
              <h4 className="text-2xl font-semibold text-white mb-4">
                {project.title}
              </h4>
              <p className="text-gray-400 text-base mb-6">{project.description}</p> {/* Increased font size */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-lg font-medium"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
