import { Items } from "../../components/items/items";
import { BsInstagram, BsTiktok, BsTwitch, BsTwitter} from 'react-icons/bs';

export const Footer = () => {

    const iconInstagram = <BsInstagram/>
    const iconTiktok = <BsTiktok/>
    const iconTwitch = <BsTwitch/>
    const iconTwitter = <BsTwitter/>
    return(
        <div className="footer-container">
            <div className="footer-element"> 
                <Items icon={iconInstagram}/>
            </div>
            <div className="footer-element">
                <Items icon={iconTiktok}/>
            </div>
            <div className="footer-element">
                <Items icon={iconTwitch}/>
            </div>
            <div className="footer-element">
                <Items icon={iconTwitter}/>
            </div>
        </div>
    )
}