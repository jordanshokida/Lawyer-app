/*import { supabase } from "./supabase.auth"

export const signIn = async (email, password) => {
    const { data: user, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) throw Error(error.message)
    return user
}

export const signUp = async (email, password) => {
    const { data, error } = await supabase.auth.signUp({
        email, password
    })

    if (error) throw Error(error.message)

    return data
}*/



import { supabase } from './supabase.auth';

export const authService = {
async signUp(email, password, userData) {
    const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
        data: {
        full_name: userData.fullName,
        phone: userData.phone
        }
    }
    });
    
    if (error) throw new Error(error.message);
    return data;
},

async signIn(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password
    });
    
    if (error) throw new Error('Credenciales inválidas. Por favor verifica tus datos.');
    return data;
}
};