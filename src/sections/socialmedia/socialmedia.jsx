import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import imageLink from "../../images/fondo.png";

export const SocialMedia = () => {

    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />

        <div className="social-media">
            <div data-mc-src="19902743-aa32-49ba-a939-6b338c64f109#instagram"></div>
            <div className="social-media-youtube" data-mc-src="59dad293-f5c1-483f-a1a0-c1aa09306eb5#youtube"></div>
            
            <div className="social-media-tiktok">
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@soydadatina/video/7232787936599674117" data-video-id="7232787936599674117" style={{"max-width": "405px", "min-width": "225px"}} > 
                    <section> 
                        <a target="_blank" rel="noreferrer" title="@soydadatina" href="https://www.tiktok.com/@soydadatina?refer=embed">@soydadatina</a> 
                        <p>😜</p> 
                        <a target="_blank" rel="noreferrer" title="♬ THEY ARE GONNA KNOW - Heliqs" href="https://www.tiktok.com/music/THEY-ARE-GONNA-KNOW-7046738744150919169?refer=embed">♬ THEY ARE GONNA KNOW - Heliqs</a> 
                    </section> 
                </blockquote> 
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@soydadatina/video/7211861995908369669" data-video-id="7211861995908369669" style={{"max-width": "405px", "min-width": "225px"}} > 
                    <section> 
                        <a target="_blank" rel="noreferrer" title="@soydadatina" href="https://www.tiktok.com/@soydadatina?refer=embed">@soydadatina</a> Cómo recuperé mis uñas despues de abusar del semi.  
                    </section> 
                </blockquote>
                <blockquote class="tiktok-embed" cite="https://www.tiktok.com/@soydadatina/video/7225009321480899867" data-video-id="7225009321480899867" style={{"max-width": "405px", "min-width": "225px"}} >
                    <section> 
                        <a target="_blank" rel="noreferrer" title="@soydadatina" href="https://www.tiktok.com/@soydadatina?refer=embed">@soydadatina</a> 
                        <a title="grwm" target="_blank" rel="noreferrer" href="https://www.tiktok.com/tag/grwm?refer=embed">#GRWM</a> 
                        <a target="_blank" rel="noreferrer" title="♬ Music Instrument - Gerhard Siagian" href="https://www.tiktok.com/music/Music-Instrument-7044058610917181442?refer=embed">♬ Music Instrument - Gerhard Siagian</a> 
                    </section>
                </blockquote>
            </div>
        </div>

        
        
     </>
    )
}