import React from "react";
import "./Gallery.css";
import { Carousel } from "3d-react-carousal";

function Gallery(props) {
  let images = props.images;

  return (
    <div className='gallery p-5' id="gallery-section">
      <div className='container bg-dark-green text-light-blue p-5 rounded'>
        <h2 className="mb-5">Gallery</h2>
        <Carousel className="custom-carousel"
          slides={images.map((i) => (
            <img key={i.id} alt='' src={i.src} width='400px' hight='200px' className="gallery-image rounded"/>
          ))}
          arrows={ false }
        />
      </div>
    </div>
  );
}

export default Gallery;
