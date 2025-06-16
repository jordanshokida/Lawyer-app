import React, { useState } from "react";

export default function Turnos() {
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [turnos, setTurnos] = useState([]);

  const horasDisponibles = [
    "09:00", "10:00", "11:00",
    "14:00", "15:00", "16:00"
  ];

  const pedirTurno = () => {
  if (!fecha || !hora) return alert("Por favor, seleccioná fecha y hora");

  // Validar que la fecha no sea anterior a hoy
  const hoy = new Date();
  const fechaSeleccionada = new Date(fecha);
  // Poner ambas fechas a las 00:00:00 para comparar solo días
  hoy.setHours(0, 0, 0, 0);
  fechaSeleccionada.setHours(0, 0, 0, 0);

  if (fechaSeleccionada < hoy) {
    return alert("No se puede seleccionar una fecha anterior a hoy.");
  }

  const turnoExiste = turnos.some(turno => turno.fecha === fecha && turno.hora === hora);
  if (turnoExiste) {
    return alert("Ya hay un turno reservado para esa fecha y hora.");
  }

  const nuevoTurno = { fecha, hora, id: Date.now() };
  setTurnos([...turnos, nuevoTurno]);
  setFecha("");
  setHora("");
};

  const cancelarTurno = (id) => {
    setTurnos(turnos.filter(turno => turno.id !== id));
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Pedir Turno</h2>
      <div className="mb-4">
        <label className="block mb-1">Fecha:</label>
        <input
          type="date"
          className="border rounded px-2 py-1 w-full"
          value={fecha}
          onChange={e => setFecha(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Hora:</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={hora}
          onChange={e => setHora(e.target.value)}
        >
          <option value="">Seleccioná hora</option>
          {horasDisponibles.map(h => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      <button
        onClick={pedirTurno}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Pedir Turno
      </button>

      <h3 className="text-lg font-semibold mt-6 mb-2">Turnos próximos</h3>
      {turnos.length === 0 && <p>No hay turnos pedidos</p>}

      <ul>
        {turnos.map(({ id, fecha, hora }) => (
          <li key={id} className="flex justify-between items-center border p-2 rounded mb-2">
            <span>{fecha} - {hora}</span>
            <button
              onClick={() => cancelarTurno(id)}
              className="text-red-600 hover:text-red-800"
            >
              Cancelar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
