import React, {useState} from 'react'
import Hero from '../Components/HeroSection';
import InfoSection from '../Components/InfoSection';
import Services from "../Components/Services";
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar';
import {homeObjOne, homeObjTwo, homeObjThree,} from '../Components/InfoSection/Data';
import Footer from '../Components/Footer';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }
    return (
        <>
           <Sidebar isOpen = {isOpen} toggle = {toggle} />
           <Navbar toggle = {toggle} />
           <Hero/>
           <InfoSection {...homeObjOne}/>
           <InfoSection {...homeObjTwo}/>
           <Services/>
           <InfoSection {...homeObjThree}/>
           <Footer/>
        </>
    )
} 

export default Home;
