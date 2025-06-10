import React, { useRef, useState } from 'react';
import { signIn } from '../services/authService';

const SignIn = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState({ type: '', text: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async e => {
    e.preventDefault();
    setMessage({ type: '', text: '' });

    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    if (!email || !password) {
      setMessage({ type: 'error', text: 'Completá todos los campos.' });
      return;
    }

    setLoading(true);
    const { data, error } = await signIn(email, password);
    setLoading(false);

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: `Bienvenido ${data.user.email}` });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" placeholder="Email" required />
      <input ref={passwordRef} type="password" placeholder="Contraseña" required />
      <button type="submit">{loading ? 'Cargando...' : 'Ingresar'}</button>
      {message.text && <p className={message.type}>{message.text}</p>}
    </form>
  );
};

export default SignIn;
