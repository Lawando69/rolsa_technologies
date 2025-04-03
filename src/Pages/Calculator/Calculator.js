import "./Calculator.css";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";

import { useState } from "react";

export default function Calculator(){
    const [monthlyElectricity, setMonthlyElectricity] = useState(0);
    const [monthlyGas, setMonthlyGas] = useState(0);
    const [yearlyMileage, setYearlyMileage] = useState(0);
    const [yearlyFlights, setYearlyFlights] = useState(0);
    const [newspaper, setNewspaper] = useState(null);
    const [aluminumTin, setAluminumTin] = useState(null);
    const [footprint, setFootprint] = useState(null);
    
    // NOTE: Text info for the windTurbine image
    const textTitleHolder = "#";
    const textInfoHolder = "#";

    // NOTE: Feature to target the value of the inputs and setting it to the const
    const handleElectricityChange = (e) => {setMonthlyElectricity(Number(e.target.value));}
    const handleGasChange = (e) => {setMonthlyGas(Number(e.target.value));}
    const handleMileageChange = (e) => {setYearlyMileage(Number(e.target.value));}
    const handleFlightsChange = (e) => {setYearlyFlights(Number(e.target.value));}


    function FootprintCalculator(yesNews, noNews, yesAlu, noAlu){
        // NOTE: Calculation for each input
        const electricityFootprint = monthlyElectricity * 105;
        const gasFootprint = monthlyGas * 105;
        const mileageFootprint = yearlyMileage * 0.79;
        const flightsFootprint = yearlyFlights * 1100;
        const newspaperFootprint = 184;
        const aluminumTinFootprint = 166;
        let totalFootprint = 0;

        if (monthlyElectricity < 0 || monthlyGas < 0 || yearlyMileage < 0 || yearlyFlights < 0) {
            alert("All input values must be non-negative.");
            return;
        }

        // NOTE: Check if newspaper / aluminum & tin are selected
        if(yesNews && yesAlu){
            totalFootprint = electricityFootprint + gasFootprint + mileageFootprint + flightsFootprint + newspaperFootprint + aluminumTinFootprint;
        } else if (yesNews && noAlu){
            totalFootprint = electricityFootprint + gasFootprint + mileageFootprint + flightsFootprint + newspaperFootprint;
        } else if (noNews && yesAlu){
            totalFootprint = electricityFootprint + gasFootprint + mileageFootprint + flightsFootprint + aluminumTinFootprint;
        } else if(noNews && noAlu){
            totalFootprint = electricityFootprint + gasFootprint + mileageFootprint + flightsFootprint;
        }
        
        setFootprint(totalFootprint);
    };

    return(
        <div className="calculator_container">
            <WindTurbine textTitle={textTitleHolder} textInfo={textInfoHolder}/>
            {/* TODO: Add the title and info content */}
            <div className="calculator_holder">
                <h1>Carbon Footprint Calculator</h1>
                <div className="calculator_content">
                    <label>
                        Monthly Electricity Usage: <input type="number" value={monthlyElectricity} onChange={handleElectricityChange}/>
                    </label>
                </div>
                <div className="calculator_content">
                    <label>
                        Monthly Gas Usage: <input type="number" value={monthlyGas} onChange={handleGasChange}/>
                    </label>
                </div>
                <div className="calculator_content">
                    <label>
                        Yearly Mileage (car): <input type="number" value={yearlyMileage} onChange={handleMileageChange}/>
                    </label>
                </div>
                <div className="calculator_content">
                    <label>
                        Yearly Flights (4 hours or less): <input type="number" value={yearlyFlights} onChange={handleFlightsChange}/>
                    </label>
                </div>
                <div className="calculator_content">
                    <label> Do you recycle Newspaper?
                        <input type="radio" value="yes" name="newspaper" onChange={() => setNewspaper("yes")}/> Yes
                        <input type="radio" value="no" name="newspaper" onChange={() => setNewspaper("no")}/> No
                    </label>
                </div>
                <div className="calculator_content">
                    <label> Do you recycle aluminum and tin?
                        <input type="radio" value="yes" name="aluminumTin" onChange={() => setAluminumTin("yes")}/> Yes
                        <input type="radio" value="no" name="aluminumTin" onChange={() => setAluminumTin("no")}/> No
                    </label>
                </div>
                <button onClick={() => FootprintCalculator(newspaper === "yes", newspaper === "no", aluminumTin === "yes", aluminumTin === "no")}>Calculate Carbon Footprint Usage</button>
                {/* NOTE: if statement to ensure that the result is given if the value is not null */}
                {footprint !== null && (
                    <div className="calculator_result open">
                        <h4>Total amount of carbon footprint: {footprint?.toFixed(2) || 0} pounds per year</h4>
                    </div>
                )}
                {footprint === 0 && (
                    <div className="calculator_error_message">
                        <h4>ERROR: Calculation can only occur once all details have been given.</h4>
                    </div>
                )}
                {footprint > 0 && footprint < 6000 && (
                    <div className="calculator_result_message exlow">
                        <h4>Your Carbon Footprint Usage amount is really low.</h4>
                    </div>
                )}
                {footprint >= 6000 && footprint <= 15999 && (
                    <div className="calculator_result_message low">
                        <h4>Your Carbon Footprint Usage is in the ideal category.</h4>
                    </div>
                )}
                {footprint >= 16000 && footprint <= 22000 && (
                    <div className="calculator_result_message medium">
                        <h4>Your Carbon Footprint Usage is in the average category.</h4>
                    </div>
                )}
                {footprint > 22000 && footprint <= 500000 && (
                    <div className="calculator_result_message high">
                        <h4>Your Carbon Footprint Usage is really high. Visit <a href="/cfreduction">Carbon Footprint Reduction</a> to figure out methods to reduce carbon footprint.</h4>
                    </div>
                )}
                {footprint > 500000 && (
                    <div className="calculator_error_message limit">
                        <h4>The amount entered has exceed the calculation for this program.</h4>
                        <h4>Limit amount accepted: 500000</h4>
                    </div>
                    
                )}
            </div>
        </div>
    )
}