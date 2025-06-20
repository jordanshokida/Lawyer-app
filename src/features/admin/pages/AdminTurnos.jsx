import React, { useEffect, useState } from "react";
import { useUserStorage } from "../../../stores/useUserStorage";
import { supabase } from "../../../auth/supabase.auth";

export default function AdminTurnos() {
  const { user } = useUserStorage();
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    const cargarTurnos = async () => {
      const hoy = new Date().toISOString();

      const { data, error } = await supabase
        .from("turnos")
        .select("*")
        .gte("fecha", hoy.split("T")[0])
        .order("fecha", { ascending: true });

      if (!error && data) {
        setTurnos(data);
      }
    };

    if (user?.isAdmin) cargarTurnos();
  }, [user]);

  if (!user?.isAdmin) return <p>No autorizado</p>;

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Turnos próximos</h2>
      {turnos.length === 0 ? (
        <p>No hay turnos registrados.</p>
      ) : (
        <ul className="space-y-3">
          {turnos.map((t) => (
            <li key={t.id} className="border p-3 rounded shadow">
              <p className="font-semibold">{t.fecha} - {t.hora}</p>
              <p>{t.nombre} {t.apellido} | {t.telefono}</p>
              <p className="text-sm text-gray-500">{t.email}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
