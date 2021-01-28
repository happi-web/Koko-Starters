import styled from 'styled-components'
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: ${({ scrollNav}) => (scrollNav ? "#f5cb70" : "white")};
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  border-bottom:1px solid #C9B8FD;

  @media screen and (max-width: 960px){
      transition: 0.8s all ease;
  }

`;
export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 1;
    width:100%;
    height: 80px;
    padding:0 15px;
    max-width:1300px;
`;
export const NavLogo = styled.img`
    display: flex;
    width : 240px;
    objectFit: contain;
    margin: 0px 10px 0px 10px;

    @media screen and (max-width:270px) {
        display:none;
    }
`;
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px){
    display: none;
} 
`;
export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: rgb(255, 153, 0);
white-space: nowrap;
padding: 10px 22px;
color: black;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
  transition: all 0.2s ease-in-out;
  background: #808000;
  color: #010606;
}
`;

export const MobileIcon = styled.div`
display:none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:#000;
}

`;
export const NavMenu= styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;

@media screen and (max-width:768px) {
    display:none;
}
`;

export const NavItem = styled.li`
    height: 80px; 
`;
export const NavLinks = styled(LinkS)`
     color: #000080;
     display: flex;
     align-items: center;
     text-decoration: none;
     padding:0 1rem;
     height: 100%;
     cursor: pointer;
     font-weight:bolder;

     &.active{
         border-bottom: 3px solid #800000;
     }
`;
