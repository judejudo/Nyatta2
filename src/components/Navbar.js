import logo from '../images/logo/nyatta_logo2.png';
import React, { useState, useEffect } from 'react';
export default function Navbar() {
  const [isBlurred, setIsBlurred] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust this value based on when you want the blur to start
        setIsBlurred(true);
      } else {
        setIsBlurred(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed font-luxjost flex z-20 w-full transition-all duration-300 ${isBlurred ? 'backdrop-blur bg-white/50 text-black' : 'bg-transparent text-white'}`}>
      <img src={logo} alt="Logo" className="h-[100px]" />
      <ul className="flex space-x-9 items-center px-20 ml-auto font-medium">
        <li><a className='hover:text-orange-500' href="#home">Home</a></li>
        <li><a className='hover:text-orange-500' href="#hotelRooms">Hotel Rooms</a></li>
        <li><a className='hover:text-orange-500' href="#aboutUs">About Us</a></li>
        <li><a className='hover:text-orange-500' href="#gallery">Gallery</a></li>
        <li><a className='hover:text-orange-500' href="#contactUs">Contact Us</a></li>
      </ul>
    </nav>
  );
}