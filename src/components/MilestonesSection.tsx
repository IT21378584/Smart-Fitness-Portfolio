import React from 'react';
export function MilestonesSection() {
  const milestones = [{
    title: 'Project Proposal',
    description: 'Initial project presentation and proposal report submission',
    date: 'February 2024'
  }, {
    title: 'Progress Presentation – 1',
    description: 'First progress review and demonstration',
    date: 'April 2024'
  }, {
    title: 'Research Paper Publication',
    description: 'Publication of research findings in academic journals',
    date: 'July 2024'
  },{
    title: 'Final Reports (Thesis)',
    description: 'Submission of comprehensive thesis documentation',
    date: 'September 2024'
  }, {
    title: 'Progress Presentation - 2',
    description: 'Second progress review and system demonstration',
    date: 'October 2024'
  }, {
    title: 'Status Documents 1 & 2',
    description: 'Submission of project status documentation',
    date: 'November 2024'
  },{
    title: 'Log Books',
    description: 'Submission of detailed project logs and documentation',
    date: 'October 2024'
  }, {
    title: 'Final Presentation + Viva',
    description: 'Research findings submitted for peer review and validation.',
    date: 'May 2025'
  }, {
    title: 'Website Development',
    description: 'Development and deployment of project website',
    date: 'May 2025'
  }];
  return <section id="milestones" className="py-16 md:py-24 px-6 md:px-12 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Project Milestones
        </h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-blue-900"></div>
          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => <div key={index} className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                {/* Content */}
                <div className="md:w-1/2 pl-8 md:pl-0 md:px-8">
                  <div className="bg-[#1a2030] p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-400 mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-2">
                      {milestone.description}
                    </p>
                    <p className="text-gray-500 text-xs">{milestone.date}</p>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}