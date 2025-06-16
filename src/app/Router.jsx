import { Routes, Route } from 'react-router-dom'
import LandingPage from '../components/LandingPage/LandingPage'
import SignIn from '../components/SignIn/SignIn'
import SignUp from '../components/SignUp/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
import TurnoForm from "../features/turnos/pages/TurnoForm"
import FooterInfo from "../components/LandingPage/FooterInfo"
import SignOut from "../components/SignOut";
const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        
        {/* Ruta protegida */}
        <Route path="/turnos" element={
          <ProtectedRoute>
            <TurnoForm />
          </ProtectedRoute>
        } />
        <Route path="/signout" element={<SignOut />} />
      </Routes>
      <FooterInfo />
    </>
  )
}

export default Router