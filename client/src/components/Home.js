import React, { useState } from "react";
import styled from "styled-components";
import photo from "../photo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faUtensils } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";
import FoodList from "./FoodList";

const HOMEHEADERCONTAINER = styled.div`
  display: block;
`;
const HOMEHEADERSEARCHCONTAINER = styled.div`
  text-align: center;
`;
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

const TITLECENTER = styled.p`
  font-size: 20px;
  margin-top: -20px;
  font-weight: 500;
`;
const INPUTTEXTSEARCH = styled.input`
  width: 800px;
  border-radius: 6px;
  height: 30px;
  border: none;
  box-shadow: 5px 5px 15px 1px #d0d0d0;
  border-bottom: 20px;
  padding-left: 60px;
  outline: none;
  align-items: "center";
  padding-top: 5px;
`;

const RESTAURANTSCONTAINER = styled.div`
  margin-top: 40px;
  margin-left: 45px;
  margin-right: 45px;
  margin-bottom: 100px;
`;

const FONTSEARCH = styled(FontAwesomeIcon)`
  position: absolute;
  right: 270px;
  top: 683px;
  color: #929192;
`;
const FONTUTENSILES = styled(FontAwesomeIcon)`
  margin-left: 10px;
  font-size: 24px;
`;

const Home = () => {
  const [foods] = useState([
    {
      id: uuidv4(),
      name: "Croque monsieur tunisien",
      url:
        "https://cuisine-addict.com/wp-content/uploads/2018/06/recette-croque-tunisie-500x500.jpg",
      ingredients: ["Harissa", "Thon", "Fromage"],
      price: 5.9,
    },
    {
      id: uuidv4(),
      name: "Croque monsieur italien",
      url:
        "https://www.enviedebienmanger.fr/sites/default/files/compresed_images/croque_monisuer_a_litalienne_0.jpg",
      ingredients: ["Mozarella", "Thon", "Pesto"],
      price: 5.5,
    },
  ]);
  return (
    <HOMEHEADERCONTAINER>
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

      <RESTAURANTSCONTAINER>
        <h2>Top Foods</h2>
        <FoodList foods={foods} />
      </RESTAURANTSCONTAINER>
    </HOMEHEADERCONTAINER>
  );
};

export default Home;
