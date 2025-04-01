import "./Logo.css";
import LogoImage from "../../Assets/Images/Logo.png";


export default function Logo(){
    return(
        <div className="logo_container">
            <a href="/">
                <img 
                    src={LogoImage} 
                    alt="Rolsa Technologies Logo"
                    id="logo"
                />
            </a>
        </div>
    )
}