export const Items = ({icon, href}) => {
    return(
        <>
            <a className="items-button" href={href} target="_blank" rel="noreferrer">{icon}</a>
        </>
    )
}