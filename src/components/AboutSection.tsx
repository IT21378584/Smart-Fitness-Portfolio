import React from 'react';
import { Check } from 'lucide-react';
export function AboutSection() {
  const features = ['Advanced data analysis capabilities', 'Real-time monitoring and reporting', 'Integration with existing research tools', 'Secure data storage and management', 'Collaborative research environment', 'Multi-device access for anywhere use'];
  return <section id="about" className="py-16 md:py-24 px-6 md:px-12 bg-[#121824]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          About Our Research System
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <p className="text-gray-300">
              Our research system combines innovative methodologies with
              state-of-the-art technology, enabling researchers to achieve
              breakthrough results in their respective fields.
            </p>
            <p className="text-gray-300">
              Smart Fitness for Athletes was designed specially For Athletes to develop the skill level at the peak.
            </p>
            <p className="text-gray-300">
              The system supports a comprehensive research lifecycle, from
              initial concept development to final publication, providing tools
              for every stage of the research process.
            </p>
          </div>
          <div className="bg-[#1a2030] p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-blue-400">
              Key Features
            </h3>
            <div className="space-y-3">
              {features.map((feature, index) => <div key={index} className="flex items-start">
                  <Check size={20} className="text-blue-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{feature}</span>
                </div>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}