import React, { useState, useEffect } from 'react';
import bedroom4 from '../images/bedrooms/bedroom4.jpg';
import bedroom2 from '../images/bedrooms/bedroom2.jpg';
import bedroom3 from '../images/bedrooms/bedroom3.jpg';

export default function OpeningScreen() {
  const images = [
    bedroom4,
    bedroom2,
    bedroom3,
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 6000); // Slide to the next image every minute

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [images.length]);

  return (
    <div className="flex font-luxjost justify-center items-center relative h-50">
      <div></div>
      <img src={images[currentImageIndex]} alt={`Image ${currentImageIndex}`} className="w-full object-cover h-[450px]" />
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50">
        <h1 className="text-white text-2xl md:text-4xl lg:text-6xl font-bold tracking-wider">NYATTA HOMES</h1>
      </div>
    </div>
  );
}
