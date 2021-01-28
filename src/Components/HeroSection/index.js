import React, {useState}   from 'react';
import Video from "../../videos/video.mov";
import { Button } from "../ButtonElement";
import { 
    HeroContainer, 
    HeroBg, 
    VideoBg, 
    HeroContent, 
    HeroH1, 
    HeroP, 
    HeroBtnWrapper, 
    ArrowForward, 
    ArrowRight} from "./HeroElement";

const Hero = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }
    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <VideoBg autoPlay loop muted src = {Video} type = 'videos/mp4'/>
                </HeroBg>
                <HeroContent>
                    <HeroH1>
                        Connecting you to the best Schools, Hospitals, Hotels and Apartments found in Zambia.
                    </HeroH1>
                    <HeroP>
                        Become a Partner and receive notifications about the latest deals on the market.
                    </HeroP>
                    <HeroBtnWrapper>
                        <Button to = 'signup' onMouseEnter = {onHover} onMouseLeave = {onHover}
                        primary = 'true'
                        dark = 'primary'
                        >
                            Get Started { hover ? <ArrowForward/> : <ArrowRight/>}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero;
