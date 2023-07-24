import React from "react";
import "./Tarjeta.css";

const Tarjeta = ({ textoFrontal, textoTrasero, imagen, numero, gradiente }) => {
  const [hover, setHover] = React.useState(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div
      className={`tarjeta ${hover ? "hover" : ""}`}
      onMouseEnter={handleHover}
      onMouseLeave={handleHover}
    >
      <div className={`frontal metocard ${gradiente}`}>
        <h5 style={{ margin: "0", color: "white" }}>{textoFrontal}</h5>
        <img src={imagen} alt="#" />
        <h5
          style={{
            width: "100%",
            margin: "0 0 0 40px",
            fontSize: "18px",
            color: "white",
          }}
        >
          {numero}
        </h5>
      </div>
      <div
        className="trasero"
        style={{
          textAlign: "center",
          placeContent: "center",
          fontFamily: "Manrope",
        }}
      >
        <div style={{ margin: "10px" }}> {textoTrasero}</div>
      </div>
    </div>
  );
};

export default Tarjeta;
