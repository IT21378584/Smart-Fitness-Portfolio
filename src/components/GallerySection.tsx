import React, { useState, useEffect } from 'react';

export function GallerySection() {
  const images = ['/1.jpg', '/2.jpg', '/3.jpg', '/4.jpg', '/5.jpg', '/6.jpg', '/7.jpg', '/8.jpg', '/9.jpg', '/10.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section id="gallery" className="py-16 md:py-24 px-6 md:px-12 bg-[#121824]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Research Gallery
        </h2>
        <div className="flex flex-col items-center">
          <div className="relative w-full max-w-4xl">
            <div className="bg-[#1a2030] p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-center text-white">
                Conference Presentation
              </h3>

              {/* Slide container */}
              <div className="w-full h-[500px] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src={images[currentIndex]}
                  alt={`Slide ${currentIndex + 1}`}
                  className="object-contain w-full h-full rounded-lg"
                />
              </div>

              {/* Dots */}
              <div className="flex justify-center mt-4">
                <div className="flex space-x-2">
                  {images.map((_, i) => (
                    <div
                      key={i}
                      className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                        i === currentIndex ? 'bg-blue-400' : 'bg-gray-600'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}