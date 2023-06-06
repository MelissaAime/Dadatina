import React, { useState, useEffect } from 'react';
import './carouselHome.scss';
import imagenProd1 from "../../images/products/prod1.png";
import imagenProd2 from "../../images/products/prod2.png";
import imagenProd3 from "../../images/products/prod3.jpg";
import backgroundProd1 from "../../images/products/prod1background.png";
import backgroundProd2 from "../../images/products/prod2background.png";
import backgroundProd3 from "../../images/products/prod3background.png";

export const CarouselHome = () => {
  const [selectedImage, setSelectedImage] = useState('');
  const [isFirstImageExpanded, setIsFirstImageExpanded] = useState(false);

  useEffect(() => {
    if (!isFirstImageExpanded) {
      const firstImage = document.querySelector('.image-list img:first-child');
      const firstImageUrl = firstImage.getAttribute('data-image-url');
      setSelectedImage(firstImageUrl);
      setIsFirstImageExpanded(true);
    }
  }, [isFirstImageExpanded]);

  const handleImageClick = (event) => {
    const imageUrl = event.target.getAttribute('data-image-url');
    setSelectedImage(imageUrl);
    const images = document.querySelectorAll('.image-list img');
    images.forEach((img) => {
      img.classList.remove('expanded');
    });
    event.target.classList.add('expanded');
  };

  return (
    <div className="carousel-home">
      <div
        className="carousel-container"
        style={{ backgroundImage: `url(${selectedImage})` }}
      >
      </div>

      <div className="image-list">
        <img
          src={imagenProd1}
          alt="Imagen 1"
          data-image-url={backgroundProd1}
          onClick={handleImageClick}
        />
        <img
          src={imagenProd2}
          alt="Imagen 2"
          data-image-url={backgroundProd2}
          onClick={handleImageClick}
        />
        <img
          src={imagenProd3}
          alt="Imagen 3"
          data-image-url={backgroundProd3}
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};
