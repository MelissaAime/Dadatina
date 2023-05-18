import { Items } from "../../components/items/items";
import { BsInstagram, BsTiktok, BsTwitch, BsTwitter} from 'react-icons/bs';

export const Footer = () => {

    const iconInstagram = <BsInstagram/>
    const iconTiktok = <BsTiktok/>
    const iconTwitch = <BsTwitch/>
    const iconTwitter = <BsTwitter/>
    const tooltipContentInstagramTikTok = "@soydadatina"
    const tooltipContentTwitchTwitter = "dadatina"

    return(
        <div className="footer-container">
            <div className="footer-element"> 
                <Items 
                    href={"https://www.instagram.com"} 
                    icon={iconInstagram} 
                    tooltipContent={tooltipContentInstagramTikTok}
                />
            </div>
            <div className="footer-element">
                <Items 
                    href={"https://www.tiktok.com"} 
                    icon={iconTiktok} 
                    tooltipContent={tooltipContentInstagramTikTok}
                />
            </div>
            <div className="footer-element">
                <Items 
                    href={"https://www.twitch.com"} 
                    icon={iconTwitch}
                    tooltipContent={tooltipContentTwitchTwitter}
                />
            </div>
            <div className="footer-element">
                <Items 
                    href={"https://www.twitter.com"} 
                    icon={iconTwitter} 
                    tooltipContent={tooltipContentTwitchTwitter}
                />
            </div>
        </div>
    )
}