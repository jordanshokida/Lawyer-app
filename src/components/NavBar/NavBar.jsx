/*//Logo del estudio a la izquierda, Quienes somos, Faqs, signIn, SignUp 

import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';


import logo from '/logo.png';
import './NavBar.css';
//import { useUserStorage } from '../../stores/useUserStorage';
import { supabase } from '../../auth/supabase.auth';

const NavBar = () => {

    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false);
    //const { user, reset } = useUserStorage();
    const closeMenu = () => setMenuOpen(false);
    const linkClass = ({ isActive }) =>
        isActive ? 'NavBar__link NavBar__link--active' : 'NavBar__link';

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await supabase.auth.signOut();
            //reset();
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        } finally {
            setLoading(false); // 🔚 ocultar loader
        }
    };


    const renderGuestLinks = () => (<>
        <NavLink to="/signin" className={linkClass} onClick={closeMenu}>Sign In</NavLink>
        <NavLink to="/signup" className={linkClass} onClick={closeMenu}>Sign Up</NavLink>
    </>)


    const renderUserLinks = () => (
        <>
            <NavLink to="/profile" className={linkClass} onClick={closeMenu}>Profile</NavLink>

            <button onClick={handleSignOut} className="NavBar__link NavBar__link--button">Sign Out</button>
        </>
    )


    //const renderEmailUser = (user) => user ? user.email.split("@")[0] : "Desconocido"


    return (
        <>
            <nav className="NavBar">
                <div className="NavBar__left">
                    <img src={logo} alt="Logo Lawyer" className="NavBar__logo" />
                    <span className="NavBar__separator"> <p>&nbsp;</p> </span>
                    <span className="NavBar__brand">Estudio Jurídico</span>
                </div>

                
                
            </nav>

            {menuOpen && <div className="NavBar__backdrop" onClick={closeMenu}></div>}
        </>
    );
}

export default NavBar*/

/*import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import logo from '/logo.png';
import './NavBar.css';
import { supabase } from '../../auth/supabase.auth';

const NavBar = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    const linkClass = ({ isActive }) =>
        isActive ? 'NavBar__link NavBar__link--active' : 'NavBar__link';

    const handleSignOut = async () => {
        setLoading(true);
        try {
            await supabase.auth.signOut();
            navigate("/");
        } catch (error) {
            console.error("Error al cerrar sesión:", error.message);
        } finally {
            setLoading(false);
        }
    };

    // Suponiendo lógica temporal
    const user = supabase.auth.getUser(); // solo como referencia; usa useEffect normalmente
    const isLoggedIn = !!user;

    return (
        <>
            <nav className="NavBar">
                <div className="NavBar__left">
                    <img src={logo} alt="Logo Lawyer" className="NavBar__logo" />
                    <span className="NavBar__separator">|</span>
                    <span className="NavBar__brand">Estudio Jurídico</span>
                </div>

                <div className={`NavBar__links ${menuOpen ? 'is-active' : ''}`}>
                    {isLoggedIn ? (
                        <>
                            <NavLink to="/" className={linkClass} onClick={closeMenu}>
                                Inicio
                            </NavLink>
                            <NavLink to="/profile" className={linkClass} onClick={closeMenu}>
                                Perfil
                            </NavLink>
                            <NavLink to="/turnos" className={linkClass} onClick={closeMenu}>
                                Turnos
                            </NavLink>
                            <button
                                onClick={() => {
                                    handleSignOut();
                                    closeMenu();
                                }}
                                className="NavBar__link NavBar__link--button"
                            >
                                Cerrar sesión
                            </button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/" className={linkClass} onClick={closeMenu}>
                                Volver al inicio
                            </NavLink>
                            <NavLink to="/signin" className={linkClass} onClick={closeMenu}>
                                Ingresar
                            </NavLink>
                            <NavLink to="/signup" className={linkClass} onClick={closeMenu}>
                                Registrarse
                            </NavLink>
                        </>
                    )}

                </div>

                <div className="NavBar__right">
                    
                    <button className="NavBar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </nav >

            {menuOpen && <div className="NavBar__backdrop" onClick={closeMenu}></div>
            }
        </>
    );
};

export default NavBar;*/

// src/components/NavBar/NavBar.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserStorage } from "../../stores/useUserStorage";

export default function NavBar() {
  const { user } = useUserStorage();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOutClick = () => {
    setMobileMenuOpen(false);
    navigate("/signout");
  };

  const linkClass =
    "px-3 py-2 rounded-md text-sm font-medium hover:bg-[#fdf6e3] hover:text-[#4b1c1c]";

  return (
    <nav className="bg-[#4b1c1c] text-[#fdf6e3]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo a la izquierda */}
          <div className="flex flex-shrink-0 items-center">
            <Link to="/" className="flex items-center">
              <img className="block h-8 w-auto" src="/logo.png" alt="Logo" />
              <span className="ml-2 font-bold text-lg select-none">
                Estudio Jurídico
              </span>
            </Link>
          </div>

          {/* Links a la derecha para desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <Link to="/" className={linkClass}>
              Inicio
            </Link>

            {user && (
              <Link to="/turno" className={linkClass}>
                Turno
              </Link>
            )}

            {user?.isAdmin && (
              <Link to="/admin" className={linkClass}>
                Admin
              </Link>
            )}

            {!user && (
              <Link to="/signin" className={linkClass}>
                Iniciar sesión
              </Link>
            )}

            {user && (
              <button
                onClick={handleSignOutClick}
                className={`${linkClass} bg-transparent border-0 cursor-pointer`}
                type="button"
              >
                Cerrar sesión
              </button>
            )}
          </div>

          {/* Botón menú móvil a la derecha */}
          <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#fdf6e3]"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menu móvil */}
      {mobileMenuOpen && (
        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pt-2 pb-3">
            <Link
              to="/"
              onClick={() => setMobileMenuOpen(false)}
              className="block rounded-md px-3 py-2 text-base font-medium text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c]"
            >
              Inicio
            </Link>

            {user && (
              <Link
                to="/turno"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c]"
              >
                Turno
              </Link>
            )}

            {user?.isAdmin && (
              <Link
                to="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c]"
              >
                Admin
              </Link>
            )}

            {!user && (
              <Link
                to="/signin"
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c]"
              >
                Iniciar sesión
              </Link>
            )}

            {user && (
              <button
                onClick={handleSignOutClick}
                className="block w-full rounded-md px-3 py-2 text-base font-medium text-[#fdf6e3] hover:bg-[#fdf6e3] hover:text-[#4b1c1c] bg-transparent border-0 text-left cursor-pointer"
                type="button"
              >
                Cerrar sesión
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
