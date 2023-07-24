import React, { useState } from "react";
import { Banner } from "./Banner";

export const Preguntas = () => {
  const [side, setSide] = useState("imagen");

  return (
    <div className="preguntas_main" id="cuatro">
      <img className="excusas" src="/excusas.png" alt="" />
      <div className="preguntas_group">
        <div className="preguntas_botones">
          <button onClick={() => setSide("1")}>
            Por que emprender en la Web?
          </button>
          <button onClick={() => setSide("2")}>
            Por que no vender solo en mis redes sociales?
          </button>
          <button onClick={() => setSide("3")}>
            Por que optimizar mi sitio Web es importante?
          </button>
          <button onClick={() => setSide("4")}>
            Por que ApoloWeb es diferente a otras propuestas?
          </button>
          <button>
            Que es ApoloWeb Evolution y porqué financia proyectos?
          </button>
        </div>
        {side == "imagen" && <img src="/preguntas.svg" alt="" />}
        {side == "1" && (
          <ul style={{ color: "black", height: "100%" }}>
            Por qué emprender en la web?
            <br />
            <br />
            <li style={{ listStyle: "initial" }}>
              Amplio alcance global: A través de internet, tu negocio puede
              llegar a personas de todo el mundo, sin limitaciones geográficas.
              Esto amplía significativamente el potenci
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Menores barreras de entrada: Emprender en la web suele requerir
              menos inversión inicial que abrir una tienda física o establecer
              una presencia comercial tradicional. Puedes comenzar con un sitio
              web básico y, a medida que crezcas, expandir tus capacidades en
              línea.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Oportunidad de llegar a nuevos clientes: Internet es un espacio
              donde millones de personas buscan productos y servicios todos los
              días. Al estar presente en línea, tienes la oportunidad de atraer
              y convertir a clientes que de otra manera no te encontrarían.
            </li>
          </ul>
        )}
        {side == "2" && (
          <ul style={{ color: "black", height: "100%" }}>
            Por qué no vender solo en mis redes sociales?
            <br />
            <br />
            <li style={{ listStyle: "initial" }}>
              Limitado control sobre la plataforma: Las redes sociales son
              propiedad de terceros, lo que significa que no tienes control
              total sobre las políticas, cambios de algoritmo y funcionalidades.
              Podrías perder el acceso a tu audiencia si la plataforma decide
              cerrar tu cuenta o cambiar sus reglas.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Restricciones en las funciones de venta: Aunque algunas redes
              sociales ofrecen opciones de venta, estas pueden ser limitadas en
              comparación con las funcionalidades que puede proporcionar un
              sitio web dedicado. Un sitio web te permite personalizar
              completamente el proceso de compra y las interacciones con los
              clientes.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Falta de profesionalismo y credibilidad: Un sitio web bien
              diseñado brinda una imagen más profesional y confiable para tu
              negocio. Las redes sociales pueden ser útiles para el marketing y
              la interacción con los clientes, pero no ofrecen la misma
              sensación de profesionalismo que un sitio web propio.
            </li>
          </ul>
        )}
        {side == "3" && (
          <ul style={{ color: "black", height: "100%" }}>
            Por qué optimizar mi sitio web es importante?
            <br />
            <br />
            <li style={{ listStyle: "initial" }}>
              Mejora la experiencia del usuario: Un sitio web optimizado carga
              rápidamente, es fácil de navegar y se adapta a diferentes
              dispositivos. Esto crea una experiencia positiva para los
              visitantes, lo que aumenta las posibilidades de que se conviertan
              en clientes y regresen en el futuro.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Aumenta la visibilidad en buscadores: La optimización para motores
              de búsqueda (SEO) ayuda a tu sitio web a clasificar mejor en los
              resultados de búsqueda. Esto significa que más personas podrán
              encontrarte cuando busquen productos o servicios relacionados con
              tu negocio.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Impulsa las conversiones y ventas: Un sitio web optimizado está
              diseñado para guiar a los visitantes a través del proceso de
              compra de manera clara y efectiva. Mejorar la experiencia del
              usuario y la visibilidad en buscadores aumenta las posibilidades
              de que los visitantes se conviertan en clientes y realicen una
              compra.
            </li>
          </ul>
        )}
        {side == "4" && (
          <ul style={{ color: "black", height: "100%" }}>
            Por qué Apoloweb es diferente a otras propuestas?
            <br />
            <br />
            <li style={{ listStyle: "initial" }}>
              Enfoque personalizado en cada proyecto: Apoloweb se destaca por
              entender las necesidades específicas de cada cliente y desarrollar
              soluciones a medida. No ofrecemos soluciones genéricas, sino que
              adaptamos nuestras estrategias a las metas y objetivos de cada
              negocio.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Experiencia y expertise en diseño web: Nuestro equipo de
              profesionales cuenta con una amplia experiencia en diseño y
              desarrollo web. Estamos al tanto de las últimas tendencias y
              mejores prácticas para crear sitios web que destaquen visualmente
              y funcionen de manera óptima.
            </li>
            <br />
            <li style={{ listStyle: "initial" }}>
              Soluciones innovadoras y creativas: En Apoloweb, no nos
              conformamos con lo convencional. Buscamos constantemente nuevas
              formas de sorprender y cautivar a los usuarios a través de diseños
              creativos e innovadores que destacan entre la competencia. Nuestra
              pasión por la originalidad nos distingue de otras agencias.
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};
