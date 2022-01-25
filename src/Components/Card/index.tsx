import React from "react";
import {
  CardWrapper,
  Chip,
  DetailContainer,
  DetailText,
  MainContainer,
  MainPrice,
  MoreBlock,
  OfferTitle,
  OldPrice,
  PriceContainer,
  Saved,
  Savings,
} from "./Styles";
import { FiCheck } from "react-icons/fi";
import ChipImg from "../../assets/chip.svg";

interface CardProps {
  title?: string;
  onCardClick(): any;
  active?: any;
  oldsp?: number;
  newsp?: number;
  offer_title?: string;
  saved_sp?: number;
  saved_prc?: string;
  detail_text?: string;
  popular?: boolean;
}
const Card = (props: CardProps) => {
  const {
    title,
    onCardClick,
    active,
    oldsp,
    newsp,
    popular,
    saved_sp,
    saved_prc,
    detail_text,
  } = props;
  return (
    <MainContainer>
      <CardWrapper onClick={onCardClick} active={active}>
        <DetailContainer>
          {popular ? <Chip src={ChipImg} /> : null}
          <OfferTitle>{title}</OfferTitle>
          <Savings>Savings : {saved_sp}</Savings>
          <MoreBlock>
            <Saved>{saved_prc} Saved</Saved>
            <DetailText>{detail_text}</DetailText>
          </MoreBlock>
        </DetailContainer>
        <PriceContainer>
          <MainPrice>₹{newsp}</MainPrice>
          <OldPrice>₹{oldsp}</OldPrice>
        </PriceContainer>
      </CardWrapper>
      {active ? (
        <FiCheck style={{ color: "#fff" }} />
      ) : (
        <FiCheck style={{ color: "#08090c" }} />
      )}
    </MainContainer>
  );
};

export default Card;