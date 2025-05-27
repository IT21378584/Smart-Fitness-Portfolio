import React from 'react';
export function Hero() {
  return <section id="home" className="pt-24 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 bg-[#0d1117] relative">
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Research <span className="text-blue-400">Project</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          Innovative research solutions for the modern scientific landscape,
          combining expertise with technological innovation.
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md">
            Get Started
          </button>
          <button className="border border-gray-600 hover:border-blue-400 px-6 py-2 rounded-md">
            Learn More
          </button>
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0d1117] opacity-80"></div>
    </section>;
}