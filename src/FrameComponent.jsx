import "./FrameComponent.css";
import Tarjeta from "./Tarjeta";
const FrameComponent = () => {
  return (
    <div className="component-parent">
      <Tarjeta
        gradiente={"gradiente5"}
        textoFrontal={"Creamos"}
        imagen={"/meto4.svg"}
        numero={4}
        textoTrasero={
          "Una vez finalizada la etapa de prototipado con tu aprobacion, antes de replicarlo en codigo y subirlo a la web se efectua el pago via tranferencia o deposito."
        }
      ></Tarjeta>
      <Tarjeta
        gradiente={"gradiente1"}
        textoFrontal={"Creaasmos"}
        imagen={"/meto2.svg"}
        numero={2}
        textoTrasero={
          "Una vez finalizada la etapa de prototipado con tu aprobacion, antes de replicarlo en codigo y subirlo a la web se efectua el pago via tranferencia o deposito."
        }
      ></Tarjeta>
    </div>
  );
};

export default FrameComponent;
