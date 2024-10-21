import React, { useState, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { IoClose, IoMenu } from 'react-icons/io5'
import { UserContext } from '../../context/userContext'
import axios from 'axios'

const Navbar = ({ onMenuToggle }) => {
  const [showMenu, setShowMenu] = useState(false)
  const { user, setUser } = useContext(UserContext)

  const toggleMenu = () => {
    const newMenuState = !showMenu;
    setShowMenu(newMenuState);
    onMenuToggle(newMenuState);
  }

  const closeMenu = () => {
    setShowMenu(false);
    onMenuToggle(false);
  };

  const handleLogout = async () => {
    try {
      await axios.post('/logout')
      setUser(null)
      window.location.href = '/'
    } catch (error) {
      console.log('Logout failed:', error)
    }
  }

  return (
    <header className="header">
      <nav className="nav">
        <NavLink to="/" className="nav__logo">
        <img src="/src/assets/logo.png" alt="Setlist Sanctuary Logo" className="nav__logo-img" />
        </NavLink>

        {/* Toggle Button */}
        <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
          {showMenu ? <IoClose /> : <IoMenu />}
        </div>

        {/* Menu Items */}
        <div className={`nav__menu ${showMenu ? 'show-menu' : ''}`}>
          <ul className="nav__list">
            <li className="nav__item">
              <NavLink
                to="/about"
                className="nav__link"
                onClick={closeMenu}
              >
                About
              </NavLink>
            </li>
            <li className="nav__item">
              <NavLink
                to="/contact"
                className="nav__link"
                onClick={closeMenu}
              >
                Contact
              </NavLink>
            </li>
            {user ? (
              <li className="nav__item">
                <NavLink
                  to="/"
                  className="nav__link nav__logout-btn"
                  onClick={() => {
                    closeMenu();
                    handleLogout();
                  }}
                >
                  Logout
                </NavLink>
              </li>
            ) : (
              <>
                <li className="nav__item">
                  <NavLink
                    to="/"
                    className="nav__link"
                    onClick={closeMenu}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav__item">
                  <NavLink
                    to="/register"
                    className="nav__link"
                    onClick={closeMenu}
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
