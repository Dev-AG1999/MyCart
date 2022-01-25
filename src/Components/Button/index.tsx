import React from "react";
import { ButtonContainer, ButtonTitle, ButtonWrapper } from "./Styles";
interface ButtonProps {
    title:string;
    onPress():any;
    icon?:any;
}
const Button=(props:ButtonProps)=>{
    const { title, onPress, icon } = props;
   
    return(
        <ButtonContainer>
            <ButtonWrapper onClick={onPress}>
               {icon}
                <ButtonTitle>{title} </ButtonTitle>
            </ButtonWrapper>
        </ButtonContainer>
    );
}
export default Button;