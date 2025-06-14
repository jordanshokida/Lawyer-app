// src/components/LandingPage/FAQAccordion.jsx
import React, { useState } from 'react';

const faqs = [
  {
    question: '¿Cuáles son los horarios disponibles para pedir turnos?',
    answer: 'Los turnos se pueden reservar de lunes a viernes, entre las 10:00 y 18:00 horas, en intervalos de 30 minutos.',
  },
  {
    question: '¿Cómo puedo modificar un turno reservado?',
    answer: 'Por el momento, para modificar un turno deberás contactarte directamente vía WhatsApp o mail.',
  },
  {
    question: '¿Dónde se guardan mis datos personales?',
    answer: 'Tus datos están seguros y se almacenan en nuestra base de datos protegida con Supabase.',
  },
];

const FAQAccordion = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-[#fdf6e3] rounded-xl shadow-md mt-10">
      <h2 className="text-3xl font-bold text-center text-[#4b1c1c] mb-8">Preguntas frecuentes</h2>
      <div className="divide-y divide-[#cbbaba]">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => toggleIndex(i)}
              className="w-full text-left px-4 py-4 flex justify-between items-center focus:outline-none text-[#4b1c1c] hover:bg-[#faebd7] rounded-md"
            >
              <span className="font-medium text-lg">{faq.question}</span>
              <span className="text-xl">{openIndex === i ? '-' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="px-6 pb-4 text-[#5a2e2e] bg-[#fef9f3] rounded-b-md">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;

