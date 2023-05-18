import { Items } from "../../components/items/items";
import background from "../../images/mesh-gradient.png";
export const Footer = () => {

    return(
        <div className="footer-container">
            <div className="footer-element">
                <Items icon="hola"/>
            </div>
            <div className="footer-element">
                <Items icon="hola"/>
            </div>
            <div className="footer-element">
                <Items icon="hola"/>
            </div>
            <div className="footer-element">
                <Items icon="hola"/>
            </div>
        </div>
    )
}