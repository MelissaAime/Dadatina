export const HeroImage = ({imageLink}) => {
    return( 
        <div 
            className="background-image" 
            style={{
                background: `no-repeat center/112% url(${imageLink})`,
            }}>

        </div>
    )
}