import React from "react";

const LegalLanding = () => {
  return (
    <section className="bg-[#fdf6e3] text-[#4b1c1c] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Imagen */}
        <div className="w-full md:w 1">
          <img
            src="/abogado.png"
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

