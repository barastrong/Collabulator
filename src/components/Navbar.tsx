import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar:React.FC = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/task10', label: 'Task 10' },
    { path: '/task11', label: 'Task 11' },
    { path: '/task14', label: 'Task 14' },
    { path: '/task15', label: 'Task 15' },
  ];

  return (
    <nav className="bg-gray-800 shadow-lg">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            <Link to="/" className="text-2xl font-bold text-white lg:text-3xl">
              Task 10, 11, 14, 15
            </Link>
          </div>
          <div className="hidden md:flex md:items-center">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <NavLink
                    to={link.path}
                    className={({ isActive }) =>
                      `transition-colors duration-300 transform ${
                        isActive
                          ? 'text-blue-400'
                          : 'text-gray-300 hover:text-blue-400'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;