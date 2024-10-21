import { useContext, useState } from 'react'
import { UserContext } from '../../context/userContext'
import Sidebar from '../components/Sidebar'
import Navbar from '../components/Navbar'

export default function Dashboard() {
  const { user } = useContext(UserContext)
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
        <h1>Welcome to Setlist Sanctuary, {user && user.name}!</h1>
      </div>
    </div>
  )
}
