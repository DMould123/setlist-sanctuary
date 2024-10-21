import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNavbarMenuOpen, setIsNavbarMenuOpen] = useState(false);

  const handleSidebarToggle = () => {
    if (!isNavbarMenuOpen) {
      setIsSidebarOpen(!isSidebarOpen);
    }
  };

  const handleNavbarMenuToggle = (isOpen) => {
    setIsNavbarMenuOpen(isOpen);
    if (isOpen) {
      setIsSidebarOpen(false);
    }
  };

  return (
    <div className="dashboard-container">
      <Navbar onMenuToggle={handleNavbarMenuToggle} />
      <Sidebar
        isOpen={isSidebarOpen}
        onToggle={handleSidebarToggle}
        navbarMenuOpen={isNavbarMenuOpen}
      />
      <div className={`dashboard-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
