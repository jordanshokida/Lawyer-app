// src/components/SignIn/SignIn.jsx
import { useNavigate, Link } from "react-router-dom";
import { useUserStorage } from "../../stores/useUserStorage";
import { supabase } from "../../auth/supabase.auth";
import { useEffect } from "react";
import styles from "./SignIn.module.css";

const SignIn = () => {
  const navigate = useNavigate();
  const setUser = useUserStorage((s) => s.setUser);
  const user = useUserStorage((s) => s.user);

  useEffect(() => {
    if (user) {
      navigate("/turno");
    }
  }, [user, navigate]);

  const handleSignIn = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Error al ingresar: " + error.message);
    } else {
      const userData = data.user;
      const isAdmin = userData.email === "abogado@miapp.com";
      setUser({ ...userData, isAdmin });
      navigate("/turno");
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Iniciar sesión</h2>
      <form onSubmit={handleSignIn}>
        <input
          className={styles.input}
          name="email"
          type="email"
          placeholder="Correo electrónico"
          required
        />
        <input
          className={styles.input}
          name="password"
          type="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit" className={styles.button}>
          Ingresar
        </button>
      </form>
      <p style={{ textAlign: "center", marginTop: "1rem" }}>
        ¿No tenés cuenta?{" "}
        <Link to="/signup" style={{ color: "#800020", fontWeight: "bold" }}>
          Registrate
        </Link>
      </p>
    </div>
  );
};

export default SignIn;


