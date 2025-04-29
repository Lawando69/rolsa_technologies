import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import CFReduction from "./Pages/CFReduction/CFReduction";
import Schedules from "./Pages/Schedules/Schedules";
import Calculator from "./Pages/Calculator/Calculator";
import Authentication from "./Pages/Authentication/Authentication";
import TermsConditions from "./Pages/TermsConditions/TermsConditions";



//This function sets the paths for each page of the digital solution
export default function Pages(){
    return(
        <main id="page_content">
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/products" element={<Products/>}></Route>
                <Route path="/cfreduction" element={<CFReduction/>}></Route>
                <Route path="/schedules" element={<Schedules/>}></Route>
                <Route path="/calculator" element={<Calculator/>}></Route>
                <Route path="/authentication" element={<Authentication/>}></Route>
                <Route path="/termsconds" element={<TermsConditions/>}></Route>
            </Routes>
        </main>
    )
}
