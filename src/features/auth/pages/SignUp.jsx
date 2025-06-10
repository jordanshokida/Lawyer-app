import React, { useRef, useState } from 'react';
import { signUp } from '../services/authService';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    setMessage({ type: '', text: '' });

    if (!email || !password) {
      setMessage({ type: 'error', text: 'Completá todos los campos.' });
      return;
    }

    const { data, error } = await signUp(email, password);

    if (error) {
      setMessage({ type: 'error', text: error.message });
    } else {
      setMessage({ type: 'success', text: `Verificá tu correo: ${data.user.email}` });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={emailRef} type="email" placeholder="Email" required />
      <input ref={passwordRef} type="password" placeholder="Contraseña" required />
      <button type="submit">Registrarse</button>
      {message.text && <p className={message.type}>{message.text}</p>}
    </form>
  );
};

export default SignUp;
