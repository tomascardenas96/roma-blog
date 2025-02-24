import React from "react";

function NewsLetter() {
  return (
    <section className="h-5/6  self-center grid items-center">
      <div className="h-5/6  w-full grid items-center ">
        <div>
          <h1 className="text-black text-2xl ">Newsletter</h1>
          <p className="text-black text-xs">
            Mantente informado sobre nuestras novedades, estate al dia con
            nuetro newsletter.
          </p>
        </div>

        <div className="h-40 bg-[#efefef] rounded-lg p-6 grid grid-rows-[2fr_3fr_3fr] gap-1">
          <h2 className="text-black text-xs">
            Suscribete para recibir nuestras novedades en tu E-mail.
          </h2>
          <input
            type="text"
            placeholder="Ingresa el e-mail aqui"
            className="bg-[#1B1B1E] pl-5 text-sm rounded-sm"
          />
          <input
            type="submit"
            value="Registrarme"
            className="bg-[#1B1B1E] w-2/4 text-start pl-5 text-sm rounded-sm font-semibold cursor-pointer hover:bg-[#323238] ease-in-out"
          />
        </div>
      </div>
    </section>
  );
}

export default NewsLetter;
