import React from 'react';
import { Headercontainer,Iconwrapper } from './Styles';
import { FaBars } from "react-icons/fa";
import { BsCart, BsCartCheckFill } from "react-icons/bs";

interface HeaderProps {
    addedtocart?: boolean;
  }
  const Header = (props: HeaderProps) => {
    const { addedtocart } = props;
    return (
      <Headercontainer>
        <Iconwrapper>
          <FaBars style={{ color: "#fff", fontSize: 22 }} />
          {addedtocart ? (
            <BsCartCheckFill style={{ color: "#24db6d", fontSize: 22 }} />
          ) : (
            <BsCart style={{ color: "#fff", fontSize: 22 }} />
          )}
        </Iconwrapper>
      </Headercontainer>
    );

}
export default Header;
  
