import { MyData } from "../../Data";

export const Lanzamiento = () => {

    const products = MyData();
    return (
        <>
            {products
                .filter((product) => product.hasOwnProperty('newProduct'))
                .map((product) => (
                    <div key={product.id} className="new-product">
                        <p>Últimos lanzamientos</p>
                        <img src={product.image} alt="" className="new-product-img"/>
                    </div>
            ))}
        </>
    )
}