import React from 'react'
import "./Estilo.css"

const Subfooter = () => {
    return (
        <div className="subfooter">
          <div className="row">
          <div className="col">
                    <button class="beee">
                        <strong> MEXICO | Español | $US </strong>
                    </button>
                </div>
                <div className="col">
                <div className="imag">
                <img src="./assets/—Pngtree—twitter white icon_3570409.png"alt/> 
                <img src="./assets/social (1).png" alt/>
                <img src="./assets/ins.png" alt/>
                <img src="./assets/—Pngtree—youtube white icon_3570427.png"alt/>
                </div> 
                </div>
                <div className="col" style={{background:"black"}}> 
                    <div className="fa">
                        <div className="row2">
                            <div className="col2">
                                <p> <a href="#">Ayuda</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Cómo funciona</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Privacidad</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Condiciones</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Trabajos</a></p>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="col2">
                                <p> <a href="#">Contactanos</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Sugerencia de producto</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Prensa</a></p>
                            </div>
                        </div>
                        <div className="row2">
                            <div className="col2">
                                <p> <a href="#">Declaración sobre accesibilidad</a></p>
                            </div>
                            <div className="col2">
                                <p> <a href="#">Tus opciones de privacidad</a></p>
                            </div>
                        </div>
                        <p style={{textAlign:"center",color:"#FFF" }}> ©2023 StockX. Todos los derechos reservados. </p>
                    </div>
                </div>
            </div>  
        </div>
    )
}
export default Subfooter 
