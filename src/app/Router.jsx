import React from 'react'
import { Route, Routes } from 'react-router'
import LandingPage from '../components/LandingPage/LandingPage'
import SignIn from '../components/SignIn/SignIn'
import SignOut from '../components/SignOut'
import Profile from '../features/user/pages/Profile'
import SignUp from '../components/SignUp/SignUp'
import ProtectedRoute from '../components/ProtectedRoute'
import NoMatch from '../components/NoMatch'
import TurnoForm from "../features/turnos/pages/TurnoForm"
import FooterInfo from "../components/LandingPage/FooterInfo" 

const Router = () => {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/signout' element={<SignOut />} />
        <Route path="/turnos" element={<TurnoForm />} />
        <Route path='*' element={<NoMatch />} />
      </Routes>
      <FooterInfo /> 
    </>
  )
}

export default Router