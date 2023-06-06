import React, { useState, useEffect } from 'react';
import './carouselHome.scss';

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
        <h1>Nuevos lanzamientos</h1>
      </div>

      <div className="image-list">
        <img
          src="https://swiperjs.com/demos/images/nature-1.jpg"
          alt="Imagen 1"
          data-image-url="https://swiperjs.com/demos/images/nature-8.jpg"
          onClick={handleImageClick}
        />
        <img
          src="https://swiperjs.com/demos/images/nature-2.jpg"
          alt="Imagen 2"
          data-image-url="https://swiperjs.com/demos/images/nature-7.jpg"
          onClick={handleImageClick}
        />
        <img
          src="https://swiperjs.com/demos/images/nature-3.jpg"
          alt="Imagen 3"
          data-image-url="https://swiperjs.com/demos/images/nature-6.jpg"
          onClick={handleImageClick}
        />
      </div>
    </div>
  );
};
