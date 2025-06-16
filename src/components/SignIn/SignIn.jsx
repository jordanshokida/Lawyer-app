/*import React, { useRef, useState } from 'react';
import styles from "./SignIn.module.css"
import { useNavigate } from 'react-router';
import { signIn } from '../../auth/auth.service';
//import { useUserStorage } from '../../stores/useUserStorage';
import { supabase } from '../../auth/supabase.auth';

export default function SignIn() {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { setUser, setFavorites } = useUserStorage()

  const handleLogin = async () => {
    setLoading(true);
    setError(null);
    try {

      const { user } = await signIn(emailRef.current.value, passwordRef.current.value);

      setUser(user)

      const { data: fav, error } = await supabase
        .from("favorites")
        .select("recipe_id")
        .eq("user_id", user.id)


      let setInitData = fav ? fav.map(f => f.recipe_id) : []

      setFavorites(setInitData)

      navigate("/profile")
    } catch (err) {
      console.error(err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>

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
        onClick={handleLogin}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Cargando...' : 'Entrar'}
      </button>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}*/

// src/components/SignIn/SignIn.jsx
/*import { useRef, useState } from 'react'
import styles from "./SignIn.module.css"
import { useNavigate } from 'react-router-dom'
import { useUserStorage } from '../../stores/useUserStorage'

export default function SignIn() {
  const emailRef = useRef('')
  const passwordRef = useRef('')
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const signIn = useUserStorage(state => state.signIn)

  const handleLogin = async () => {
    setLoading(true)
    setError(null)
    try {
      await signIn(emailRef.current.value, passwordRef.current.value)
      navigate("/turnos") // Redirigir a la página de turnos
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Login</h2>
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
        onClick={handleLogin}
        disabled={loading}
        className={styles.button}
      >
        {loading ? 'Cargando...' : 'Entrar'}
      </button>
      {error && <p className={styles.error}>{error}</p>}
    </div>
  )
}*/


// src/components/SignIn/SignIn.jsx
/*import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserStorage } from '../../stores/useUserStorage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading, error } = useUserStorage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/turnos'); // Redirige después del login
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>
    </div>
  );
}*/

// src/components/SignIn/SignIn.jsx
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom'; // Importa Link
import { useUserStorage } from '../../stores/useUserStorage';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn, loading, error } = useUserStorage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signIn(email, password);
      navigate('/turnos');
    } catch (err) {
      console.error("Error:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Iniciar Sesión</h2>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          className="w-full p-2 border rounded"
          required
        />
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? 'Cargando...' : 'Entrar'}
        </button>
      </form>

      {/* Botón de registro */}
      <div className="mt-4 text-center">
        <span className="text-gray-600">¿No tienes cuenta? </span>
        <Link 
          to="/signup" 
          className="text-blue-600 hover:underline"
        >
          Regístrate aquí
        </Link>
      </div>
    </div>
  );
}