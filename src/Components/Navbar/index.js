import React, {useEffect, useState} from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import {animateScroll as scroll} from 'react-scroll';
import { Nav, NavLogo,NavBtnLink, NavBtn,  NavbarContainer, MobileIcon, NavItem, NavMenu, NavLinks} from "./NavbarElements";

const Navbar = ({toggle}) => {

    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if (window.scrollY >= 80){
            setScrollNav(true)
        }else{
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])

    const scrollHome = () => {
        scroll.scrollToTop();
    }
    return (
        <>
        <IconContext.Provider value = {{color: '#000'}}>
        <Nav scrollNav = {scrollNav}>
            <NavbarContainer>
                <NavLogo to = "/" onClick = {scrollHome} src = {'logo.png'} alt = 'Koko Partners'/>
                <MobileIcon onClick = {toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to= "/about"
                        smooth = {true} exact = "true" offset = {-80} duration = {500} spy = {true} >
                        About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/discover"
                        smooth = {true} exact = "true" offset = {-80} duration = {500} spy = {true} >
                        Discover</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/services"
                        smooth = {true} exact = "true" offset = {-80} duration = {500} spy = {true} >
                        Our Services</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/contact"
                        smooth = {true} exact = "true" offset = {-80} duration = {500} spy = {true} >
                        Contact Us</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to= "/signup"
                        smooth = {true} exact = "true" offset = {-80} duration = {500} spy = {true} >
                        Sign Up</NavLinks>
                    </NavItem>

                    <NavBtn>
                        <NavBtnLink to = "/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavMenu>

            </NavbarContainer>
        </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar;
