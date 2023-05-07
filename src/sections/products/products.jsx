import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards/cards";
import { MyData } from "../../Data";

export const Products = () => {

    const products = MyData();

    return(
     <>
        <div className="products-background"></div>

        <div className="products-container">
            <div className="products-card">

                {/* {products.map(({id, title, text, image}) => (
                    <Cards  title={title} text={text} image={image} alt={title}/>
                ))} */}

                {products.map((product) => (
                    <Link to={`/productos/${product.id}`} key={product.id}>
                        <Cards product={product} />
                    </Link>
                ))}
            </div>
        </div>
     </>
    )
}