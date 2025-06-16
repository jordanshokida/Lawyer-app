import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useUserStorage } from '../stores/useUserStorage';
import Router from './Router';
import NavBar from '../components/NavBar/NavBar';
import './App.css';

const App = () => {
  const initializeSession = useUserStorage((state) => state.initializeSession);

  useEffect(() => {
    initializeSession(); // Verifica la sesión al cargar la app
  }, [initializeSession]);

  return (
    <div className="bg-[#fdf6e3] min-h-screen flex flex-col">
      <BrowserRouter>
        <NavBar />
        <div className="flex-grow">
          <Router />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
