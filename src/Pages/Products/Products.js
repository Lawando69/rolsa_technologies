import "./Products.css";
import WindTurbine from "../../Components/WindTurbine/WindTurbine";
import ProductList from "../../Components/ProductList/ProductList";

export default function Products(){
    const textTitleHolder = "Top Eco-Friendly Energy Products for a Sustainable Future";
    const textInfoHolder = "The transition to sustainable energy solutions has become increasingly vital due to climate change.";

    return(
        <div className="products_container">
            {/* TODO: Set title holder and info holder */}
            <WindTurbine textTitle={textTitleHolder} textInfo={textInfoHolder}/> 
            <h1>A Comprehensive List of Green Energy Products</h1>
            <ProductList/>
        </div>
        
    )
}