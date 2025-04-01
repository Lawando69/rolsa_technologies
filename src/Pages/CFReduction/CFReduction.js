import "./CFReduction.css";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";

import Image1 from "../../Assets/Images/green_energy.jpg";
import Image2 from "../../Assets/Images/solar_panels.jpg";
import Image4 from "../../Assets/Images/smart_meter.jpg";

export default function CFReduction(){
    const textTitleHolder = "Steps to a Greener Tomorrow: Strategies for Carbon Footprint Reduction";
    const textInfoHolder = "Reducing our carbon footprint has emerged as a crucial endeavor for individuals.";

    return(
        <div className="c_f_reduction_container">
            <WindTurbine textTitle={textTitleHolder} textInfo={textInfoHolder}/>
            <h1>Strategies for Reducing Your Carbon Footprint</h1>
            <div className="info_container2">
                <div className="info_holder2">
                    <img src={Image1} alt="Green Energy"/>
                    <p>Green energy refers to renewable energy sources, these energy 
                        sources produce little to no greenhouse gas emissions.</p>
                </div>
                <div className="info_holder2">
                    <img src={Image2} alt="Solar Panels"/>
                    <p>Solar panels are devices that convert sunlight into electricity, they 
                        harness renewable energy from the sun, providing a clean and 
                        sustainable power source for homes and businesses. </p>
                </div>
                <div className="info_holder2">
                    <img src={Image4} alt="Smart Meter"/>
                    <p>Smart home energy management involves 
                        using technology to monitor and control energy consumption. 
                        It includes devices like smart thermostats and energy monitors</p>
                </div>
            </div>
            <div className="main_info_container">
                <div className="main_info_holder">
                    <h1>Small Steps, Big Impact: Your Guide to Reducing Carbon Footprint</h1>
                    <p>Reducing your carbon footprint is essential for combating climate change 
                        and promoting a healthier planet. One effective way to achieve this is 
                        through energy efficiency at home by upgrading to energy-efficient 
                        appliances, using LED lighting, and installing smart thermostats. 
                        Sustainable transportation options, such as utilizing public transport, 
                        carpooling, or biking for short distances, can also minimize emissions. 
                        Additionally, practicing the principles of reduce, reuse, and recycle 
                        by minimizing waste, composting organic materials, and donating 
                        unwanted items is crucial. Adopting sustainable food choices—such 
                        as eating local, incorporating more plant-based meals, and reducing 
                        food waste—can significantly impact your carbon footprint. Water 
                        conservation through low-flow fixtures and mindful usage further 
                        contributes to sustainability. Transitioning to renewable energy 
                        sources, whether by switching to solar power or choosing green energy 
                        suppliers, can reduce reliance on fossil fuels. Supporting sustainable 
                        practices by buying from eco-friendly brands, engaging in advocacy, 
                        and making mindful consumption choices—like purchasing second-hand 
                        items—will enhance your efforts. By making these conscious choices 
                        in your daily life, you can collectively make a significant difference 
                        in reducing your carbon footprint, as every effort counts in the fight 
                        against climate change. Furthering your efforts to reduce your carbon footprint 
                        involves integrating sustainable practices into your lifestyle and making conscious 
                        decisions that prioritize the environment. Start by embracing ethical consumerism; 
                        research brands to ensure they engage in eco-friendly production methods and support fair 
                        labor practices. This approach not only helps you make informed purchasing decisions but 
                        also encourages companies to operate sustainably. Additionally, adopting a minimalist 
                        lifestyle can help you evaluate your belongings, keeping only what you truly need and 
                        love, thereby reducing consumption and waste. Consider gifting experiences instead 
                        of physical items, or choose gifts made from sustainable materials, promoting mindful 
                        consumption among your friends and family. As you champion these changes, staying 
                        informed about climate issues is crucial. Engage actively with local policymakers and 
                        community initiatives that focus on reducing carbon emissions, such as tree planting 
                        or local sustainability programs. Your advocacy can influence policies and foster 
                        community awareness around environmental stewardship. By taking these steps, you 
                        contribute not just to personal sustainability, but also to a collective movement 
                        towards a healthier planet, inspiring those around you to join in making a lasting 
                        impact on the environment.</p>
                </div>
            </div>
        </div>
    )
}