import './App.css';
import DesktopNavbar from './Components/DesktopNavbar/DesktopNavbar';
import Pages from "./Pages";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <DesktopNavbar/>
      <Pages/>
      <Footer/>
    </div>
  );
}

export default App;
