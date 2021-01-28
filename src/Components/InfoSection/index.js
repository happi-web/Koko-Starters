import React from 'react';
import { Button } from "../ButtonElement";
import { InfoRow, InfoContainer, 
    InfoWrapper, 
    Column1, 
    TextWrapper, 
    TopLine, 
    Img, 
    BtnWrap, 
    SubTitle, 
    Heading, 
    Column2, 
    ImgWrap } from "./InfoElements";

const InfoSection = ({
    lightText,
    lightBg, 
    dark, 
    dark2, 
    id, 
    image,  
    imgStart, 
    topLine, 
    headline, 
    description,
     darkText, 
     alt, 
     buttonLabel}) => {
    return (
        <>
           <InfoContainer lightBg = {lightBg} id = {id}>
               <InfoWrapper>
                   <InfoRow imgStart = {imgStart}>
                       <Column1>
                       <TextWrapper>
                           <TopLine>{topLine}</TopLine>
                           <Heading lightText = {lightText}>{headline}</Heading>
                           <SubTitle darkText = {darkText}>{description}</SubTitle>
                           <BtnWrap>
                               <Button to = 'home' smooth = 'true' dark = 'true' dark2 = {dark2 ? 0 : 1} exact = "true" offset = {-80} duration = {500} spy = 'true' >{buttonLabel}</Button>
                           </BtnWrap>
                       </TextWrapper>
                       </Column1>
                       <Column2>
                        <ImgWrap>
                                <Img src= {image} alt = {alt}/>
                        </ImgWrap>
                       </Column2>
                   </InfoRow>
               </InfoWrapper>
            </InfoContainer> 
        </>
    )
}

export default InfoSection;
