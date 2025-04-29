import "./Home.css";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";
import { Link } from "react-router-dom";

import Image1 from "../../Assets/Images/green_energy.jpg";
import Image2 from "../../Assets/Images/solar_panels.jpg";
import Image3 from "../../Assets/Images/ev_charging_stations_image.jpg";
import Image4 from "../../Assets/Images/smart_meter.jpg";
import Image5 from "../../Assets/Images/green_energy_2.jpg";
import Image6 from "../../Assets/Images/green_energy_4.jpg";
import Icon1 from "../../Assets/Icons/arrow_right_icon.svg";

export default function Home(){
    const textTitleHolder = "Empowering a Sustainable Future";
    const textInfoHolder = "Join us on our journey towards a greener tomorrow. Discover innovative solutions and sustainable practices that can transform our world one step at a time.";

    return(
        <div className="home_container">
            <WindTurbine textTitle={textTitleHolder} textInfo={textInfoHolder}/>
            <h1>Infuse Your Home with Positive Energy</h1>
            <div className="info_container">
                <div className="info_holder">
                    <img src={Image1} alt="Green Energy"/>
                    <p>Green energy refers to renewable energy sources, these energy 
                        sources produce little to no greenhouse gas emissions.</p>
                </div>
                <div className="info_holder">
                    <img src={Image2} alt="Solar Panels"/>
                    <p>Solar panels are devices that convert sunlight into electricity, they 
                        harness renewable energy from the sun, providing a clean and 
                        sustainable power source for homes and businesses. </p>
                </div>
                <div className="info_holder">
                    <img src={Image3} alt="EV Charging Station"/>
                    <p>EV charging stations are facilities that provide electric vehicle 
                        owners with the ability to recharge their vehicles' batteries.</p>
                </div>
                <div className="info_holder">
                    <img src={Image4} alt="Smart Meter"/>
                    <p>Smart home energy management involves 
                        using technology to monitor and control energy consumption. 
                        It includes devices like smart thermostats and energy monitors</p>
                </div>
            </div>
            <img src={Image5} alt="Save the Plannet"/>
            <div className="energy_change_container">
                <div className="energy_change_content">
                    <div className="energy_change_info">
                        <h1>Embracing Green Energy: A Pathway to a Sustainable Future</h1>
                        <h3>Green energy is not only crucial for reducing environmental 
                        harm but also offers social and economic advantages that benefit 
                        society as a whole.</h3>
                        <Link to="/cfreduction">Further Info <img src={Icon1} alt="Right Arrow key" className="arrow_icon"/></Link>
                    </div>
                    <div className="energy_change_image_container">
                        <img src={Image6} alt="Green Energy"/>
                    </div>
                </div>
            </div>
        </div>
    )

}