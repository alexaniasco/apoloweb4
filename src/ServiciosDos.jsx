import React from "react";

export const ServiciosDos = () => {
  return (
    <div className="serviciosDos" id="tres">
      <div className="serviciosDosHead">
        <div className="apologia">
          <div className="apologia_contenedor_title">
            <span className="tit_apologia elemento-animado colores">Apolo</span>
            <span>gía del exito</span>
            <br />
            <span className="tit_apologia"> en la </span>
            <span className="colores">web</span>
          </div>
          <p className="p2 elemento-animado">
            En ApoloWeb impulsamos tu emprendimiento con un equipo de
            desarrolladores de manera personalizada. Creamos tu pagina web con
            una estrategia previa y enfatizamos en los detalles para su
            distinción.
          </p>
        </div>

        <div className="servidiosDosImagenCont">
          <img
            className="serviciosDosImagen elemento-animado"
            id="pc"
            src="/cohete.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
