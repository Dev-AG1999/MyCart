import React from 'react';
import {Herowrapper,HeroImg} from "./Styles";
import hero from '../../assets/hero.png';

const Hero=()=>{
    return(
<Herowrapper>
<HeroImg src={hero}/>
</Herowrapper>

    );
}
export default Hero;
