import React from "react";
import styled from "styled-components";
import photo from "../photo.png";
const HOMEHEADER = styled.div`
  display: flex;
  margin: 34px;
  padding: 5px;
  height: 500px;
  justify-content: space-between;
`;
const HOMEHEADERRIGHT = styled.div`
  font-size: 20px;
`;
const HOMEHEADERLEFTTITLE = styled.h2`
  color: #296089;
  color: "#FFF";
  font-size: 45px;
`;
const HOMEHEADERLEFT = styled.div`
  font-size: 20px;
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  background-color: #e2474d;
  padding: 5px;
  color: #fff;
  width: 150px;
  border: none;
  padding: 10px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 13px;
  margin-top: 20px;
  &:hover {
    opacity: 0.8px;
  }
`;
const IMG = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Home = () => {
  return (
    <HOMEHEADER>
      <HOMEHEADERLEFT>
        <HOMEHEADERLEFTTITLE>Safe Food Delivery</HOMEHEADERLEFTTITLE>
        <p>
          Eu occaecat aute sunt occaecat excepteur
          <br /> nostrud velit nulla nisi do velit duis eiusmod.
          <br /> Do reprehenderit excepteur deserunt veniam
          <br />
          reprehenderit.Adipisicing ut pariatur amet <br />
          consequat excepteur esse.
        </p>
        <Button>Order Now!</Button>
      </HOMEHEADERLEFT>
      <HOMEHEADERRIGHT>
        <IMG src={photo} alt="photo" />
      </HOMEHEADERRIGHT>
    </HOMEHEADER>
  );
};

export default Home;
