import React from "react";
import { useParams } from 'react-router-dom';
import { MyData } from "../../Data";

export const ProductDetails = () => {
    const { productId } = useParams();
    const product = MyData().find((p) => p.id === parseInt(productId));

    return (
        <div>
            <p>Hola</p>
            <h1>{product.title}</h1>
            <p>{product.text}</p>
            <img src={product.image} alt={product.title} />
        </div>
    )
}
