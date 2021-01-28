import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarLinks, SideBtnWrap, SidebarRoute, SidebarMenu } from "./SidebarElements";

const Sidebar = ({isOpen, toggle}) => {
    return (
        <SidebarContainer isOpen = {isOpen} onClick = {toggle}>
            <Icon onClick = {toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLinks onClick = {toggle} to = "/about">About</SidebarLinks>
                    <SidebarLinks onClick = {toggle} to = "/discover">Discover</SidebarLinks>
                    <SidebarLinks onClick = {toggle} to = "/services">Our Services</SidebarLinks>
                    <SidebarLinks onClick = {toggle} to = "contact">Contact Us</SidebarLinks>
                    <SidebarLinks onClick = {toggle} to = "/signup">Sign Up</SidebarLinks> 
                </SidebarMenu>
                <SideBtnWrap>
                    <SidebarRoute to = '/signin'>Sign In</SidebarRoute>
                </SideBtnWrap>
            </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar;
