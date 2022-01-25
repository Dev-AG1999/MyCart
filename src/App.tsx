import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import React, { useState } from "react";

import Header from "./Components/Header";
import Hero from "./Components/Hero";
import hero from "./assets/hero.png";
import Content from "./Components/Content";
import rate from "../../assets/rate.svg";
import Button from './Components/Button';
import data from "./data/data.json";
import Card from "./Components/Card";
import ChipImg from "../../assets/chip.svg";
import { BsCart } from "react-icons/bs";




function App() {
  const [added, setadded] = useState(false);
const [active, setactive] = useState(false);
const [selection, setselection] = useState(0);

  

  const CardContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  `;
  return (
   <>
    
    <Header addedtocart={added} />

    
    <Hero></Hero>
    <Content></Content>
    
   
    <CardContainer>
        {data.map((i) => (
          <Card
            key={i.id}
            title={i.offer_title}
            onCardClick={() => setselection(i.id)}
            active={selection === i.id ? true : false}
            oldsp={i.oldsp}
            newsp={i.newsp}
            popular={i.popular}
            saved_sp={i.savings}
            saved_prc={i.percent}
            detail_text={i.details}
          />
        ))}
      </CardContainer>
      <Button
         title="ADD TO CART"
         icon={
           <BsCart style={{ color: "#fff", fontSize: 22, fontWeight: "bold" }} />
         }
         onPress={() => {selection!=0 ? setadded(true):alert("Please select a plan to add")}}
       />
      
    
    </>
  );
};

export default App;
