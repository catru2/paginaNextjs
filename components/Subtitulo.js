import React from 'react';
import "./Estilo.css"

const Subtitulo = (props) => {
  return (
        <div>
            <div className="mma">
            <img src={props.primera} alt="Primera imagen" />
                <img src={props.segunda} alt="Segunda imagen" />
                <img src={props.tercera} alt="Tercera imagen" />
                <img src={props.cuarta} alt="Cuarta imagen" />
                <img src={props.quinta} alt="Quinta imagen" />
            </div>
        </div>
    );
}

export default Subtitulo;







