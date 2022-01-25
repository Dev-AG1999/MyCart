import styled from "styled-components";

interface CrdStyle {
  active: boolean;
}
export const MainContainer = styled.div`
  display: flex;
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 768px) {
    width: 40%;
  }
`;
export const CardWrapper = styled.div<CrdStyle>`
  width: 90%;
  height: 100px;
  background-color: ${(props) => (props.active ? "#374B5B" : "#21272c")};
  border-radius: 10px;
  margin: 5px;
  border: 2px solid ${(props) => (props.active ? "white" : "none")};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const DetailContainer = styled.div`
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  padding: 5px;
`;

export const Chip = styled.img`
  width: 70px;
  height: 15px;
  margin-right: 45%;
`;
export const OfferTitle = styled.span`
  font-weight: bold;
  font-size: 16px;
  color: #fff;
`;

export const Savings = styled.span`
  color: #465d68;
  font-size: 14px;
  margin-right: 45%;
`;

export const MoreBlock = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const Saved = styled.span`
  color: #24db6d;
  font-size: 12px;
  font-weight: bold;
  text-align: left;
`;

export const DetailText = styled.span`
  color: #db9d24;
  font-weight: bold;
  font-size: 12px;
`;

export const PriceContainer = styled.div`
  width: 35%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainPrice = styled.span`
  color: #fff;

  font-size: 19px;
  margin: 10px;
`;

export const OldPrice = styled.span`
  color: #4c6070;
  font-size: 19px;
  text-decoration: line-through;
`;
