import { MyNavigation } from "../../components/Navigation/navigation";
import { HeroImage } from "../../components/heroImage/heroImage";
import imageLink from "../../images/dadatina.jpg";
import profile1 from "../../images/dadatina-1.jpeg";
import profile2 from "../../images/dadatina-2.jpeg";
import { Subtitle } from "../../components/subtitle/subtitle";

export const AboutMe = () => {


    return(
     <>
        <HeroImage imageLink={imageLink} />
        <MyNavigation />

        <div className="aboutme-container">
            <Subtitle 
                title="Acerca de mi:" 
            />

            <div className="aboutme-profile">
                <div className="aboutme-profile-image">
                    <img src={profile1} alt="" />
                </div>
                <div className="aboutme-profile-text">
                    <h3>Hola soy Dadatina</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum sapiente a tempora atque error, eaque et? Sint in eum odit porro rerum fugiat quis nesciunt amet, eius animi neque pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat quos tempore doloremque odio nobis nisi ut dolor vel, nihil dolores laboriosam nam animi recusandae quasi facere illum suscipit ipsam fugit?</p>
                </div>
                <div className="aboutme-profile-image">
                    <img src={profile2} alt="" />
                </div>
            </div>

            <Subtitle 
                title="" 
            />

        </div>
     </>
    )
}