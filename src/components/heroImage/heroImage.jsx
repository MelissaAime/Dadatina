export const HeroImage = ({imageLink}) => {
    return( 
        <div 
            className="background-image" 
            style={{
                background: `url(${imageLink})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
            }}>
        </div>
    )
}