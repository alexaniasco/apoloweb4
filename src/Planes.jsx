import { React, useState } from "react";

export const Planes = () => {
  const redirectToWhatsApp = () => {
    // Número de teléfono de WhatsApp (con código de país)
    const phoneNumber = "+541154969854";

    // Crea la URL con el número de teléfono y el mensaje (opcional)
    const url = `https://wa.me/${phoneNumber}`;

    // Abre la URL de WhatsApp en una nueva pestaña
    window.open(url, "_blank");
  };

  const [section, setSection] = useState(false);

  return (
    <div className="preciosn" id="dos">
      <div className="preciosplanes">
        <div className="preciosplanes1">
          <div className="preciosplanestext1">
            <p>Pack para</p>
            <p className="emp">
              <i>EMPRENDER</i>
            </p>
            <p>en la web</p>
          </div>
          <div className="preciosplanestext">
            <p>
              Te acompañamos en todas tus etapas. Crea y maneja tu negocio con
              nuestra metodologia de trabajo.
            </p>
          </div>
          <div className="preciosplanestext">
            <p>
              <img className="preciosplanesimg" src="/preciosbtn.png" alt="" />
            </p>
            <img className="preciosplanesimg" src="/preciosilu.png" alt="" />
          </div>
        </div>
        {section == false ? (
          <div className="preciosplanes2">
            <div className="card1">
              <div className="card_flex">
                <div className="card_head">
                  <p style={{ fontSize: "22px", margin: "0" }}>ARS</p>
                  <p style={{ fontSize: "42px", margin: "0" }}>$49</p>
                  <p style={{ fontSize: "22px", margin: "0" }}>MIL</p>
                </div>
                <p
                  style={{ margin: "0", color: "whitesmoke", fontSize: "10px" }}
                >
                  unico pago
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    margin: "0",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Essential
                </p>
              </div>
              <hr />
              <div style={{ marginBottom: "20px" }}>
                <p
                  style={{
                    color: "whitesmoke",
                    margin: "10px 20px",
                    alignSelf: "stretch",
                  }}
                >
                  Ideal para emprendedores y pequeños negocios que buscan una
                  presencia en línea básica pero efectiva.
                </p>
                <button onClick={redirectToWhatsApp} className="btn-card1">
                  ¡Empieza ahora!
                </button>
              </div>
            </div>
            <div className="card2">
              <div className="card_flex">
                <div className="card_head">
                  <p style={{ fontSize: "22px", margin: "0" }}>ARS</p>
                  <p style={{ fontSize: "42px", margin: "0" }}>$79</p>
                  <p style={{ fontSize: "22px", margin: "0" }}>MIL</p>
                </div>
                <p
                  style={{ margin: "0", color: "whitesmoke", fontSize: "10px" }}
                >
                  unico pago
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    margin: "0",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Pro
                </p>
              </div>
              <hr />
              <p style={{ color: "whitesmoke", margin: "10px 20px" }}>
                Para emprendedores y negocios en crecimiento que buscan llevar
                su presencia en línea al siguiente nivel.
              </p>
              <button onClick={redirectToWhatsApp}>¡Empieza ahora!</button>
              <img className="fueguito" src="/fire.svg" alt="" />
            </div>
            <div className="card1 card3">
              <div className="card_flex">
                <div className="card_head">
                  <p style={{ fontSize: "22px", margin: "0" }}>ARS</p>
                  <p style={{ fontSize: "42px", margin: "0" }}>$149</p>
                  <p style={{ fontSize: "22px", margin: "0" }}>MIL</p>
                </div>
                <p
                  style={{ margin: "0", color: "whitesmoke", fontSize: "10px" }}
                >
                  unico pago
                </p>
                <p
                  style={{
                    fontSize: "22px",
                    margin: "0",
                    color: "white",
                    fontWeight: "500",
                  }}
                >
                  Ecommerce Pro
                </p>
              </div>
              <hr />
              <div style={{ marginBottom: "20px" }}>
                <p style={{ color: "whitesmoke", margin: "10px 20px" }}>
                  Construye una plataforma de comercio electrónico completa y
                  administra tu negocio digital de manera eficiente.
                </p>
                <button onClick={redirectToWhatsApp} className="btn-card1">
                  ¡Empieza ahora!
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="table_cont">
            <table>
              <tr>
                <th></th>
                <th>Essential</th>
                <th>Pro</th>
                <th>Ecommerce Pro</th>
              </tr>
              <tr>
                <th>Diseño atractivo</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Navegacion sencilla</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Info de contacto</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Productos/servicios</th>
                <th>Limitada</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Carrito de compras</th>
                <th>&#10060;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Pasarela de pagos</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Inventario</th>
                <th>&#10060;</th>
                <th>&#10060;</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Inicio de sesion</th>
                <th>&#10060;</th>
                <th>Limitada</th>
                <th>&#9989;</th>
              </tr>
              <tr>
                <th>Panel admin</th>
                <th>&#10060;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
              <tr className="tr_ultimo">
                <th>Promociones</th>
                <th>&#10060;</th>
                <th>&#9989;</th>
                <th>&#9989;</th>
              </tr>
            </table>
          </div>
        )}
      </div>
      <button className="btn-grid" onClick={() => setSection(!section)}>
        Más
      </button>
    </div>
  );
};
