import "./App.css";
// import Footer from "./Components/Fotter/Footer";
import NavbarBottom from "./Components/NavbarBottom/NavbarBottom";
import NavbarTop from "./Components/NavbarTop/NavbarTop";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavbarTop />
      <NavbarBottom />
      <Home />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
