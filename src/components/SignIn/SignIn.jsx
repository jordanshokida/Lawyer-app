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