import React from 'react';
import {animateScroll as scroll} from 'react-scroll';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa';
import { FooterContainer,  
    FooterLink, 
    FooterLinkItems, 
    FooterLinksContainer, 
    FooterWrap, 
    FooterLinkTitle, 
    FooterLinksWrapper, 
    SocialMediaWrap,
    SocialIconLink,
    SocialLogo, SocialMedia,
    WebsiteRight,
    SocialIcons
} from "./FooterElements";

const Footer = () => {

    const scrollHome = () => {
        scroll.scrollToTop();
    }
    return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to = "/services">Our Services</FooterLink>
                            <FooterLink to = "/discover">Discover</FooterLink>
                            <FooterLink to = "/coursesforkids">Courses for Kids</FooterLink>
                            <FooterLink to = "/coursesforadults">Courses for Adults</FooterLink>
                            <FooterLink to = "/digitalskills">Learn Digital Skills for Free</FooterLink>
                            <FooterLink to = "/contact">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Product and Services </FooterLinkTitle>
                            <FooterLink to = "/services">Our Services</FooterLink>
                            <FooterLink to = "/discover">Discover</FooterLink>
                            <FooterLink to = "/coursesforkids">Courses for Kids</FooterLink>
                            <FooterLink to = "/coursesforadults">Courses for Adults</FooterLink>
                            <FooterLink to = "/digitalskills">Learn Digital Skills for Free</FooterLink>
                            <FooterLink to = "/contact">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle> About us </FooterLinkTitle>
                            <FooterLink to = "/services">Our Services</FooterLink>
                            <FooterLink to = "/discover">Discover</FooterLink>
                            <FooterLink to = "/coursesforkids">Courses for Kids</FooterLink>
                            <FooterLink to = "/coursesforadults">Courses for Adults</FooterLink>
                            <FooterLink to = "/digitalskills">Learn Digital Skills for Free</FooterLink>
                            <FooterLink to = "/contact">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle> Product and Services </FooterLinkTitle>
                            <FooterLink to = "/services">Our Services</FooterLink>
                            <FooterLink to = "/discover">Discover</FooterLink>
                            <FooterLink to = "/coursesforkids">Courses for Kids</FooterLink>
                            <FooterLink to = "/coursesforadults">Courses for Adults</FooterLink>
                            <FooterLink to = "/digitalskills">Learn Digital Skills for Free</FooterLink>
                            <FooterLink to = "/contact">Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to = "/" onClick = {scrollHome}>
                        Koko Starters
                    </SocialLogo>
                    <WebsiteRight> Koko Starters @ {new Date().getFullYear()} All rights Reserved.</WebsiteRight>
                    <SocialIcons>
                        <SocialIconLink href = "/" target = "_blank" aria-label = "Facebook">
                            <FaFacebook/>
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label = "Intagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label = "Twitter">
                            <FaTwitter/>
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label = "Youtube">
                            <FaYoutube/>
                        </SocialIconLink>
                        <SocialIconLink href = "/" target = "_blank" aria-label = "LinkedIn">
                            <FaLinkedin/>
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
    )
}

export default Footer;
