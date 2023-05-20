import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import { Subtitle } from "../../components/subtitle/subtitle";
import imageLink from "../../images/book-person.jpg";
import acflogo from "../../images/acf-logo.png";
import cuspidelogo from "../../images/cuspide-logo.png";
import ateneologo from "../../images/ateneo-logo.png";
import { Bookshop } from "../../components/bookshop/bookshop";

export const BookInfo = () => {
    
    const handleClickOne = () => {
        window.open('https://www.mascarasacf.com.ar', '_blank');
    };
    const handleClickTwo = () => {
        window.open('https://www.cuspide.com/Libro/9789507883262/%23Pielesreales', '_blank');
    };
    const handleClickThree = () => {
        window.open('https://www.yenny-elateneo.com/MLA-914074236-pielesreales-dadatina-_JM?gclid=CjwKCAjw36GjBhAkEiwAKwIWyTYFHuCA0Pm-0w0oUoy5F2pu80nouNTQtkGqXr8DLZO06_uWeJuObBoCSKMQAvD_BwE', '_blank');
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
                        buttoncontent="Comprar"
                        handleClick={handleClickOne}
                    />

                    <Bookshop
                        image={cuspidelogo}
                        title="cuspide"
                        buttoncontent="Comprar"
                        handleClick={handleClickTwo}
                    />

                    <Bookshop
                        image={ateneologo}
                        title="El ateneo"
                        buttoncontent="Comprar"
                        handleClick={handleClickThree}
                    />

                </div>
                

            </div>
        </>
    )
}
