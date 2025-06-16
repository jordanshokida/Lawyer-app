import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useUserStorage } from '../../stores/useUserStorage';

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    fullName: '',
    phone: ''
  });
  
  const { signUp, loading, error } = useUserStorage();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(
        formData.email,
        formData.password,
        formData.fullName,
        formData.phone
      );
      navigate('/signin'); // Redirige al login después del registro
    } catch (err) {
      console.error("Error en registro:", err);
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded shadow">
      <h2 className="text-2xl font-bold mb-4">Registro de Cliente</h2>
      
      {/* Mostrar error si existe */}
      {error && (
        <div className="mb-4 p-3 bg-red-100 text-red-700 rounded">
          {error}
        </div>
      )}

      {/* Formulario de registro */}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Nombre Completo</label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({...formData, fullName: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Teléfono</label>
          <input
            type="tel"
            value={formData.phone}
            onChange={(e) => setFormData({...formData, phone: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Email</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Contraseña</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({...formData, password: e.target.value})}
            className="w-full p-2 border rounded"
            minLength={6}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-green-600 text-white p-2 rounded disabled:bg-gray-400"
        >
          {loading ? 'Registrando...' : 'Crear cuenta'}
        </button>
      </form>

      {/* Enlace para volver a login */}
      <div className="mt-4 text-center">
        <span className="text-gray-600">¿Ya tienes cuenta? </span>
        <Link 
          to="/signin" 
          className="text-blue-600 hover:underline"
        >
          Inicia sesión
        </Link>
      </div>
    </div>
  );
}