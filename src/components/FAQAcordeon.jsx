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
    <div className="max-w-2xl mx-auto p-4 mt-10">
      <h2 className="text-2xl font-bold mb-6 text-center">Preguntas frecuentes</h2>
      <div className="border rounded divide-y">
        {faqs.map((faq, i) => (
          <div key={i}>
            <button
              onClick={() => toggleIndex(i)}
              className="w-full text-left px-4 py-3 flex justify-between items-center focus:outline-none"
            >
              <span className="font-semibold">{faq.question}</span>
              <span>{openIndex === i ? '-' : '+'}</span>
            </button>
            {openIndex === i && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQAccordion;
