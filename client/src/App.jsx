import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import axios from 'axios'
import { Toaster } from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import MyConcerts from './pages/MyConcerts';
import UpcomingShows from './pages/UpcomingShows';
import Search from './pages/Search';
import Settings from './pages/Settings';


axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (
    <UserContextProvider>
      <Navbar />
      <Toaster position="bottom-right" toastOptions={{ duration: 3000 }} />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path='/my-concerts' element={<MyConcerts />} />
        <Route path='/upcoming-shows' element={<UpcomingShows />} />
        <Route path='/search' element={<Search />} />
        <Route path='/settings' element={<Settings />} />
      </Routes>
    </UserContextProvider>
  )
}

export default App
