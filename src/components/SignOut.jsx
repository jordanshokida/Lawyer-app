import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStorage } from '../stores/useUserStorage';
import { supabase } from '../auth/supabase.auth';

const SignOut = () => {
  const navigate = useNavigate();
  const { signOut } = useUserStorage();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        // 1. Cierra sesión en Supabase
        await supabase.auth.signOut();
        
        // 2. Limpia el estado global
        signOut();
        
        // 3. Elimina el token manualmente
        localStorage.removeItem('sb-' + supabase.supabaseUrl.split('//')[1].split('.')[0] + '-auth-token');
        
        // 4. Redirige y recarga para limpiar caché
        window.location.href = '/'; // Fuerza recarga completa
      } catch (error) {
        console.error("Error al cerrar sesión:", error);
      }
    };
    
    handleSignOut();
  }, [signOut, navigate]);

  return <div className="p-4">Cerrando sesión...</div>;
};

export default SignOut;