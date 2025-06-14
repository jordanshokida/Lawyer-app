/*import React from 'react';

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

export default LandingPage;*/
// src/features/landing/pages/LegalLanding.jsx
/*export default function LegalLanding() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="legal-pattern"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-gray-50">
            <path d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z" strokeWidth="0" />
          </svg>
          <rect width="100%" height="100%" strokeWidth="0" fill="url(#legal-pattern)" />
        </svg>
      </div>

      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold text-indigo-600">Estudio Jurídico</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                Servicios legales personalizados
              </h1>
              <p className="mt-6 text-xl text-gray-700">
                Asesoramiento jurídico integral en derecho laboral, civil y comercial. Brindamos atención profesional, ética y comprometida con cada cliente.
              </p>
            </div>
          </div>
        </div>

        <div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img
            className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[36rem]"
            src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?auto=format&fit=crop&q=80&w=1280"
            alt="Estudio Jurídico"
          />
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base text-gray-700 lg:max-w-lg">
              <p>
                Nuestro estudio se especializa en acompañar a trabajadores y empresas en la resolución de conflictos laborales, redacción de contratos y representación legal.
              </p>

              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-600">⚖️</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Derecho Laboral.</strong> Defensa de trabajadores, indemnizaciones, despidos, accidentes laborales.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-600">📑</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Contratos y asesoramiento legal.</strong> Redacción y análisis de contratos civiles y comerciales.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <span className="mt-1 size-5 flex-none text-indigo-600">🏛️</span>
                  <span>
                    <strong className="font-semibold text-gray-900">Litigios y representación.</strong> Representación ante tribunales laborales, civiles y comerciales.
                  </span>
                </li>
              </ul>

              <p className="mt-8">
                Brindamos atención personalizada, enfocándonos en soluciones prácticas y eficientes. Conocé tus derechos y contá con el respaldo de un profesional.
              </p>

              <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">Consultas sin cargo</h2>
              <p className="mt-6">
                Realizamos una primera consulta sin costo para que puedas recibir orientación legal de manera rápida y segura. Atendemos de forma presencial y virtual.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}*/

import React from "react";
import abogado from '/abogado.png'; // Asegurate que la ruta sea correcta

const LegalLanding = () => {
  return (
    <section className="bg-[#fdf6e3] text-[#4b1c1c] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <div className="w-full md:w 1">
          <img
            src={abogado}
            alt="Imagen del abogado"
            className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
          />
        </div>
        
        {/* Texto */}
        <div className="w-full md:w 1">
          <h1 className="text-3xl font-bold mb-4">Tu confianza, nuestra prioridad</h1>
          <p className="text-lg mb-4">
            El Estudio Jurídico del Dr. Juan Pérez brinda asesoramiento legal en diversas áreas del Derecho, comprometido con la ética y la excelencia profesional.
          </p>
          <ul className="list-disc list-inside text-md space-y-2">
            <li>Consultas legales personalizadas</li>
            <li>Representación en juicios civiles y laborales</li>
            <li>Turnos online de forma segura</li>
          </ul>
        </div>
        
        

      </div>
    </section>
  );
};

export default LegalLanding;

