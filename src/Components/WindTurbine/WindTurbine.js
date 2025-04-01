import "./WindTurbine.css"
import WindTurbineImage from "../../Assets/Images/green_energy_3.jpg";

//This function will be used on the Home page
//Allows for text to be imbedded into the image, visual wise.
export default function WindTurbine({textTitle, textInfo}){
    return(
        <div className="wind_turbine_container">
            <img src={WindTurbineImage} alt="WindTurbine Stock" className="wind_turbine_image"/>
            <div className="text_container">
                <h1 className="text">{textTitle}</h1>
                <h3 className="text">{textInfo}</h3>
            </div>    
        </div>

    )
}



