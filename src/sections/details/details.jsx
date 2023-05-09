import React from "react";
import { useParams } from 'react-router-dom';
import { MyData } from "../../Data";
import { MySwiper } from "../../components/Swiper/swiper";
import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";

export const ProductDetails = () => {
    const { productId } = useParams();
    const product = MyData().find((p) => p.id === parseInt(productId));
    const imageLink = 'https://via.placeholder.com/300';
    return (
        <>
            <HeroImage imageLink={imageLink} />
            
            <MyNavigation/>
            <div className="container">
                <div className="container-img">
                    <img src={product.image} alt={`Imagen principal de ${product.title}`} />
                    {product.images.map((image, id) => (
                        <img src={image} alt={`Imagenes secundarias ${id}`} key={id} />
                    ))}
                </div>
                <div className="container-text">
                    <h1>{product.title}</h1>
                    <p>{product.text}</p>
                    <div>{product.description}</div>
                </div>
            </div>
            
            <div className="swiper-container">
                <MySwiper/>
            </div>
        </>
    )
}
