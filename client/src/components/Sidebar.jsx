import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaMusic, FaCalendarAlt, FaSearch, FaCog, FaBars, FaTimes } from 'react-icons/fa';

const Sidebar = ({ isOpen, onToggle, navbarMenuOpen }) => {
  return (
    <>
      <button
        className={`sidebar-toggle ${isOpen ? 'open' : ''} ${navbarMenuOpen ? 'hidden' : ''}`}
        onClick={onToggle}
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'} ${navbarMenuOpen ? 'hidden' : ''}`}>
        <nav className="sidebar-nav">
          <ul>
            <li>
              <Link to="/dashboard" className="sidebar-link">
                <FaHome /> <span>Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/my-concerts" className="sidebar-link">
                <FaMusic /> <span>My Concerts</span>
              </Link>
            </li>
            <li>
              <Link to="/upcoming-shows" className="sidebar-link">
                <FaCalendarAlt /> <span>Upcoming Shows</span>
              </Link>
            </li>
            <li>
              <Link to="/search" className="sidebar-link">
                <FaSearch /> <span>Search</span>
              </Link>
            </li>
            <li>
              <Link to="/settings" className="sidebar-link">
                <FaCog /> <span>Settings</span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
