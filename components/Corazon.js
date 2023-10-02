import React, { useState } from 'react';

function Corazon() {
  const [contador, setContador] = useState([0, 0, 0, 0, 0]);

  const handleClick = (index) => {
    const newContador = [...contador];
    newContador[index]++;
    if (newContador[index] === 2) {
      newContador[index] = 0;
    }
    setContador(newContador);
  };

  return (
    <div>
      <img
        src={contador[0] === 0 ? './assets/heartb.png' : './assets/corazon.png'}
        alt="Corazon 1"
        id="rot"
        onClick={() => handleClick(0)}
      />
      <img
        src={contador[1] === 0 ? './assets/heartb.png' : './assets/corazon.png'}
        alt="Corazon 2"
        id="ro"
        onClick={() => handleClick(1)}
      />
      <img
        src={contador[2] === 0 ? './assets/heartb.png' : './assets/corazon.png'}
        alt="Corazon 3"
        id="po"
        onClick={() => handleClick(2)}
      />
      <img
        src={contador[3] === 0 ? './assets/heartb.png' : './assets/corazon.png'}
        alt="Corazon 4"
        id="pr"
        onClick={() => handleClick(3)}
      />
      <img
        src={contador[4] === 0 ? './assets/heartb.png' : './assets/corazon.png'}
        alt="Corazon 5"
        id="lp"
        onClick={() => handleClick(4)}
      />
      <button id="bton" onClick={() => alert("Apunto de iniciar sesion")}>Iniciar Sesión</button>
    </div>
  );
}

export default Corazon;
