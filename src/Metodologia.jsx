import React from "react";
import Tarjeta from "./Tarjeta";

export const Metodologia = () => {
  const [hover, setHover] = React.useState(true);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <div className="metodologia_cont">
      <div style={{ marginLeft: "100px", marginTop: "40px" }}>
        <span>Nuestra </span>
        <span className="colores">metodo</span>
        <span>logia</span>
      </div>
      <h5
        style={{
          color: "rgb(41, 41, 41)",
          marginLeft: "105px",
          marginTop: "0",
          marginBottom: "45px",
        }}
      >
        {" "}
        Es una oportunidad para tu negocio
      </h5>
      <div className="metocard_cont">
        <Tarjeta
          numero={1}
          gradiente={"gradiente1"}
          imagen={"/meto1.svg"}
          textoFrontal={"Solicitud"}
          textoTrasero={
            "Establecemos una comunicación cercana con nuestro cliente para comprender en profundidad los productos o servicios con los que vamos a trabajar."
          }
        ></Tarjeta>
        <Tarjeta
          numero={2}
          gradiente={"gradiente2"}
          imagen={"/meto2.svg"}
          textoFrontal={"Proyectamos"}
          textoTrasero={
            "Elaboramos una propuesta de valor en base al  mercado y creamos la estrategia con objetivos fundamentados  para su distingcion y competitividad."
          }
        ></Tarjeta>
        <Tarjeta
          numero={3}
          gradiente={"gradiente3"}
          imagen={"/meto3.svg"}
          textoFrontal={"Prototipamos"}
          textoTrasero={
            "Diseñamos el boceto de su pagina web  y testeamos la navegacion del usuario para asegurar su total atencion y maximizar el consumo del producto."
          }
        ></Tarjeta>
        <Tarjeta
          numero={4}
          gradiente={"gradiente4"}
          imagen={"/meto5.svg"}
          textoFrontal={"Pago"}
          textoTrasero={
            "Una vez finalizada la etapa de prototipado con tu aprobacion, antes de replicarlo en codigo y subirlo a la web se efectua el pago via tranferencia o deposito."
          }
        ></Tarjeta>
        <Tarjeta
          numero={5}
          gradiente={"gradiente5"}
          imagen={"/meto4.svg"}
          textoFrontal={"Creamos"}
          textoTrasero={
            "Desarrollamos tu sitio web con lenguajes modernos que optimizan tu SEO y lo adaptamos a todos los dispositivos para tus clientes Dominio a eleccion."
          }
        ></Tarjeta>
      </div>
      <div className="actualizaciones_cont elemento-animado">
        <div className="actualizaciones">
          <div className="actualizaciones2">
            <h5>Mantenimiento y actualizaciones</h5>
            <p>
              No solo garantizamos su rendimiento , también las preparamos para
              fechas clave de ventas, como el Cyber Monday, Black Friday,
              liquidaciones u otras promociones destacadas. De esta manera,
              ayudamos a nuestros clientes a aprovechar al máximo estas
              oportunidades aumentando su visibilidad, atractivo y potencial de
              ventas en momentos estratégicos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
