import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/task10', label: 'Task 10' },
    { path: '/task11', label: 'Task 11' },
    { path: '/task14', label: 'Task 14' },
    { path: '/task15', label: 'Task 15' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/70 backdrop-blur-lg">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div>
          <Link to="/" className="text-2xl font-bold text-slate-800">
            Task Collabulator
          </Link>
        </div>
        <div className="hidden md:flex md:items-center">
          <ul className="flex items-center space-x-2">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-slate-900 text-white'
                        : 'text-slate-600 hover:bg-slate-200 hover:text-slate-900'
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
    </nav>
  );
};

export default Navbar;