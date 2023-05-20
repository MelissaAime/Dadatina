import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import { Subtitle } from "../../components/subtitle/subtitle";
import imageLink from "../../images/book-person.jpg";
import acflogo from "../../images/acf-logo.png";
import cuspidelogo from "../../images/cuspide-logo.png";
import { Bookshop } from "../../components/bookshop/bookshop";
import { useNavigate } from 'react-router-dom';

export const BookInfo = () => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/productos');
    };

    return(
        <>
            <HeroImage imageLink={imageLink} />
            <MyNavigation />
            
            <div className="book-info-container">
                <Subtitle
                    title="Dónde comprar" 
                />
        
                <h3>Disponible en:</h3>

                <div className="book-info-bookshop">
                    <Bookshop
                        image={acflogo}
                        title="acf"
                        text="comprar en acf"
                        buttoncontent="Comprar"
                        handleClick={handleClick}
                    />

                    <Bookshop
                        image={cuspidelogo}
                        title="cuspide"
                        text="comprar en cuspide"
                        buttoncontent="Comprar"
                        handleClick={handleClick}
                    />
                </div>
                

            </div>
        </>
    )
}
