const baseURL = 'https://it21378584.github.io/smart-fitness-portfolio';
import { Linkedin, Twitter, Mail } from 'lucide-react';

export function TeamSection() {
  const teamMembers = [
    {
      name: 'Mrs. Sanjeevi Chandrasiri',
      role: 'Supervisor',
      bio: 'SLecturer, Sri Lanka Institute of Information Technology',
      image: '/smart-fitness-portfolio/61.jpg',
    },
    {
      name: 'Ms. Ishara Weerathunga',
      role: 'Co-Supervisor',
      bio: 'Assistant Lecturer, Sri Lanka Institute of Information Technology',
      image: '/smart-fitness-portfolio/66.jpg',
    },
    {
      name: 'Mr. Rashane Malsha',
      role: 'Researcher',
      bio: 'BSc (Hons) Information Technology Specializing in Information Technology',
      image: '/smart-fitness-portfolio/62.jpg',
    },
    {
      name: 'Ms. Sahani Kulathilaka',
      role: 'Researcher',
      bio: 'BSc (Hons) Information Technology Specializing in Information Technology',
      image: '/smart-fitness-portfolio/65.jpg',
    },
    {
      name: 'Mr. Kanchana Jayawardhana',
      role: 'Researcher',
      bio: 'BSc (Hons) Information Technology Specializing in Information Technology',
      image: '/smart-fitness-portfolio/64.jpg',
    },
    {
      name: 'Ms. Sahassrika Karunasena',
      role: 'Researcher',
      bio: 'BSc (Hons) Information Technology Specializing in Information Technology',
      image: '/smart-fitness-portfolio/63.jpg',
    },
  ];

  return (
    <section id="team" className="py-16 md:py-24 px-6 md:px-12 bg-[#0d1117]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-4 text-white">Our Team</h2>
        <p className="text-gray-300 text-center mb-12 max-w-3xl mx-auto">
          Meet the researchers and experts behind the project
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-[#1a2030] p-6 rounded-lg flex flex-col">
              <div className="mb-4 w-full aspect-square rounded-lg overflow-hidden bg-blue-900">
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <span className="text-blue-400 text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-blue-400 text-sm mb-3">{member.role}</p>
              <p className="text-gray-400 text-sm mb-4 flex-grow">{member.bio}</p>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-gray-400 hover:text-blue-400">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
