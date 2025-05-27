import React from 'react';

export function TechnologiesSection() {
  const technologies = [
    {
      name: 'React JS',
      description: 'For building interactive user interfaces',
      icon: 'R',
    },
    {
      name: 'Node JS',
      description: 'For scalable server-side applications',
      icon: 'N',
    },
    {
      name: 'Express JS',
      description: 'For handling backend routing and middleware',
      icon: 'E',
    },
    {
      name: 'Python',
      description: 'For data science & analysis',
      icon: 'P',
    },
    {
      name: 'Fast API',
      description: 'For fast and efficient backend services',
      icon: 'F',
    },
    {
      name: 'Mongo DB',
      description: 'For NoSQL database storage',
      icon: 'M',
    },
    {
      name: 'Dockerize',
      description: 'For containerizing and deploying applications',
      icon: 'D',
    },
  ];

  return (
    <section
      id="technologies"
      className="py-16 md:py-24 px-6 md:px-12 bg-[#121824]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4">
          Technologies Used
        </h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Our research platform leverages cutting-edge technologies to deliver
          powerful capabilities
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#1a2030] p-6 rounded-lg hover:border hover:border-blue-400 transition-all"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center text-blue-400 font-bold text-xl">
                  {tech.icon}
                </div>
                <h3 className="text-xl font-semibold ml-4">{tech.name}</h3>
              </div>
              <p className="text-gray-400">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
