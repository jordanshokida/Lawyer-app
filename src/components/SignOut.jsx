import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../auth/supabase.auth";
import { useUserStorage } from "../stores/useUserStorage";

const SignOut = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logoutAndRedirect = async () => {
      await supabase.auth.signOut();
      useUserStorage.getState().reset();
      localStorage.removeItem("user-storage");
      window.location.href = "/signin";
    };
    logoutAndRedirect();
  }, []);

  return (
    <div className="text-center mt-20">
      <p className="text-lg">Cerrando sesión...</p>
    </div>
  );
};

export default SignOut;

