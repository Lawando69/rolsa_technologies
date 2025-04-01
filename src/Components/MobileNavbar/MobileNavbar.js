import Logo from "../Logo/Logo";
import "./MobileNavbar.css";
import React, {useState} from "react";
import { Link } from "react-router-dom";

import MenuIcon from "../../Assets/Icons/menu_icon.svg";
import ProfileIcon from "../../Assets/Icons/Profile_icon.svg"

export default function MobileNavbar(){
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleOpen(){
        setMenuOpen(!menuOpen);
    }

    var StringClass = "";
    if(menuOpen){
        StringClass = "menu_icon open";
    } else{
        StringClass = "menu_icon";
    }

    return(
        <div id="mobile_container">
            <Logo/>
            <img
                onClick={toggleOpen}
                className={StringClass}
                src={MenuIcon}
                alt="Menu Icon"
                />
            <nav id="mobile_navbar" className={menuOpen ? "open" : ""}>
                <a href="/">HOME</a>
                <a href="/products">PRODUCTS</a>
                <a href="/cfreduction">CARBON FOOTPRINT REDUCTION</a>
                <a href="/schedules">SCHEDULES</a>
                <a href="/calculator">CALCULATOR</a>
                <Link to="/authentication" className="authentication">
                    <img src={ProfileIcon} alt="Profile Icon" id='profile_icon'/>
                </Link>
            </nav>
        </div>
    )
}