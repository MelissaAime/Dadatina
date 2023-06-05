import React, { useState } from 'react';
import './carouselHome.scss';

export const CarouselHome = () => {
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (image) => {
        setSelectedImage(image);
        const imageList = document.querySelector('.image-list');
        imageList.classList.add('expanded');
      };
      
  
    return (
      <div className="carousel-home">
        <div
          className="carousel-container"
          style={{ backgroundImage: `url(${selectedImage})` }}
        >
          <h1>Nuevos lanzamientos</h1>
        </div>
  
        <div className="image-list">
          <img
            src="https://swiperjs.com/demos/images/nature-1.jpg"
            alt="Imagen 1"
            onClick={() => handleImageClick('https://swiperjs.com/demos/images/nature-1.jpg')}
          />
          <img
            src="https://swiperjs.com/demos/images/nature-2.jpg"
            alt="Imagen 2"
            onClick={() => handleImageClick('https://swiperjs.com/demos/images/nature-2.jpg')}
          />
          <img
            src="https://swiperjs.com/demos/images/nature-3.jpg"
            alt="Imagen 3"
            onClick={() => handleImageClick('https://swiperjs.com/demos/images/nature-3.jpg')}
          />
        </div>
      </div>
    );
  };
