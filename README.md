Propósito del Proyecto: Lawyer-App
Esta es una aplicación web desarrollada con ReactJS que permite a clientes reservar turnos con un abogado, gestionar su historial y acceder a funcionalidades administrativas para la gestión de turnos.

¿De qué se trata esta app?
Cualquier usuario puede:

Consultar información pública sobre el abogado y su estudio jurídico.

Contactar vía formulario o WhatsApp con el abogado.

Si está registrado y logueado:

Reservar turnos en horarios disponibles.

Visualizar su historial de turnos.

Recibir confirmación vía email al reservar un turno.

Si es administrador (el abogado o personal autorizado):

Visualizar todos los turnos próximos.

Cancelar turnos.

Tecnologías y prácticas que se usan en esta app:
Autenticación real con Supabase.

Gestión de estado con Zustand.

Manejo de base de datos y almacenamiento remoto (Supabase Postgres).

Validación y control de horarios ocupados.

Envío de emails de confirmación con EmailJS.

Diseño modular con React y TailwindCSS.

Arquitectura basada en features y separación de lógica y componentes.

Progressive Web App (PWA) para mejorar experiencia móvil.

Navegación protegida y control de roles (usuario vs admin).


Funcionalidades clave
Auth: Login y registro con Supabase Auth.

Turnos: Reservar turnos con validación de horarios ocupados.

Historial: Visualizar turnos previos del usuario.

Admin: Visualizar y cancelar turnos próximos.

UI: Navegación responsiva, menú hamburguesa, colores corporativos.

Protección: Rutas protegidas y roles para admin/usuario.
