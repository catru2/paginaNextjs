import React from 'react'
import "./Estilo.css"
import Imagenes from "next/image"
import Heartb from "../public/assets/heartb.png"


const Cartas =(props)=> {
    return (
<div>
<div className="card-martin">
<Imagenes src={Heartb} className='favorito' alt id='rot'/>
<img src={props.ma} alt="Primera imagen" />
<p className='titulo1'>{props.titulo}</p>
<p className='subtitulo-card'>Oferta mas baja</p>
<h3 className='precio'>{props.precio}</h3>
<div className='vendidos'>
<p>{props.vendidos} </p>
</div>

</div>
     </div>
    )
}
export default Cartas