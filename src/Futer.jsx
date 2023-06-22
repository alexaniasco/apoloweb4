import React from 'react'

export const Futer = () => {
  return (
    <div className='futer_main' style={{ color: "whitesmoke" }}>

      <div className='form'>
        <img src='/formtit.svg' className='formcontacto' />
        <div className="form_arriba">
          <div className='form_arriba_label'> <label>Nombre</label>
            <label>Email</label></div>
          <input type="text" />
          <input type="text" />
        </div>
        <h3 style={{ margin: "20px 0" }}>selecciona el motivo</h3>
        <div className='form_butons'>
          <button>Essential</button>
          <button>Pro</button>
          <button>Ecommerce Pro</button>
          <button>Apolo web evolution</button>
          <button>Marketing digital</button>
          <button>Diseño adaptable</button>
          <button>SEO</button>
          <button>Mantenimiento</button>
        </div>
        <label>Explayate</label>
        <textarea ></textarea>
        <button>Enviar</button>

      </div>

    </div>
  )
}
