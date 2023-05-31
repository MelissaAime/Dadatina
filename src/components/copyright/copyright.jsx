export const Copyright = () => {
    const year = new Date().getFullYear();
    return(
        <div className="copyright">
            &copy; {year} 
            <p>Created by:
                <a href="https://www.linkedin.com/in/melissa-daiana-aime-ab7a73201/" target="_blank" rel="noreferrer">Melissa Aime</a>        
            </p>
        </div>
    )
}