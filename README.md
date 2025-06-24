Lawyer App - Gestión de Turnos
Aplicación web para solicitar y gestionar turnos para un estudio jurídico. Incluye autenticación de usuarios, historial de turnos, validación de disponibilidad, y una interfaz moderna con React + TailwindCSS + Supabase.

👥 Desarrolladores
Jordán Shokida
🚀 Requisitos
Node.js (v18 o superior)
npm o yarn
🔮 Tecnologías
React + Vite
TailwindCSS
Supabase (Auth + DB)
Zustand (manejo de usuario local)
Netlify (despliegue)
🚪 Levantar el entorno local
Clonar el repositorio:
git clone https://github.com/tuusuario/lawyer-app.git
cd lawyer-app
Instalar dependencias:
npm install
# o
yarn install
Crear el archivo .env en la raíz del proyecto:
VITE_SUPABASE_URL=https://xxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJOi...
Levantar la app localmente:
npm run dev
La aplicación estará disponible en http://localhost:5173

🌐 Despliegue
La app se puede desplegar fácilmente en Netlify.

https://abogado-turnos.netlify.app

✅ Funcionalidades principales
Registro e inicio de sesión (Supabase Auth)
Solicitud de turnos con validación de disponibilidad
Cancelación de turnos
Historial de turnos por usuario
Protección de rutas
Diseño responsive
PWA: sugerencia de instalación
📊 Base de datos (Supabase)
Tabla: turnos
Campo	Tipo
id	UUID
fecha	date
hora	text
nombre	text
apellido	text
telefono	text
email	text
Políticas:
Usuarios solo pueden ver sus propios turnos
Usuarios pueden cancelar sus turnos
Cualquier usuario puede insertar un nuevo turno

