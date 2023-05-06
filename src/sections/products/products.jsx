import { Cards } from "../../components/Cards/cards";
import { MyData } from "../../Data";

export const Products = () => {

    const products = MyData();

    return(
     <>
        <div className="products-background"></div>

        <div className="products-container">
            <div className="products-card">
                {products.map(({id, title, text, image}) => (
                    <Cards  title={title} text={text} image={image} alt={title}/>
                ))}
            </div>
        </div>
     </>
    )
}