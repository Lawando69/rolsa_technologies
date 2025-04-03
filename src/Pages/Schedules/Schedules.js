import "./Schedules.css";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";
import Image1 from "../../Assets/Images/photovoltic_panels.jpg";
import Image2 from "../../Assets/Images/solar_panels.jpg";
import Image3 from "../../Assets/Images/small_wind_turbines.jpg";
import Image4 from "../../Assets/Images/commercial_energy_storage.jpg";

export default function Schedules(){
    const textTitleHolder = "#";
    const textInfoHolder = "#";




    return(
        <div className="schedules_container">
            <WindTurbine textTitle={textTitleHolder} textInfo={textInfoHolder}/>
            <div className="schedules_holder_upper">
                <div className="top_section">
                    <div className="text_container">
                        <h1>Solar Installation Booking Portal</h1>
                        <p>Installing solar panels involves several key steps, starting with 
                            a consultation and site assessment to evaluate energy needs and 
                            the suitability of the location. A customized solar system design 
                            is then created, followed by obtaining necessary permits and 
                            approvals from local authorities. The installation team mounts 
                            the solar panels, connects wiring, and installs inverters to 
                            convert solar energy into electricity.</p>
                        <button>Book Now</button>
                    </div>
                    <div className="image_container">
                        <img src={Image1} alt="Solar Panel" className="top_section_image"/>
                    </div>
                </div>
                <div className="lower_section">
                    <div className="image_container">
                        <img src={Image2} alt="Solar Panel" className="lower_section_image"/>
                    </div>
                    <div className="text_container">
                        <h1>Understanding Solar Installation Costs</h1>
                        <p>Understanding solar installation costs is crucial for anyone 
                            considering transitioning to solar energy. This comprehensive 
                            guide delves into the various factors that influence the overall 
                            expenses associated with solar panel systems, including equipment 
                            prices, installation labor, permits, and potential maintenance 
                            fees.</p>
                    </div>
                </div>
            </div>
            <div className="schedules_holder_middle">
                <div className="left_section">
                    <div className="info_holder">
                        <img src={Image3} alt="Small Wind Turbines"/>
                        <p>Solar panels offer numerous benefits to homes by harnessing 
                            sunlight to generate clean, renewable energy. By converting 
                            sunlight into electricity, solar panels can significantly 
                            reduce or even eliminate monthly electricity bills, leading 
                            to substantial long-term savings. They provide a reliable energy 
                            source, especially in remote areas or during power outages when 
                            combined with battery storage systems. Additionally, solar panels 
                            contribute to environmental sustainability by lowering carbon 
                            footprints and reliance on fossil fuels. Homeowners can also 
                            increase their property value while benefitting from incentives 
                            and rebates for solar installation.</p>
                    </div>
                </div>
                <div className="right_section">
                    <div className="info_holder second">
                        <img src={Image4} alt="Commercial Energy Storage"/>
                        <p>Solar panels have a profoundly positive impact on the environment 
                            by providing a clean and renewable source of energy. Unlike fossil 
                            fuels, which release harmful greenhouse gases and pollutants into 
                            the atmosphere when burned, solar energy production emits little to 
                            no emissions during operation. By generating electricity from 
                            sunlight, solar panels help reduce air and water pollution, 
                            contributing to cleaner air quality and a healthier ecosystem. 
                            Furthermore, increased use of solar energy decreases reliance on 
                            non-renewable resources, promoting energy independence and enhancing 
                            the sustainability of our energy systems.</p>
                    </div>
                </div>
            </div>
            <div className="schedules_holder_bottom">
                    <h1>Schedule Your Solar Panel Installation</h1>
                    <div className="booking_container">
                        <div className="booking_holder">
                            <div className="booking_content">
                                <div className="text_holder">
                                    <p>Booking can be easily done here, once you've finished your booking. You'll shortly get a call for confirmation of the booking.</p>
                                </div>
                            </div>
                            <div className="booking_content_lower">
                                <h1>Booking Details</h1>
                                <div className="booking_info">
                                    <label>
                                        <input type="text" placeholder="First name" className="booking_details"/>
                                        <input type="text" placeholder="Surname" className="booking_details"/>
                                    </label>
                                </div>
                                <div className="booking_info email">
                                    <label>
                                        <input type="email" placeholder="Email Address" className="booking_details_email"/>
                                    </label>
                                </div>
                                <div className="button_container">
                                    <button type="button" className="next_button">Next</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}