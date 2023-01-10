import React, {useState} from 'react';
import Header from "../Header/Header";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import Footer from "../Footer/Footer";
import './Landing.css'

const Landing = () => {
    const [navbar, setNavbar] = useState(false);
    const menuHandler = () => {
        setNavbar(!navbar)
    }
    return (
        <div className={'wrapper'}>
            <Header
                menuHandler={menuHandler}/>
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Landing;