import "./Footer.css";
import Logo from "../Logo/Logo";

import Icon1 from "../../Assets/Icons/linkedin_icon.png";
import Icon2 from "../../Assets/Icons/instagram_icon.png";
import Icon3 from "../../Assets/Icons/facebook_icon.png";
import Icon4 from "../../Assets/Icons/pininterest_icon.png";

export default function Footer(){
    return(
        <footer className="footer_container">
            <div className="logo_container">
                <Logo/>
            </div>
            <div className="footer_nav_container">
                <a href="/calculator" className="nav_link">CALCULATOR</a>
                <a href="/schedules" className="nav_link">SCHEDULES</a>
                <a href="/about" className="nav_link">ABOUT US</a>
                <a href="/products" className="nav_link">PRODUCTS</a>
                <a href="/authentication" className="nav_link">LOGIN</a>
                <a href="/products" className="nav_link">SOLAR PANELS</a>
                <a href="/termsconds" className="nav_link">T&Cs</a>
                <a href="/cfreduction" className="nav_link">HOW TO REDUCE CARBON FOOTPRINT</a>
            </div>
            <div className="social_media_container">
                <h2>STAY IN TOUCH </h2><br/>
                <img src={Icon1} alt="Social Media Icon"/>
                <img src={Icon2} alt="Social Media Icon"/>
                <img src={Icon3} alt="Social Media Icon"/>
                <img src={Icon4} alt="Social Media Icon"/>
            </div>
        </footer>
    )
}


