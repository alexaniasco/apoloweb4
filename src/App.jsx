import { useState, useEffect } from "react";

import "./App.css";
import { Planes } from "./Planes";
import { ServiciosDos } from "./ServiciosDos";
import { Porque } from "./Porque";
import { Preguntas } from "./Preguntas";
import { Futer } from "./Futer";


function App() {

  
  const [navbarColor, setNavbarColor] = useState("transparent");
  const [textColor, setTextColor] = useState("white");
  const [sombra, setSombra] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > 0) {
        setNavbarColor("#F5F4F4");
        setTextColor("black");
        setSombra(
          " 0px 2px 4px rgba(0, 0, 0, 0.2)"
        ); /* Cambia a tu color deseado */
      } else {
        setNavbarColor("transparent");
        setTextColor("white");
        setSombra(""); /* Vuelve al color de fondo inicial */
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);



  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

  const delay = 200; // Retardo entre cada letra (en milisegundos)
  const fullText = "En tu própia página web.";

  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setText(text + fullText.charAt(index));
        setIndex(index + 1);
      }, delay);
    } else {
      // Reiniciar el proceso de escritura
      setTimeout(() => {
        setText("");
        setIndex(0);
      }, delay * fullText.length);
    }
  }, [index, text]);


  const parallax = (e) => {
    document.querySelectorAll(".objet").forEach(function (move) {
      var moving_value = move.getAttribute("data-value");
      var x = (e.clientX * moving_value) / 300;
      var y = (e.clientY * moving_value) / 250;
      move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
    });
  };
  document.addEventListener("mousemove", parallax);

  return (
    <>
       <nav style={{ backgroundColor: navbarColor, boxShadow: sombra}}>
        <div className="logo" style={{ color: textColor }}>
        </div>
        <div className="menu" style={{ color: textColor }}>
        <a style={{ color: textColor }} href="#uno">  <li>Tu sitio</li></a>
          <li>Blog</li>
          <a  style={{ color: textColor }}href="#dos"><li>Planes</li></a>
       <a style={{ color: textColor }} href="#tres">   <li>Nosotros</li></a>
         <a style={{ color: textColor }} href="#cuatro"> <li>¿Por que?</li></a>
       
    <a style={{ color: textColor }} href="#cinco">
          <button
            style={{ color: textColor, border: `1px solid ${textColor}` }}
          >
            Contacto
          </button></a>
        </div>
      </nav> 
      <div className="container_main">
        <div className="containerr">
          <div className="titulo">
            <h1>Emprender<br />en la web</h1>
            {text !== "" ? <p className="maquina">{text}</p> : <p> </p>}
          </div>
          <div className="img_landing">
            <img src="/img1.png" className="objet" data-value="-2" alt="" />
            <img src="/img2.png" className="objet" data-value="6" alt="" />
            <img src="/img3.png" className="objet" data-value="4" alt="" />
            <img src="/img4.png" className="objet" data-value="-6" alt="" />
            <img src="/img5.png" className="objet" data-value="8" alt="" />
            <img src="/img6.png" className="objet" data-value="-4" alt="" />
            <img src="/img7.png" className="objet cere" data-value="5" alt="" />
          </div>
        </div>
      </div>
      <Porque></Porque>
      <Planes></Planes>
      <ServiciosDos></ServiciosDos>
      <Preguntas></Preguntas>
      <Futer></Futer>
    </>
  )
}

export default App
