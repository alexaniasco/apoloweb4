import React from "react";

export const Extras = () => {
  return (
    <section className="extra">
      <div className="extra_grid">
        <div className="extra_card scale" style={{ backgroundColor: "red" }}>
          <img src="/xx3.png"></img>
          <div className="extra_card_title">
            <h4>Introduccion al DISEÑO UX / UI </h4>
          </div>
        </div>
        <div className="extra_card2 scale" style={{ backgroundColor: "red" }}>
          <img src="/xx2.png"></img>
          <div className="extra_card_title">
            <h4>Sorteo pagina web ESSENTIAL</h4>
          </div>
        </div>
        <div className="extra_card3 scale" style={{ backgroundColor: "red" }}>
          <img src="/xx1.png"></img>
          <div className="extra_card_title">
            <h4>Equipo de testing sitio web</h4>
          </div>
        </div>
      </div>
    </section>
  );
};
