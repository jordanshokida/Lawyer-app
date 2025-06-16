import { create } from 'zustand';
import { supabase } from '../auth/supabase.auth';

export const useUserStorage = create((set, get) => ({
  user: null,
  loading: false,
  error: null,

  // Inicializar sesión (ejecutar al cargar la app)
  initializeSession: async () => {
    set({ loading: true });
    try {
      const { data: { session } } = await supabase.auth.getSession();
      set({ user: session?.user || null });
    } catch (err) {
      set({ error: err.message });
    } finally {
      set({ loading: false });
    }
  },

  // Registro de usuario
  signUp: async (email, password, fullName, phone) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName, phone }
        }
      });
      if (error) throw error;
      set({ user: data.user });
      return data.user;
    } catch (err) {
      set({ error: err.message });
      throw err;
    } finally {
      set({ loading: false });
    }
  },

  // Inicio de sesión
  signIn: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      set({ user: data.user });
      return data.user;
    } catch (err) {
      set({ error: 'Credenciales incorrectas. Intenta nuevamente.' });
      throw err;
    } finally {
      set({ loading: false });
    }
  },


  // src/stores/useUserStorage.js
signOut: async () => {
  try {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
    
    set({ 
      user: null,
      loading: false,
      error: null
    });
  } catch (err) {
    set({ error: err.message });
  }
}
}));