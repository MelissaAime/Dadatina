import React from "react";
import { useParams } from 'react-router-dom';
import { MyData } from "../../Data";
import { MySwiper } from "../../components/Swiper/swiper";
import { MyNavigation } from "../../components/Navigation/navigation";

export const ProductDetails = () => {
    const { productId } = useParams();
    const product = MyData().find((p) => p.id === parseInt(productId));

    return (
        <>

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
                </div>
            </div>
            
            <div className="swiper-container">
                <MySwiper/>
            </div>
        </>
    )
}
