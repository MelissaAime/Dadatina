import { Items } from "../../components/items/items";
import { BsInstagram, BsTiktok, BsTwitch, BsTwitter, BsYoutube, BsFacebook, BsSpotify, BsChatRightTextFill} from 'react-icons/bs';

export const Footer = () => {

    const iconInstagram = <BsInstagram/>
    const iconTiktok = <BsTiktok/>
    const iconTwitch = <BsTwitch/>
    const iconTwitter = <BsTwitter/>
    const iconYouTube = <BsYoutube/>
    const tooltipContentInstagramTikTok = "@soydadatina"
    const tooltipContentTwitchTwitter = "dadatina"

    return(
        <div className="footer">
            <div>
                <h4>Redes sociales:</h4>
            </div>
            <div className="footer-redes">
                <div className="footer-redes-element"> 
                    <Items 
                        href={"https://www.instagram.com"} 
                        icon={iconInstagram} 
                        tooltipContent={tooltipContentInstagramTikTok}
                    />
                </div>
                <div className="footer-redes-element">
                    <Items 
                        href={"https://www.tiktok.com"} 
                        icon={iconTiktok} 
                        tooltipContent={tooltipContentInstagramTikTok}
                    />
                </div>
                <div className="footer-redes-element">
                    <Items 
                        href={"https://www.twitch.com"} 
                        icon={iconTwitch}
                        tooltipContent={tooltipContentTwitchTwitter}
                    />
                </div>
                <div className="footer-redes-element">
                    <Items 
                        href={"https://www.twitter.com"} 
                        icon={iconTwitter} 
                        tooltipContent={tooltipContentTwitchTwitter}
                    />
                </div>
                <div className="footer-redes-element">
                    <Items 
                        href={"https://www.youtube.com"} 
                        icon={iconYouTube} 
                        tooltipContent={tooltipContentTwitchTwitter}
                    />
                </div>
            </div>
            <div className="footer-secondary">
                <p> <BsSpotify/> Spotify</p>
                <p> <BsChatRightTextFill/> Mail</p>
                <p> <BsFacebook/> Facebook</p>
            </div>
        </div>
    )
}