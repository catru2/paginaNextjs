import React from 'react'
import "./Estilo.css"
import Ima from "next/image"
import Campana from "../public/assets/campana.png"

const Header = (props) => {
  return (
    <header>
    <div className="container">
        <h1 className="stock"> StockX</h1>

        <div class="input-container1">
       
        <input type="text" id="search-input" placeholder="Buscar..."/>
        <button id="search-button">Buscar</button>
  
        </div>

        <div className="conn">
            <h1 className="ex"> Explorar </h1>
            <h1 className="no"> Noticias </h1>
            <h1 className="in"> Informacion </h1>
            <h1 className="ayu"> Ayuda</h1>
            <h1 className="ven"> Vender</h1>
        </div>
        
        <div>
        <Ima src={Campana} className='campana' alt id='rot'/>
        </div>

        <label className="container2">
        <button className="boton1" id="bton"> Entrar </button>
        <button className="boton1"> Registrarse </button>
        </label>
    </div>

</header>
  )
}
export default Header
