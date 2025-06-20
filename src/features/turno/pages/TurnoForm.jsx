import React, { useEffect, useState } from "react";
import { useUserStorage } from "../../../stores/useUserStorage";
import {
  crearTurno,
  obtenerTurnosUsuario,
  obtenerHorasOcupadas,
  turnoOcupado,
  cancelarTurno,
} from "../services/TurnoService";
import { useNavigate } from "react-router-dom";

export default function TurnoForm() {
  const { user } = useUserStorage();
  const navigate = useNavigate();

  const [turnos, setTurnos] = useState([]);
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [horasDisponibles, setHorasDisponibles] = useState([]);
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    telefono: "",
    email: user?.email || "",
  });

  const [mensaje, setMensaje] = useState("");

  useEffect(() => {
    if (!user) {
      navigate("/signin");
      return;
    }

    const cargarTurnos = async () => {
      const data = await obtenerTurnosUsuario(user.email);
      setTurnos(data);
    };

    cargarTurnos();
  }, [user, navigate]);

  const manejarCambioFecha = async (e) => {
    const nuevaFecha = e.target.value;
    setFecha(nuevaFecha);
    setHora("");

    const horasOcupadas = await obtenerHorasOcupadas(nuevaFecha);
    const todasLasHoras = ["10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
    const disponibles = todasLasHoras.filter((h) => !horasOcupadas.includes(h));
    setHorasDisponibles(disponibles);
  };

  const manejarInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const pedirTurno = async (e) => {
    e.preventDefault();
    setMensaje("");

    const campos = [fecha, hora, formData.nombre, formData.apellido, formData.email, formData.telefono];
    if (campos.some((campo) => campo.trim() === "")) {
      setMensaje("Todos los campos son obligatorios.");
      return;
    }

    const ocupado = await turnoOcupado(fecha, hora);
    if (ocupado) {
      setMensaje("Ese turno ya fue reservado. Elegí otro.");
      return;
    }

    const { error } = await crearTurno({
      fecha,
      hora,
      nombre: formData.nombre,
      apellido: formData.apellido,
      telefono: formData.telefono,
      email: formData.email,
    });

    if (error) {
      console.error("Error al pedir turno:", error.message);
      setMensaje("Hubo un error al guardar el turno.");
    } else {
      setMensaje("Turno reservado correctamente.");
      setFormData({ nombre: "", apellido: "", telefono: "", email: user.email });
      setFecha("");
      setHora("");
      const nuevosTurnos = await obtenerTurnosUsuario(user.email);
      setTurnos(nuevosTurnos);
    }
  };
  

  const manejarCancelar = async (turnoId) => {
    console.log("Intentando borrar turno con id:", turnoId);
    setMensaje("");
    try {
      const { error } = await cancelarTurno(turnoId);
      if (error) {
        console.error("Error al cancelar turno:", error.message);
        setMensaje("Error al cancelar el turno.");
        return;
      }
      // Actualizar listado de turnos luego de borrar
      const nuevosTurnos = await obtenerTurnosUsuario(user.email);
      setTurnos(nuevosTurnos);
      setMensaje("Turno cancelado correctamente.");
    } catch (e) {
      console.error("Error inesperado al cancelar turno:", e);
      setMensaje("Error inesperado al cancelar turno.");
    }
  };
  

  const hoy = new Date().toISOString().split("T")[0];

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Reservar turno</h2>

      <form onSubmit={pedirTurno} className="space-y-4">
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={formData.nombre}
          onChange={manejarInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="apellido"
          placeholder="Apellido"
          value={formData.apellido}
          onChange={manejarInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={manejarInput}
          className="w-full border p-2 rounded"
        />
        <input
          type="tel"
          name="telefono"
          placeholder="Teléfono"
          value={formData.telefono}
          onChange={manejarInput}
          className="w-full border p-2 rounded"
        />

        <input
          type="date"
          name="fecha"
          value={fecha}
          onChange={manejarCambioFecha}
          min={hoy}
          className="w-full border p-2 rounded"
        />

        <select
          name="hora"
          value={hora}
          onChange={(e) => setHora(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Seleccioná una hora</option>
          {horasDisponibles.map((h) => (
            <option key={h} value={h}>
              {h}
            </option>
          ))}
        </select>

        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Confirmar turno
        </button>
      </form>

      {mensaje && <p className="mt-4 text-red-600">{mensaje}</p>}

      <hr className="my-6" />
      <h3 className="text-lg font-semibold mb-2">Mis turnos</h3>

      {turnos.length === 0 ? (
        <p>No tenés turnos reservados.</p>
      ) : (
        <ul className="space-y-2">
{turnos.map((turno) => (
  <li
    key={turno.id}
    className="border p-2 rounded flex justify-between items-center"
  >
    <div>
      <strong>{turno.fecha}</strong> - {turno.hora} hs
      <br />
      {turno.nombre} {turno.apellido} - {turno.telefono}
    </div>
    <button
      onClick={() => manejarCancelar(turno.id)}
      className="text-red-600 hover:underline"
    >
      Cancelar
    </button>
  </li>
))}

        </ul>
      )}
    </div>
  );
}
