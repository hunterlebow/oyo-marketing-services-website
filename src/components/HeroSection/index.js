import React, { useState } from 'react';
import { Button } from '../ButtonElements';


// import Video from '../../videos/video.mp4';
// import Video from '../../videos/video.mov';
// import Video from '../../videos/_video.mov';
import Video from '../../videos/animation.mp4';

import {
  HeroContainer,
  HeroBckgrnd,
  VideoBckgrnd,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from './HeroElements';

const HeroSection = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };

  return (
    <HeroContainer id="home">
      <HeroBckgrnd>
        <VideoBckgrnd
          autoPlay
          loop
          muted
          src={Video}
          type="/video/mp4"
        ></VideoBckgrnd>
      </HeroBckgrnd>
      <HeroContent>
        <HeroH1>
          {/* Own Your Own Marketing */}
          </HeroH1>
        <HeroP>
          {/* Expand your audience by using our services today! */}
          </HeroP>
        <HeroBtnWrapper>
          <Button
            to="signup"
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default HeroSection;
