//Informacion del estudio del abogado con links de instagram, mail de contacto, Celular

import React from 'react';

const FooterInfo = () => {
  return (
    <footer className="bg-gray-800 text-white py-6 mt-10">
      <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-semibold">Estudio Jurídico Dr. Juan Pérez</h3>
          <p>Avenida Libertador 1234, Buenos Aires, Argentina</p>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://instagram.com/juanperezabogado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400"
          >
            Instagram
          </a>

          <a href="mailto:contacto@juanperezabogado.com" className="hover:text-gray-400">
            Email
          </a>

          <a href="tel:+5491112345678" className="hover:text-gray-400">
            Celular
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;