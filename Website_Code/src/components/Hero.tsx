import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  "/IIT-Tirupati-1.jpg",
  "/IIT-Tirupati-2.jpg",
  "/IIT-Tirupati-3.jpg",
  "/IIT-Tirupati-4.jpg"
];

const Hero = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage((currentImageIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  const changeImage = (newIndex) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentImageIndex(newIndex);
      setIsTransitioning(false);
    }, 500); // Apply blur transition effect before switching image
  };

  const nextImage = () => {
    changeImage((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    changeImage(currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1);
  };

  return (
    <section id="home" className="relative h-[600px] flex items-center overflow-hidden">
      {/* Background Image with Blur Transition */}
      <div className="absolute inset-0 z-0">
        <img
          src={images[currentImageIndex]}
          alt="Water Conservation"
          className={`w-full h-full object-cover transition-all duration-1000 ease-in-out ${isTransitioning ? "opacity-0 blur-md" : "opacity-100 blur-0"}`}
        />
        <div className="absolute inset-0 bg-blue-900/40"></div>
      </div>

      {/* Navigation Buttons */}
      <button 
        onClick={prevImage} 
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>

      <button 
        onClick={nextImage} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 text-white p-3 rounded-full hover:bg-black/70 transition"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-500 ${
              currentImageIndex === index ? 'bg-white' : 'bg-gray-400'
            }`}
          ></div>
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white text-center">
          <h1 className="text-5xl font-bold mb-6">Water Usage Monitoring</h1>
          <p className="text-xl mb-8">
            Real-time water consumption analytics and insights across IIT Tirupati campus locations. 
            Making data-driven decisions for a sustainable future.
          </p>
          <a
            href="#statistics"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
          >
            View Statistics
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
