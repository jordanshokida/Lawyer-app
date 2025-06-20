import { supabase } from "../../../auth/supabase.auth";

// Insertar turno sin userId, con datos personales en la tabla turnos
export async function crearTurno({ fecha, hora, nombre, apellido, telefono, email }) {
  const { data, error } = await supabase.from("turnos").insert([
    { fecha, hora, nombre, apellido, telefono, email }
  ]);
  return { data, error };
}

// Obtener turnos por email
export async function obtenerTurnosUsuario(email) {
  const { data, error } = await supabase
    .from("turnos")
    .select("*")
    .eq("email", email)
    .order("fecha", { ascending: true });

  if (error) {
    console.error("Error al obtener turnos del usuario:", error.message);
    return [];
  }
  return data;
}

// Verificar si un turno ya está ocupado
export async function turnoOcupado(fecha, hora) {
  const { data, error } = await supabase
    .from("turnos")
    .select("id")
    .eq("fecha", fecha)
    .eq("hora", hora)
    .maybeSingle();

  if (error) {
    console.error("Error al verificar turno ocupado:", error.message);
    return false;
  }
  return !!data; // true si existe turno
}

// Obtener horas ocupadas para una fecha
export async function obtenerHorasOcupadas(fecha) {
  const { data, error } = await supabase
    .from("turnos")
    .select("hora")
    .eq("fecha", fecha);

  if (error) {
    console.error("Error al obtener horas ocupadas:", error.message);
    return [];
  }
  return data.map((t) => t.hora);
}

// Cancelar turno por id (no filtrar por userId ya que no hay userId)
export async function cancelarTurno(turnoId) {
  const { data, error } = await supabase
    .from("turnos")
    .delete()
    .eq("id", turnoId);
  if(error) console.error("Supabase error en cancelarTurno:", error.message);
  return { data, error };
}







