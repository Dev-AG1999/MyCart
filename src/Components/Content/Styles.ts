import styled from "styled-components";
export const Contentwrapper=styled.div`
width: 88.7%;
  background-color: #08090c;
  max-height: 35vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;
export const Heading = styled.h1`
  font-style: bold;
  color: #fff;
  word-wrap: normal;
  padding: 10px;
`;

export const Para = styled.p`
  padding: 10px;
  color: #c4cacf;
  font-size: 12px;
  margin-top: -10px;
`;

export const MainPrice = styled.h3`
  color: #fff;
  font-size: 32px;
`;

export const PriceWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 5px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const PrevPrice = styled.h3`
  color: #3c464f;
  font-size: 32px;
  text-decoration: line-through;
  margin-left: 10px;
  font-weight: 200;
`;

export const RatingWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;

export const Star = styled.img`
  height: 30px;
  width: 60px;
  margin-left: 5px;
  margin-right: 10px;
`;

export const StarText = styled.span`
  font-size: 16px;
  color: #fff;
  font-weight: bold;
  margin-right: 10px;
`;

export const ClickableText = styled.span`
  color: #424648;
  font-size: 12px;
`;
