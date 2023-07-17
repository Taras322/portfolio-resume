import "./styles/main.css";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

import Nav from "./components/nav/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import Skills from "./pages/Skills";

function App() {
  return (
    <div className="App">
        <Router>
            <Nav/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/skills' element={<Skills/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
            </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
