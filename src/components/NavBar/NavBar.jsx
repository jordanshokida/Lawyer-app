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

import { useState } from 'react';
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
                            <NavLink to="/profile" className={linkClass} onClick={closeMenu}>Perfil</NavLink>
                            <button onClick={handleSignOut} className="NavBar__link NavBar__link--button">Cerrar sesión</button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/signin" className={linkClass} onClick={closeMenu}>Ingresar</NavLink>
                            <NavLink to="/signup" className={linkClass} onClick={closeMenu}>Registrarse</NavLink>
                        </>
                    )}
                </div>

                <div className="NavBar__right">
                    {/* <span className="NavBar__user">{user?.email.split('@')[0]}</span> */}
                    <button className="NavBar__toggle" onClick={() => setMenuOpen(!menuOpen)}>
                        ☰
                    </button>
                </div>
            </nav>

            {menuOpen && <div className="NavBar__backdrop" onClick={closeMenu}></div>}
        </>
    );
};

export default NavBar;
