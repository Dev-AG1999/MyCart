import styled from "styled-components";

export const ButtonContainer = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
`;
export const ButtonWrapper = styled.div`
  height: 50px;
  width: 80%;
  background-color: #13324a;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  padding: 10px;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;

export const ButtonTitle = styled.span`
  color: #fff;
  margin-left: -50px;
  font-weight: bold;
`;
