import "./ProductList.css";

import Image2 from "../../Assets/Images/battery_electric_vehicles.jpg";
import Image3 from "../../Assets/Images/commercial_energy_storage.jpg";
import Image4 from "../../Assets/Images/commercial_wind_farms.jpg";
import Image5 from "../../Assets/Images/energy_efficient_leds.jpg";
import Image6 from "../../Assets/Images/home_energy_storage.jpg";
import Image7 from "../../Assets/Images/photovoltic_panels.jpg";
import Image8 from "../../Assets/Images/small_wind_turbines.jpg";
import Image9 from "../../Assets/Images/smart_thermostats.jpg";
import Image10 from "../../Assets/Images/solar_water_heaters.jpg";

export default function ProductList(){
    return(
        <div className="product_list_container">
            <div className="product_list_holder">
                <div className="product_list">
                    <img
                        src={Image2}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Battery electric vehicles</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image3}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Commercial energy storage</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image4}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Commercial wind farms</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image5}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Energy efficient leds</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image6}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Home energy storage</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image7}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Photovoltic panels</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image8}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Small wind turbines</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image9}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Smart thermostats</p>
                </div>
                <div className="product_list">
                    <img
                        src={Image10}
                        className="product_image"
                        alt="Product Items"
                    />
                    <p>Solar water heaters</p>
                </div>
            </div>
        </div>
    )
}