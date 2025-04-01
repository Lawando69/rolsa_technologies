import { Link } from 'react-router';
import ProfileIcon from "../../Assets/Icons/Profile_icon.svg";
import Logo from "../Logo/Logo";
import "./DesktopNavbar.css"

export default function DesktopNavbar() {

  return (
    <header id="desktop_container">
        <Logo/>      
        <Link to="/" className='nav_link'>Home</Link>
        <Link to="/products" className='nav_link'>Products</Link>
        <Link to="/cfreduction" className='nav_link'>Carbon Footprint Reduction</Link>
        <Link to="/schedules" className='nav_link'>Schedules</Link>
        <Link to="/calculator" className='nav_link'>Calculator</Link>
        <Link to="/authentication" className='nav_link'>
          <img src={ProfileIcon} alt="Profile Icon" id='profile_icon'/>
        </Link>
    </header>
  );
}