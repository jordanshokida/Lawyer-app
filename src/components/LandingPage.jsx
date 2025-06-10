import React from 'react';

const LandingPage = () => {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <section className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold mb-4">Dr. Juan Pérez - Abogado</h1>
        <p className="text-lg max-w-xl mx-auto">
          Con más de 15 años de experiencia en derecho civil y laboral, el Dr. Juan Pérez ofrece asesoramiento profesional, personalizado y confiable para resolver tus asuntos legales.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-3">Servicios ofrecidos</h2>
        <ul className="list-disc list-inside space-y-2 text-left max-w-xl mx-auto">
          <li>Asesoría legal en derecho civil y laboral.</li>
          <li>Representación en juicios y mediaciones.</li>
          <li>Redacción y revisión de contratos.</li>
          <li>Gestión de reclamos y sanciones laborales.</li>
          <li>Resolución de conflictos y negociaciones.</li>
        </ul>
      </section>

      <section className="mb-12 max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Contacto</h2>
        <p>Podés reservar un turno para asesorarte o comunicarte por WhatsApp.</p>
        <p className="mt-2 font-semibold">Teléfono / WhatsApp: +54 9 11 1234 5678</p>
        <p>Email: contacto@juanperezabogado.com</p>
      </section>

      <section className="max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-3">Preguntas frecuentes</h2>
        <p>Para más información, visitá la sección de preguntas frecuentes en la app.</p>
      </section>
    </main>
  );
};

export default LandingPage;
