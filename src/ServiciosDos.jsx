import React from 'react'

export const ServiciosDos = () => {
    return (
        <div className='serviciosDos' id='tres'>
            <div className='serviciosDosHead'>
                <div className='serviciosDosText'>
                    <p style={{ fontSize: "52px", textAlign: "start", fontWeight: "700", margin: "0" }}>Apología del éxito en la  Web</p>
                    <p className='p2' style={{ marginTop: "20px" }}>Somos los únicos desarrolladores comprometidos en hacer que la web sea accesible para todos los usuarios, sin importar su presupuesto.</p>
                    <button style={{ borderRadius: "2rem", backgroundColor: "#FA72A8", color: "white", marginTop: "70px" }}>Comienza ahora</button>
                </div>
                <div className='servidiosDosImagenCont'>

                    <img className='serviciosDosImagen' id='pc' src="/pc.svg" alt="" />
                </div>
            </div>
         
        </div>
    )
}
