import { Link } from "react-router-dom";
import { Cards } from "../../components/Cards/cards";
import { MyData } from "../../Data";
import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import imageLink from "../../images/trilogia.png";

export const Products = () => {

    const products = MyData();

    return(
     <>
        <HeroImage imageLink={imageLink} />

        <MyNavigation/>
        
        <div className="products-container">
            <div className="products-card">

                {products.map((product) => (
                    <Link to={`/productos/${encodeURIComponent(product.title)}`} key={product.id}>
                        <Cards product={product} />
                    </Link>
                ))}
            </div>
        </div>
     </>
    )
}