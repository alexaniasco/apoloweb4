import React from "react";

export const Especialistas = () => {
  const redirectToWhatsApp = () => {
    // Número de teléfono de WhatsApp (con código de país)
    const phoneNumber = "+541154969854";

    // Crea la URL con el número de teléfono y el mensaje (opcional)
    const url = `https://wa.me/${phoneNumber}`;

    // Abre la URL de WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  return (
    <div className="especialistas_main">
      <span>Especialistas en </span>
      <span className="colores">diseño</span>
      <h5 style={{ marginLeft: "5px" }}>
        de experiencia de usuario e interfaces innovadoras
      </h5>
      <div className="especialistas_grid">
        <p>
          El diseño no se toma a la ligera. Los colores, tipografías y esencia
          de tu marca son solo uno de los pilares de lo que implica diseñar y
          este tiene un impacto profundo en cómo te conectas con tu público.
          Creamos estructuras estrategicamente para la experiencia gratificante
          de los usuarios acorde a tus necesidades.
          <br />
          <br />
          <div className="porque_card especialistas_act">
            <div className="porque_card_in butons_action">
              <button className="buton_secundary">Saber más</button>
              <button onClick={redirectToWhatsApp} className="buton_primary">
                Consulta GRATIS
              </button>
            </div>
          </div>
        </p>
        <img className="especialista" src="especialistas.svg" alt="" />
      </div>
    </div>
  );
};
