import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-600 p-4">
      <div className="container mx-auto flex items-center">
        <h1 className="text-white text-lg font-bold mr-8">CRUD</h1>
        <div className="flex space-x-4 mx-auto">
          <Link to="/" className="text-gray-300 hover:text-white transition duration-300">
            Home
          </Link>
          <Link to="/addemployee" className="text-gray-300 hover:text-white transition duration-300">
            Add Employee
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
