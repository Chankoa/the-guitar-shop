// filepath: d:\WebWorks\Learn\React\the-guitar-shop\src\components\Banner.js
import '../css/Banner.css';

// Variables
const title = "The Guitar Shop"; // The title
const logoAlt = "The logo of Guitar Shop"; // alt attribute for the logo
const logo = '../assets/guitar-logo.png'; // Path to the logo image

function Banner() {
    return (
        <header className="banner">
            <img className="banner-logo" src={logo} alt={logoAlt} />
            <h1>{title.toUpperCase()}</h1>
        </header>    
    );
}

export default Banner;