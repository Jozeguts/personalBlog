import React from 'react';
import ContactPage from './ContactPage';
function Footer() {
  return (
    <footer className="bg-gray-200 text-center text-xs p-3 absolute bottom-0 w-full">
      <div className="container mx-auto">
        <p>&copy; {new Date().getFullYear()} Joseph Oguti Blog. All rights reserved.</p>
        
      </div>


    </footer>
  );
}

export default Footer;
