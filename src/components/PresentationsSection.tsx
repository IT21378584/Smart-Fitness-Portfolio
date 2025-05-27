import React from 'react';
import { FileText } from 'lucide-react';

export function PresentationsSection() {
  const presentations = [
    {
      title: 'Proposal Presentation',
      description: 'Initial Presentation with Overview of Research Problem.',
      date: 'May, 2025',
      type: 'PPTX',
      link: 'https://drive.google.com/drive/folders/1ixBQT-PcdvZDb1lOgjW7HtAxVmNxTCpa?usp=drive_link',
    },
    {
      title: 'Progress Presentation - 1',
      description: '50% Project Completion.',
      date: 'May, 2025',
      type: 'PPTX',
      link: 'https://drive.google.com/drive/folders/1q3a9EIVah_04Ukm6h3nH34Mo7rLGFvGp?usp=drive_link',
    },
    {
      title: 'Progress Presentation - 2',
      description: '90% Project Completion.',
      date: 'May, 2025',
      type: 'PPTX',
      link: 'https://drive.google.com/drive/folders/1TTTCb1g3asP1zEQiPW5IuTN4tbdHHo51?usp=drive_link',
    },
    {
      title: 'Final Presentation',
      description: '100% Completion with deployed Solution.',
      date: 'May, 2025',
      type: 'PPTX',
      link: 'https://drive.google.com/drive/folders/1TTTCb1g3asP1zEQiPW5IuTN4tbdHHo51?usp=drive_link',
    },
  ];

  return (
    <section
      id="presentations"
      className="py-16 md:py-24 px-6 md:px-12 bg-[#121824]"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Project Presentations
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {presentations.map((presentation, index) => (
            <div
              key={index}
              className="bg-[#1a2030] p-6 rounded-lg flex flex-col"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">
                {presentation.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3 flex-grow">
                {presentation.description}
              </p>
              <p className="text-gray-500 text-sm mb-4">{presentation.date}</p>
              <a
                href={presentation.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-900 hover:bg-opacity-20 px-4 py-2 rounded flex items-center justify-center"
              >
                <FileText size={16} className="mr-2" />
                View Presentation
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
