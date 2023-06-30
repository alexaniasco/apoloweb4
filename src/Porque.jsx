import React from 'react'

export const Porque = () => {
    return (
        <div className='porque_main elemento-animado' id='uno'>
            <div>
                <h1 className='porque_title' style={{ fontSize: "52px" }}>Tener tu sitio en la web</h1>
                <h4 className='porque_ex' style={{ fontSize: "22px", fontWeight: "300" }}>≠ tener éxito en la web.</h4>
            </div>
{/* asd */}
            <div className='porque_flex'>
                <div className='porque_grid'>
                    <div className='porque_card'>
                        <h4>Propuesta de Valor</h4>
                        <p>Todo proyecto tiene una característica única que lo enriquece. Trabajarla con un analicis previo del mercado es fundamental.</p>
                        
                        <img src="/p1.svg" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Posicionamiento en Google
                        </h4>
                        <p>Hay una jerarquía en los sitios web que va mas allá de la mejor publicidad o estrategia.
Su código fuente debe ser optimo y escalable.</p>
                        <img src="/p2.svg" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Mantenimiento y optimizacion.
                        </h4>
                        <p>No quedarte atrás en las fechas clave de ventas y darle a tus clientes las ultimas noticias en una estructura solida desde los cimientos permite dar grandes saltos.</p>
                        <img src="/p3.svg" alt="" />
                    </div>
                    <div className='porque_card'>
                        <h4>Adaptacion
                        </h4>
                        <p>Ser adaptable ya no es una opción;  dar el mejor servicio tampoco lo es.  Se accesible tanto en computadoras, celulares y tablets. 
¡El diseño responsivo es tendencia! </p>
                        <img src="/p4.svg" alt="" />
                    </div>
                <div className='porque_text'>
                 <div className='porque_text2'>
                 <p>
                 Diseñamos una página web estratégica y única pensada especialmente para tu
producto o servicio.
                </p>
                <p>Trabajamos en los cuatro factores fundamentales para maximizar el impacto y el alcance.</p>

                    <p>¿Listo para avanzar?</p>
                    <button>Empieza el cambio!</button>
                 </div>
                  
                </div>
                </div>
            </div>
        </div>
    )
}
