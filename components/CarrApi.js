"use client"
import React, {useEffect, useState} from "react"

export default function CarrApi() {
    const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const obtenerDatos = async () => {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const photosData = await data.json();
        setPhotos(photosData.slice(0, 3).map((photo) => photo.url));
    };
    obtenerDatos();
  }, []);
   
    return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="acrousel-inner">
          <div className="carousel-item active">
            <img src={photos[0]} class="d-block w-100" alt="Ayuda" id="id1"></img>
          </div>
          <div className="carousel-item">
            <img src={photos[1]} class="d-block w-100" alt="..." id="id2"></img>
          </div>
          <div className="carousel-item">
            <img src={photos[2]} class="d-block w-100" alt="..." id="id3"></img>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}