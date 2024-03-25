// Footer.jsx

import React from 'react';


const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="list-none p-0 m-0">
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Contact</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">I want to</h4>
            <ul className="list-none p-0 m-0">
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Book Appoinment</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Find a Doctor</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300"> Browse Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Find a Location</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">Support</h4>
            <ul className="list-none p-0 m-0">
              <li><a href="/contact" className="text-gray-300 hover:text-gray-500 transition duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-gray-500 transition duration-300">Donate</a></li>
    
            </ul>
          </div>
     
        </div>
      </div>
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500">&copy; 2024 Your Website. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
