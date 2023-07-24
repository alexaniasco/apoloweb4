import React from "react";

export const Porque = () => {
  const redirectToWhatsApp = () => {
    // Número de teléfono de WhatsApp (con código de país)
    const phoneNumber = "+541154969854";

    // Crea la URL con el número de teléfono y el mensaje (opcional)
    const url = `https://wa.me/${phoneNumber}`;

    // Abre la URL de WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  return (
    <div className="porque_main elemento-animado" id="uno">
      <div>
        <span className="porque_title">Tener tu sitio en la </span>
        <span className="colores">web</span>
        <h5 className="porque_ex">≠ tener éxito en la web.</h5>
      </div>
      {/* asd */}
      <div className="porque_flex">
        <div className="porque_grid">
          <div className="porque_card">
            <div className="porque_card_in">
              <h4>Propuesta de Valor</h4>

              <p>
                Todo proyecto tiene una característica única que lo enriquece.
                Trabajarla con un analicis previo del mercado es fundamental.
              </p>

              <img src="/p1.png" alt="" />
            </div>
          </div>
          <div className="porque_card">
            <div className="porque_card_in">
              <h4>Adaptacion</h4>
              <p>
                Ser adaptable ya no es una opción. ¡El diseño responsivo es
                tendencia! Se accesible tanto en computadoras, celulares y
                tablets.
              </p>
              <img src="/p2.png" alt="" />
            </div>
          </div>
          <div className="porque_card">
            <div className="porque_card_in">
              <h4>Optimizacion.</h4>
              <p>
                Estar preparado para las fechas clave de ventas y actualizar a
                tus clientes de las ultimas noticias te permite dar grandes
                saltos.
              </p>
              <img src="/p3.png" alt="" />
            </div>
          </div>
          <div className="porque_card">
            <div className="porque_card_in">
              <h4>Posicionamiento en Google</h4>
              <p>
                Hay una jerarquía en los sitios web que va mas allá de la mejor
                publicidad o estrategia. Su código fuente debe ser optimo y
                escalable.
              </p>
              <img src="/p4.png" alt="" />
            </div>
          </div>
          <div className="porque_card">
            <div className="porque_card_in">
              <h4>Diseño UX UI</h4>
              <p>
                El arte de crear soluciones estéticas, funcionales y
                significativas. Mejoramos la interacción humana y satisfacemos
                sus necesidades.
              </p>
              <img src="/p5.png" alt="" />
            </div>
          </div>
          <div className="porque_card">
            <div className="porque_card_in butons_action">
              <button className="buton_secundary">Saber más</button>

              <button onClick={redirectToWhatsApp} className="buton_primary">
                Consulta gratis
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
