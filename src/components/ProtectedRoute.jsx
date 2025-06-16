import { Navigate } from 'react-router-dom'
import { useUserStorage } from '../stores/useUserStorage'

export default function ProtectedRoute({ children }) {
  const user = useUserStorage(state => state.user)
  const loading = useUserStorage(state => state.loading)

  if (loading) return <div>Cargando...</div>
  if (!user) return <Navigate to="/signin" replace />
  
  return children
}
