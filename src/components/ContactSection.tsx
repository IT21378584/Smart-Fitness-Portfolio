import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
export function ContactSection() {
  return <section id="contact" className="py-16 md:py-24 px-6 md:px-12 bg-[#121824]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-semibold mb-6">Get in Touch</h3>
            <p className="text-gray-300 mb-6">
              Have questions about our research or interested in collaboration
              opportunities? Reach out to our team.
            </p>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin size={20} className="text-blue-400 mr-3 mt-1" />
                <p className="text-gray-300">
                  123 main Avenue
                  <br />
                  Malabe, Sri Lanka
                </p>
              </div>
              <div className="flex items-center">
                <Phone size={20} className="text-blue-400 mr-3" />
                <p className="text-gray-300">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <Mail size={20} className="text-blue-400 mr-3" />
                <p className="text-gray-300">info@smartfitness-research.com</p>
              </div>
            </div>
          </div>
          <div>
            <div className="bg-[#1a2030] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Send a Message</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Name
                  </label>
                  <input type="text" id="name" className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email
                  </label>
                  <input type="email" id="email" className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea id="message" rows={4} className="w-full bg-[#0d1117] border border-gray-700 rounded-md px-3 py-2 focus:outline-none focus:border-blue-400"></textarea>
                </div>
                <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
}