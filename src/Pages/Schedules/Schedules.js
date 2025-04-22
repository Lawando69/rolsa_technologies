import "./Schedules.css";
import { useState } from "react";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";
import Image1 from "../../Assets/Images/photovoltic_panels.jpg";
import Image2 from "../../Assets/Images/solar_panels.jpg";
import Image3 from "../../Assets/Images/small_wind_turbines.jpg";
import Image4 from "../../Assets/Images/commercial_energy_storage.jpg";

export default function Schedules(){
    const textTitleHolder = "Book Your Green Energy Installation Today";
    const textInfoHolder = "Ready to make the switch to sustainable living? Booking your green energy product installation is quick and easy.";
    
    const [currentStep, setCurrentStep] = useState(1);

    const handleNextStep = () => {
        setCurrentStep(currentStep + 1)
    }


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
                        <button onClick={()=> window.scroll({top: 4000, behavior: 'smooth'})}>Book Now</button>
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
                    {currentStep === 1 && (
                        <form onSubmit={handleNextStep}>
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
                                            <input type="text" placeholder="First name" className="booking_details" required/>
                                            <input type="text" placeholder="Surname" className="booking_details" required/>
                                        </label>
                                    </div>
                                    <div className="booking_info email">
                                        <label>
                                            <input type="email" placeholder="Email Address" className="booking_details_email" required/>
                                        </label>
                                    </div>
                                    <div className="button_container">
                                        <button type="submit" className="next_button">Next</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    {currentStep === 2 && (
                        <form onSubmit={handleNextStep}>
                            <div className="booking_holder_v2">
                                <div className="booking_content_v2">
                                    <div className="text_holder_v2">
                                        <p>Booking can be easily done here, once you've finished your booking. You'll shortly get a call for confirmation of the booking.</p>
                                    </div>
                                </div>
                                <div className="booking_content_lower_v2">
                                    <h1>Booking Details</h1>
                                    <div className="booking_info_v2">
                                        <label>
                                            <input type="text" placeholder="Street Address" className="booking_details_v2" required/>
                                            <input type="text" placeholder="City" className="booking_details_v2" required/>
                                        </label>
                                    </div>
                                    <div className="booking_info_lower_v2">
                                        <label>
                                            <input type="text" placeholder="County/State/Region" className="booking_details_lower_v2" required/>
                                            <input type="text" placeholder="Postal Code" className="booking_details_lower_v2" required/>
                                        </label>
                                    </div>
                                    <div className="button_container_v2">
                                        <button type="submit" className="next_button_v2">Next</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    {currentStep === 3 && (
                        <form onSubmit={handleNextStep}>
                            <div className="booking_holder_v3">
                                <div className="booking_content_v3">
                                    <div className="text_holder_v3">
                                        <p>Booking can be easily done here, once you've finished your booking. You'll shortly get a call for confirmation of the booking.</p>
                                    </div>
                                </div>
                                <div className="booking_content_lower_v3">
                                    <h1>What installation(s) do you require?</h1>
                                    <div className="booking_info_v3">
                                        <label className="booking_details_v3">Solar Panels <input type="checkbox" className="booking_checkbox_v3"/></label>     
                                        <label className="booking_details_v3">Smart Meters <input type="checkbox" className="booking_checkbox_v3"/></label>    
                                        <lable className="booking_details_v3">EV Charing Stations <input type="checkbox" className="booking_checkbox_v3" defaultChecked/></lable>    
                                    </div>
                                    <div className="button_cotainer_v3">
                                        <button type="submit" className="next_button_v3">Next</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    )}
                    {currentStep === 4 && (
                        <div className="booking_holder_v4">
                            <div className="booking_content_v4">
                                <div className="text_holder_v4">
                                    <p>Booking can be easily done here, once you've finished your booking. You'll shortly get a call for confirmation of the booking.</p>
                                </div>
                            </div>
                            <div className="booking_content_lower_v4">
                                <div className="booking_confirmation">
                                    <p>Thank you for arranging a booking schedule with us regarding the installations of the products selected. Everythings almost complete, we will contact you shortly to discuss further steps.</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}