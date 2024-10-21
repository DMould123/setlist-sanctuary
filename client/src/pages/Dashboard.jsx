import { useContext } from 'react'
import { UserContext } from '../../context/userContext'

export default function Dashboard() {
  const { user } = useContext(UserContext)

  return (
    <div>
      <h1>Welcome to Setlist Sanctuary, {user && user.name}!</h1>
    </div>
  )
}
