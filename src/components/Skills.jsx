import React from 'react';

// Array of skills with their corresponding icons (you can change the icon names as needed)
const skills = [
  { name: 'HTML', icon: 'fab fa-html5', color: 'bg-orange-500' },
  { name: 'CSS', icon: 'fab fa-css3-alt', color: 'bg-blue-500' },
  { name: 'JavaScript', icon: 'fab fa-js-square', color: 'bg-yellow-400' },
  { name: 'React', icon: 'fab fa-react', color: 'bg-cyan-500' },
  { name: 'Tailwind CSS', icon: 'fab fa-tailwind', color: 'bg-teal-400' },
  { name: 'TypeScript', icon: 'fab fa-js-square', color: 'bg-blue-600' },
  { name: 'Git', icon: 'fab fa-git', color: 'bg-red-500' },
  { name: 'API Integration', icon: 'fas fa-plug', color: 'bg-green-500' },
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white">
      <div className="container mx-auto px-6">
        <h3 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500 mb-12">
          Skills
        </h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className={`p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 ${skill.color} text-white text-center flex flex-col items-center justify-center`}
            >
              <i className={`${skill.icon} text-5xl mb-4`} aria-hidden="true"></i>
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
