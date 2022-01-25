import styled from "styled-components";

export const Herowrapper=styled.div`
width: 90%;
  height: 50vh;
  background-color: #08090c;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const HeroImg = styled.img`
  width: 90%;
  height: 100%;
  margin-top: 20px;
  

  @media screen and (min-width: 768px) {
    width: 50%;
  }
`;
