
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

/*import React, { useState } from "react";

export default function Turnos() {
  const [especialidad, setEspecialidad] = useState("");
  const [profesional, setProfesional] = useState("");
  const [tipoConsulta, setTipoConsulta] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");

  const especialidades = ["Cardiología", "Civil", "Laboral"];
  const profesionalesPorEspecialidad = {
    "Cardiología": ["DR DIAZ BABIO GONZALO"],
    "Civil": ["DRA JUAREZ LAURA"],
    "Laboral": ["DR PEREZ JUAN"]
  };
  const tiposConsulta = ["CONSULTA", "ASESORAMIENTO", "RECLAMO"];
  const horasDisponibles = ["09:00", "10:30", "14:30", "16:00"];

  const handleConfirmar = () => {
    if (!especialidad || !profesional || !tipoConsulta || !fecha || !hora) {
      alert("Por favor completá todos los campos.");
      return;
    }
    alert("Turno confirmado!");
    // Acá podrías guardar el turno en el estado o en una API
  };

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Sistema de turnos:</h2>

      <div className="mb-4">
        <label className="block mb-1">Especialidad</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={especialidad}
          onChange={(e) => {
            setEspecialidad(e.target.value);
            setProfesional(""); // Reset al cambiar especialidad
          }}
        >
          <option value="">Seleccioná especialidad</option>
          {especialidades.map((esp) => (
            <option key={esp} value={esp}>{esp}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Profesional</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={profesional}
          onChange={(e) => setProfesional(e.target.value)}
          disabled={!especialidad}
        >
          <option value="">Seleccioná profesional</option>
          {(profesionalesPorEspecialidad[especialidad] || []).map((prof) => (
            <option key={prof} value={prof}>{prof}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Tipo de Consulta</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={tipoConsulta}
          onChange={(e) => setTipoConsulta(e.target.value)}
        >
          <option value="">Seleccioná tipo</option>
          {tiposConsulta.map((tipo) => (
            <option key={tipo} value={tipo}>{tipo}</option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="block mb-1">Fecha</label>
        <input
          type="date"
          className="border rounded px-2 py-1 w-full"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1">Hora</label>
        <select
          className="border rounded px-2 py-1 w-full"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
        >
          <option value="">Seleccioná hora</option>
          {horasDisponibles.map(h => (
            <option key={h} value={h}>{h}</option>
          ))}
        </select>
      </div>

      <div className="flex gap-2">
        <button className="bg-red-500 text-white px-4 py-2 rounded">Cancelar</button>
        <button
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleConfirmar}
        >
          Confirmar
        </button>
      </div>

      <div className="mt-6">
        <iframe
          title="Ubicación"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.482635219301!2d-58.4332164!3d-34.6409566!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb38e6f04a4b%3A0x5969df17c9eb20ef!2sAv.%20Libertador%201234%2C%20CABA!5e0!3m2!1ses-419!2sar!4v1619029851755!5m2!1ses-419!2sar"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
}*/
