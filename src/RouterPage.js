import react from "react";
import { BrowserRouter as Router , Routes , Route } from "react-router-dom";
import Header from "./Header";
import About from "./About";
import Home from "./Home";
import Icecream from "./Icecream";
import Services from "./Services";
import Blog from "./Blog";
import Contact from "./Contact";

function RouterPage() {
    return (
        <Router>
            <Header></Header>
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/home" element={<Home></Home>}></Route>
                <Route path="/about" element={<About></About>}></Route>
                <Route path="/icecream" element={<Icecream></Icecream>}></Route>
                <Route path="/Services" element={<Services></Services>}></Route>
                <Route path="/Blog" element={<Blog></Blog>}></Route>
                <Route path="/contact" element={<Contact></Contact>}></Route>
            </Routes>
        </Router>
    );
}

export default RouterPage;