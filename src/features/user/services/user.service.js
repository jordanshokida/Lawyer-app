// 1️⃣ user.service.js - para manejar usuarios desde Supabase
import { supabase } from "../../../auth/supabase.auth";

export const obtenerUsuarioPorId = async (id) => {
  const { data, error } = await supabase.from("usuarios").select("*").eq("id", id).single();
  if (error) throw error;
  return data;
};