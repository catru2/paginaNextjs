import React, { useEffect } from 'react';

function SliderComponent() {
  useEffect(() => {
    function funcionEjecutar(side) {
      const parentTarget = document.getElementById('slider');
      const elements = parentTarget.getElementsByTagName('li');
      let curElement, siguienteElement;

      for (var i = 0; i < elements.length; i++) {
        if (elements[i].style.opacity === '1') {
          curElement = i;
          break;
        }
      }

      if (side === 'anterior' || side === 'siguiente') {
        if (side === 'anterior') {
          siguienteElement = curElement === 0 ? elements.length - 1 : curElement - 1;
        } else {
          siguienteElement = curElement === elements.length - 1 ? 0 : curElement + 1;
        }
      } else {
        siguienteElement = side;
        side = curElement > siguienteElement ? 'anterior' : 'siguiente';
      }

      // PUNTOS INFERIORES
      let elementSel = document.getElementsByClassName('listslider')[0].getElementsByTagName('a');
      elementSel[curElement].classList.remove('item-select-slid');
      elementSel[siguienteElement].classList.add('item-select-slid');
      elements[curElement].style.opacity = 0;
      elements[curElement].style.zIndex = 0;
      elements[siguienteElement].style.opacity = 1;
      elements[siguienteElement].style.zIndex = 1;
    }

    if (document.querySelector('#container-slider')) {
      setInterval(() => {
        funcionEjecutar('siguiente');
      }, 5000);
    }

    if (document.querySelector('.listslider')) {
      let link = document.querySelectorAll('.listslider li a');
      link.forEach(function (link) {
        link.addEventListener('click', function (e) {
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split('_');
          funcionEjecutar(arrItem[1]);
          return false;
        });
      });
    }
  }, []);

  return (
    <section id="container-slider">
      <a href="javascript: funcionEjecutar('anterior');" className="arrowPrev">
        <i className="fas fa-chevron-circle-left"></i>
      </a>
      <a href="javascript: funcionEjecutar('siguiente');" className="arrowNext">
        <i className="fas fa-chevron-circle-right"></i>
      </a>
      <ul className="listslider">
        <li>
          <a itlist="itList_0" href="#" className="item-select-slid"></a>
        </li>
        <li>
          <a itlist="itList_1" href="#"></a>
        </li>
        <li>
          <a itlist="itList_2" href="#"></a>
        </li>
      </ul>

      <ul id="slider">
        <li style={{ backgroundImage: `url('./assets/mmmm2.png')`, zIndex: 0, opacity: 1 }}>
          <div className="content_slider">
            <div></div>
          </div>
        </li>
        <li style={{ backgroundImage: `url('./assets/si.png')` }}>
          <div className="content_slider">
            <div></div>
          </div>
        </li>
        <li style={{ backgroundImage: `url('./assets/si2.png')` }}>
          <div className="content_slider">
            <div></div>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SliderComponent;

