import React from 'react';
import {Contentwrapper,Heading,Para,MainPrice,PriceWrap,PrevPrice,RatingWrapper,Star,StarText,ClickableText} from "./Styles";
import rate from "../../assets/rate.svg.svg";

function Content() {
  return (
      <Contentwrapper>
          <Heading>Everyday rinse and reload</Heading>
          <Para>Achieve your dream skin goal with this complete package of skincare produts that will rejuvenate your day.</Para>
          
          <RatingWrapper>
              <Star src={rate}/>
              <StarText>4.5</StarText>
              <ClickableText>Click here to read reviews</ClickableText>
          </RatingWrapper>
          <PriceWrap>
              <MainPrice>₹899</MainPrice>
              <PrevPrice>₹1299</PrevPrice>
          </PriceWrap>
      </Contentwrapper>
  );
}

export default Content;
