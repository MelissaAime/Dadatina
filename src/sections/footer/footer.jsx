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
                <Items href={"https://www.instagram.com"} icon={iconInstagram}/>
            </div>
            <div className="footer-element">
                <Items href={"https://www.tiktok.com"} icon={iconTiktok}/>
            </div>
            <div className="footer-element">
                <Items href={"https://www.twitch.com"} icon={iconTwitch}/>
            </div>
            <div className="footer-element">
                <Items href={"https://www.twitter.com"} icon={iconTwitter}/>
            </div>
        </div>
    )
}