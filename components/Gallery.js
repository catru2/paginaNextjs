import React from 'react';
import Flickity from 'react-flickity-component';
import { useRouter } from 'next/navigation';

const flickityOptions = {
  wrapAround: true,
};

const images = [
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt8b1654be0c338f41/64fa3904b169ad02a604ac3b/Untitled_design_(27).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt42549916ff65a20f/64fa377ece38f4df94f4a48a/Untitled_design_(25).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt5b18c1a3a853fbd6/64f76c1a68d8e1757a601d75/Untitled_design_(21).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt394d7979f5927f9e/64f76a4a011d069101e76e28/Untitled_design_(19).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt589a09e1b2991237/64ee2f01ccb8d42aeb4bd812/Untitled_design_(11).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt2bd13dcbee15ce49/64ee2bb98c665c831f910244/Untitled_design_(9).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt91d3b431f65566ba/64e7b5bdffe8ee710e3e7c84/Untitled_design_(5).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt1b65837f8915bb16/64e7b25d8c0a70de28820bc8/Untitled_design_(2).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt6ef4d3785558f328/64d5784afe2cccd0a6a2e56b/Untitled_design_(9).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/bltb866813c2397b031/64e625ee4275cfe30809c054/Untitled_design_(43).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blta3beede89f14e574/64e4e7d8bce8786c12629116/Untitled_design_(40).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
  'https://images-cs.stockx.com/v3/assets/blt818b0c67cf450811/blt357df1a032c5afd4/64df76e1bea67ceb55b1a68a/Untitled_design_(35).png?quality=80&auto=webp&format=pjpg&dpr=1&width=638&height=638',
];

function Gallery() {
  const navigate=useRouter()
  const changerout=(id)=>{
  navigate.push(`/${id}`)
  }
  return (
    <Flickity
    
    
    className={'carousel'} // default ''
    elementType={'div'} // default 'div'
    options={flickityOptions} // takes flickity options {}
    disableImagesLoaded={false} // default false
    reloadOnUpdate // default false
    static>
           {images.map((image, index) => (
      
      <img onClick={()=>{changerout(index)}} src={image} alt={`Image ${index + 1}`} />
  
  ))}
    </Flickity>
    // <div className="gallery js-flickity" data-flickity-options={JSON.stringify(flickityOptions)} style={{ marginTop: '2vw' }}>
    
    // </div>
  );
}

export default Gallery;
