import React from "react";

export const Footer = () => {
  return (
    <div className="footer_main">
      <div className="footer_grid">
        <div className="footer_item">
          <div className="card_mini">
            <div className="card_mini_text">
              <img
                style={{ width: "69px", margin: " 20px" }}
                src="/youtube.png"
                alt=""
              />
              <div style={{ textAlign: "left", height: "100%" }}>
                <h5 style={{ margin: "0", color: "white", fontWeight: "600" }}>
                  Youtube
                </h5>
                <p style={{ margin: "0", width: "100%", color: "white" }}>
                  Blog en vivo e informativos.
                </p>
              </div>
            </div>
          </div>
          <div className="card_mini2">
            <div className="card_mini_text">
              <img
                style={{ width: "69px", margin: " 20px" }}
                src="/Instagram.png"
                alt=""
              />
              <div style={{ textAlign: "left", height: "100%" }}>
                <h5 style={{ margin: "0", color: "white", fontWeight: "600" }}>
                  Instagram
                </h5>
                <p style={{ margin: "0", width: "100%", color: "white" }}>
                  Sorteos, tips y mucho mas.
                </p>
              </div>
            </div>
          </div>
          <div className="card_mini3">
            <div className="card_mini_text">
              <img
                style={{ width: "69px", margin: " 20px" }}
                src="/facebook.png"
                alt=""
              />
              <div style={{ textAlign: "left", height: "100%" }}>
                <h5 style={{ margin: "0", color: "white", fontWeight: "600" }}>
                  Facebook
                </h5>
                <p style={{ margin: "0", width: "100%", color: "white" }}>
                  Sorteos, tips, flyers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_item2">
          <div className="footer_item2_text">
            <div className="footer_item2_title">
              <h5 style={{ color: "white", fontSize: "18px" }}>
                Conecta con un profesional
              </h5>
              <h4 style={{ color: "white", margin: "0", fontWeight: "600" }}>
                Asesoramiento personalizado gratuito
              </h4>
            </div>
            <div className="card_mini4">
              <div className="card_mini_text">
                <img
                  style={{ width: "69px", margin: " 20px" }}
                  src="/wpp.png"
                  alt=""
                />
                <div style={{ textAlign: "left", height: "100%" }}>
                  <h5
                    style={{ margin: "0", color: "white", fontWeight: "600" }}
                  >
                    WhatsApp
                  </h5>
                  <p
                    style={{
                      margin: "0",
                      width: "100%",
                      color: "white",
                      fontSize: "16px",
                      lineHeight: "20px",
                    }}
                  >
                    Lunes a viernes de 10 am a 10 pm. Horario Argentina
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer_item3">
          <div className="footer_item3_text">
            <div className="footer_item3_title">
              <h5 style={{ fontSize: "18px" }}>Resolvemos a la brevedad</h5>
              <h4 style={{ margin: "0", fontWeight: "600" }}>
                Soporte tecnico especializado.
              </h4>
              <br />
              <h5 style={{ fontSize: "18px", margin: "0" }}>
                De lunes a lunes 24hs.
              </h5>
              <br />
              <img style={{ width: "105px" }} src="/herramientas.png" alt="" />
              <a className="footer_contact" href="#">
                Contactar
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
