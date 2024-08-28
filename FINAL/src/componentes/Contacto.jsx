import React from "react";

const Contacto = () => {
  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg mt-10">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Contáctanos
      </h2>
      <form
        action="https://formsubmit.co/felipemissakian7@gmail.com"
        method="POST"
        className="space-y-4"
      >
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="name"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="email"
          >
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label
            className="block text-gray-700 font-semibold mb-2"
            htmlFor="message"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Este campo oculto redirige al inicio de tu página después del envío */}
        <input type="hidden" name="_next" value="/" />

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contacto;
