import "./App.css";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import {products} from "./data/products";
import Modal from "./Components/Modal";
import "./Components/Modal";
function App() {

  return (
    <>
    <Navbar/>
    <Cards products = {products}/>
    <Footer/>
    <Modal/>
    
     
    
    </>
  );
}

export default App;
