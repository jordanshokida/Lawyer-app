import { supabase } from '../../../auth/authClient';

export const signIn = async (email, password) => {
  return await supabase.auth.signInWithPassword({ email, password });
};

export const signUp = async (email, password) => {
  return await supabase.auth.signUp({ email, password });
};
