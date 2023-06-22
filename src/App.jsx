import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import About from './Pages/About';
import Contact from './Pages/Contact';
import Product from './Pages/Product';

function App() {
  return(
    <div className='App'>
    <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/product" element={<Product/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/contact" element={<Contact/>} />
      </Routes>
      <Footer/>
    </Router>
  </div>
  
  );
}

export default App;
