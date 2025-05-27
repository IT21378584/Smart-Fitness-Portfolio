import React from 'react';
import { FileText, Download } from 'lucide-react';

export function DocumentsSection() {
  const documents = [
    {
      title: 'Project Charter',
      description:
        'The document gives the information regarding the statement of scope, objectives overview, an outline of scope, an approximate schedule and people who are participating in a project.',
      date: 'Last updated: May, 2025',
      link: 'https://drive.google.com/drive/folders/1u3jWEvOeJjL3gVGzEAPVY9B6OEyM-5oy?usp=drive_link',
    },
    {
      title: 'Project Proposal',
      description:
        'The document contains details like goals, objectives, important dates, milestones and requirements needed to start and complete the project.',
      date: 'Last updated: May, 2025',
      link: 'https://drive.google.com/drive/folders/1WiRdyktqzYN6MqrvNFGxQalRva035-Ea?usp=drive_link',
    },
    {
      title: 'Research Paper',
      description:
        'A research paper contains writing that provides Literature review, Research methodology, analysis, interpretation, and argument based on in-depth independent research',
      date: 'Last updated: May, 2025',
      link: 'https://drive.google.com/drive/folders/108fCdPQ5ddQuhCdF08J7isXS_1iVv6RT?usp=drive_link',
    },
    {
      title: 'Final Thesis',
      description:
        'The document contains the Proposed solution to the research question, which was finalized after completing the research',
      date: 'Last updated: May, 2025',
      link: 'https://drive.google.com/drive/folders/1VlxWqKd7HsBsG_j6a9SRHctqxspj9090?usp=drive_link',
    },
    {
      title: 'Status Document',
      description:
        'The document describes the progress of the project within the specific time period and compares it against the project plan checklist',
      date: 'Last updated: May, 2025',
      link: 'https://drive.google.com/drive/folders/1gWOcdepCGTlMyZJjvfdgyResnqagXCbk?usp=drive_link',
    },
  ];

  return (
    <section id="documents" className="py-16 md:py-24 px-6 md:px-12 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Project Documents</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Access our research documentation and reports
        </p>
        <div className="space-y-6">
          {documents.map((doc, index) => (
            <div
              key={index}
              className="bg-[#1a2030] p-6 rounded-lg flex flex-col md:flex-row justify-between"
            >
              <div className="flex-1">
                <div className="flex items-start mb-2">
                  <FileText className="text-blue-400 mr-3 mt-1 flex-shrink-0" size={20} />
                  <h3 className="text-xl font-semibold text-white">{doc.title}</h3>
                </div>
                <p className="text-gray-400 mb-3 md:mb-0">{doc.description}</p>
                <p className="text-gray-500 text-sm">{doc.date}</p>
              </div>
              <div className="mt-4 md:mt-0">
                <a
                  href={doc.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
                >
                  <Download size={16} className="mr-2" />
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
