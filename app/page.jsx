'use client'
import React from "react"
import Header from "../components/Header"
import Main from "../components/Main"
import Footer from "../components/Footer"
import Subfooter from "../components/Subfooter"
import Cartas from "../components/Cartas"
import Subtitulo from "../components/Subtitulo"
import Mosaico from "../components/Mosaico"
import CarrApi from "../components/CarrApi"
import Carrusel from "../components/Carrusel"
import Gallery from "../components/Gallery"

export default function HomePage(){
return(
   <div>
   <Header/>
   <Main/>
   <Carrusel/>
   <div className='subtitulo'><strong>Recomendado para ti</strong></div>
   <div className="contenedor-cards">
      <Cartas ma="https://images.stockx.com/images/Air-Jordan-4-Retro-Red-Cement-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1692884926&q=57"titulo="Jordan 4 Retro Red Cement (GS)" precio="$279" vendidos="Ultima venta:$513"/>
      <Cartas ma="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-GS-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1623166171&q=57" titulo="Jordan 4 Retro White Oreo (2021)(GS)" precio="$424" vendidos="Ultima venta:$441"/>
      <Cartas ma="https://images.stockx.com/images/Air-Jordan-4-Retro-Black-Cat-2020-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1606315877&q=57" titulo="Jordan 4 Retro Black Cat (2020)" precio="$1,078" vendidos="Ultima venta:$678"/>
      <Cartas ma="https://images.stockx.com/images/Air-Jordan-4-Retro-Off-White-Sail-W-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1607655526&q=57" titulo="Jordan 4 Retro Off-White Sail (Women's)" precio="$1,064" vendidos="Ultima venta:$1000"/>
      <Cartas ma="https://images.stockx.com/images/Air-Jordan-4-Retro-Thunder-2023-Product.jpg?fit=fill&bg=FFFFFF&w=140&h=75&fm=avif&auto=compress&dpr=1&trim=color&updated_at=1680288788&q=57" titulo="Jordan 4 Retro Thunder (2023)" precio="$305" vendidos="Ultima venta:$288"/>
   </div>
   <div className="subtitulo"><strong>Marcas populares</strong></div>
   <div className="contenedor-imagenes"> 
    <Subtitulo primera="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blte38c153e1d700db6/63e298944af54b10f64e8a84/jordan_popular.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"
                segunda="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt283bb9973e6fe3b1/63e3b516842f040f19e3f69c/supreme.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"
                tercera="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltdffb6a3f32ddd0b0/63e298a645febe7be921346c/louis-vuitton.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"
                cuarta="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt2f968d42e920739f/63e3b4dc21af8910e907f2e6/bearbrick.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160"
                quinta="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt17eb912c8a2a66c4/63e3b502eaa37012cc77747d/ps5.jpg?quality=80&auto=webp&format=pjpg&dpr=1&width=234&height=160" />
   </div>
   <Gallery/>
   <div className="mosaico-imagenes"> 
    <Mosaico im="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt1e2279ec7b37cca9/61f7ebffce305334580322d4/SecondaryA-ES.png?format=jpg&auto=webp&height=438"    
             um="https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt6ee59aff595b41d7/61c4412d5304f04f9446a852/Air_Jordan_11_Cool_Grey_assetsSecondaryB-ES.jpg?format=jpg&auto=webp&height=438"/>
   </div>
   <CarrApi/> 
   <Footer/>
   <Subfooter/>
  
   </div>
 
)
}