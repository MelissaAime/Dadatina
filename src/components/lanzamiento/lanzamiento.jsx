import { MyData } from "../../Data";

export const Lanzamiento = () => {

    const products = MyData();
    return (
        <>
            {products
                .filter((product) => product.hasOwnProperty('newProduct'))
                .map((product) => (
                    <div key={product.id}>
                        <img src={product.image} alt="" />
                    </div>
            ))}
        </>
    )
}