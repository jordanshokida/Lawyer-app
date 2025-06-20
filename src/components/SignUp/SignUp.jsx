
import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../auth/supabase.auth";
import styles from "./SignUp.module.css";

export default function SignUp() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const nombreRef = useRef();
  const apellidoRef = useRef();
  const telefonoRef = useRef();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);

  const handleSignUp = async () => {
    setLoading(true);
    setError(null);
    setMessage(null);

    const email = emailRef.current.value.trim();
    const password = passwordRef.current.value;
    const nombre = nombreRef.current.value.trim();
    const apellido = apellidoRef.current.value.trim();
    const telefono = telefonoRef.current.value.trim();

    if (!email || !password || !nombre || !apellido || !telefono) {
      setError("Completá todos los campos.");
      setLoading(false);
      return;
    }

    const { data, error: signErr } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { nombre, apellido, telefono },
      },
    });

    if (signErr) {
      setError(signErr.message);
    } else {
      setMessage(
        "📩 Registrado exitosamente. Verificá tu email para activar la cuenta."
      );

      // ⏳ Espera 3 segundos y redirige a /signin
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }

    setLoading(false);
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Crear cuenta</h2>
      <input
        ref={nombreRef}
        type="text"
        placeholder="Nombre"
        className={styles.input}
      />
      <input
        ref={apellidoRef}
        type="text"
        placeholder="Apellido"
        className={styles.input}
      />
      <input
        ref={telefonoRef}
        type="tel"
        placeholder="Teléfono"
        className={styles.input}
      />
      <input
        ref={emailRef}
        type="email"
        placeholder="Email"
        className={styles.input}
      />
      <input
        ref={passwordRef}
        type="password"
        placeholder="Contraseña"
        className={styles.input}
      />
      <button
        onClick={handleSignUp}
        disabled={loading}
        className={styles.button}
      >
        {loading ? "Registrando..." : "Registrarse"}
      </button>

      {error && <p className={styles.error}>{error}</p>}
      {message && <p className={styles.success}>{message}</p>}
    </div>
  );
}


