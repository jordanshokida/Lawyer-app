import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
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
    const user = supabase.auth.getUser(); 
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

export default NavBar;
