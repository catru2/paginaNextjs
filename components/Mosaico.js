import React from "react";
import "./Estilo.css"

const Mosaico =(props)=> {
    return (
        <div>
            <div class="ult">
            <img src={props.im} alt="Primera imagen" />
                <img src={props.um} alt="Segunda imagen" />  
                </div>
                

        </div>

    )
}
export default Mosaico