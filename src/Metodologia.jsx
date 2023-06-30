import React from "react";

export const Metodologia = () => {
  return (
    <div className="metodologia_cont">
      <h2 style={{     color: "rgb(41, 41, 41)", marginLeft: "100px",marginBottom:"0",fontSize:"52px" }}>
        Nuestra metodologia
      </h2>
      <h4 style={{  color: "rgb(41, 41, 41)", marginLeft: "100px",marginTop:"0",marginBottom:"80px" }}>
        {" "}
        Es una oportunidad para tu negocio
      </h4>
      <div className="metocard_cont">
        <div className="metocard">
          <h5>Solicitud</h5>
          <img src="/meto1.svg" alt="" />
          <h5>1</h5>
        </div>
        <div className="metocard2">
          <h5>Proyectamos</h5>
          <img src="/meto2.svg" alt="" />
          <h5>2</h5>
        </div>
        <div className="metocard3">
          <h5>Prototipamos</h5>
          <img src="/meto3.svg" alt="" />
          <h5>3</h5>
        </div>
        <div className="metocard4">
          <h5>Creamos</h5>
          <img src="/meto4.svg" alt="" />
          <h5>4</h5>
        </div>
        <div className="metocard5">
          <h5>Pago</h5>
          <img src="/meto5.svg" alt="" />
          <h5>5</h5>
        </div>
      </div>
      <div className="actualizaciones_cont">
        <div className="actualizaciones">
            <h3>Mantenimiento y actualizaciones</h3>
        </div>
      </div>
    </div>
  );
};
