import React from 'react';
import Icon1 from '../../images/one.svg';
import Icon2 from '../../images/one.svg';
import Icon3 from '../../images/one.svg';
import Icon4 from '../../images/one.svg';
import { ServicesCard,ServicesContainer,ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from "./ServicesElement";

const Services = () => {
    return (
        <>
        <ServicesContainer id = "/services">
            <ServicesH1>Our Services</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src = {Icon1}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your Fees and increase your overall benefit</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon2}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your Fees and increase your overall benefit</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon3}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your Fees and increase your overall benefit</ServicesP>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src = {Icon4}/>
                    <ServicesH2>Reduce Expenses</ServicesH2>
                    <ServicesP>We help reduce your Fees and increase your overall benefit</ServicesP>
                </ServicesCard>
            </ServicesWrapper>
        </ServicesContainer>
            
        </>
    )
}

export default Services;
