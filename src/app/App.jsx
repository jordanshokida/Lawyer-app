import "./App.css";
import Router from "./Router";
import NavBar from "../components/NavBar/NavBar";
import { useEffect } from "react";
import { supabase } from "../auth/supabase.auth";
import { useUserStorage } from "../stores/useUserStorage";

const App = () => {
  const setUser = useUserStorage((state) => state.setUser);
  const reset = useUserStorage((state) => state.reset);

  useEffect(() => {
    const cargarSesionActual = async () => {
      const { data } = await supabase.auth.getSession();
      const sessionUser = data?.session?.user;
      if (sessionUser) {
        setUser(sessionUser); // ✅ Limpio
      }
    };
  
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        if (event === "SIGNED_IN" && session?.user) {
          setUser(session.user); // ✅ Limpio
        }
  
        if (event === "SIGNED_OUT") {
          reset();
        }
      }
    );
  
    cargarSesionActual();
  
    return () => listener?.subscription?.unsubscribe();
  }, [setUser, reset]);
  

  return (
    <div className="bg-[#fdf6e3] min-h-screen flex flex-col">
      <NavBar />
      <div className="flex-grow">
        <Router />
      </div>
    </div>
  );
};

export default App;

