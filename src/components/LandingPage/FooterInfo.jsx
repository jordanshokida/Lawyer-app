const FooterInfo = () => {
  return (
    <footer className="bg-[#4b1c1c] text-[#fdf6e3] py-8 mt-20">
      <div className="max-w-5xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h3 className="text-xl font-semibold">Estudio Jurídico Dr. Juan Pérez</h3>
          <p>Avenida Libertador 1234, Buenos Aires, Argentina</p>
        </div>

        <div className="flex space-x-6 text-sm">
          <a
            href="https://instagram.com/juanperezabogado"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline hover:text-[#f9d4d4]"
          >
            Instagram
          </a>

          <a
            href="mailto:contacto@juanperezabogado.com"
            className="hover:underline hover:text-[#f9d4d4]"
          >
            Email
          </a>

          <a
            href="tel:+5491112345678"
            className="hover:underline hover:text-[#f9d4d4]"
          >
            Celular
          </a>
        </div>
      </div>
    </footer>
  );
};

export default FooterInfo;
