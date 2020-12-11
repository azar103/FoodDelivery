import React from "react";
import styled from "styled-components";
const FOOTERDIV = styled.div`
  margin-top: 1rem;
  padding: 3px;
  background-color: #296089;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  text-align: center;
  color: #fff;
`;
const Footer = () => {
  return (
    <FOOTERDIV>
      Made by Anis Zarrouk
      <p>Copyright © Foodocity</p>
    </FOOTERDIV>
  );
};

export default Footer;
