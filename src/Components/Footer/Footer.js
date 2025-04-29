import "./Footer.css";
import Logo from "../Logo/Logo";
import { Link } from "react-router-dom";

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
                <Link to="/calculator" className="nav_link">CALCULATOR</Link>
                <Link to="/schedules" className="nav_link">SCHEDULES</Link>
                <Link to="/about" className="nav_link">ABOUT US</Link>
                <Link to="/products" className="nav_link">PRODUCTS</Link>
                <Link to="/authentication" className="nav_link">LOGIN</Link>
                <Link to="/products" className="nav_link">SOLAR PANELS</Link>
                <Link to="/termsconds" className="nav_link">T&Cs</Link>
                <Link to="/cfreduction" className="nav_link">HOW TO REDUCE CARBON FOOTPRINT</Link>
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


