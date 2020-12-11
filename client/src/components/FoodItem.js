import React from "react";
import styled from "styled-components";

const FOODCONTAINER = styled.div`
  display: block;

  height: auto;
  width: auto;
  margin: 9px;
  box-shadow: 10px 10px 5px -9px rgba(0, 0, 0, 0.18);
`;
const IMG = styled.img`
  height: 283px;
  border: 1px solid #f1f1ff;
`;
const NAME = styled.div`
  margin-left: 5px;
  color: #333333;
  font-weight: bold;
`;
const INGREDIENTS = styled.div`
  margin-left: 5px;
  color: black;
  height: auto;
  font-style: italic;
  font-size: 13px;
`;
const BUTTON = styled.button`
  background-color: #e2474d;
  width: 120px;
  color: #eaffff;
  cursor: pointer;
  border-radius: 300px;
  border: none;
  outline: none;
  padding: 8px;
  margin-left: 2px;
  margin-top: 2px;
  font-size: 12px;
  cursor: pointer;
`;
const PRICE = styled.p`
  text-align: left;
  width: auto;
  margin-left: 5px;
  color: #e2474d;
`;
const FoodItem = ({ food }) => {
  return (
    <FOODCONTAINER>
      <IMG src={food.url} />
      <NAME>{food.name}</NAME>
      <INGREDIENTS>{food.ingredients.join(",")}</INGREDIENTS>
      <PRICE>{food.price} DT</PRICE>
      <BUTTON>COMMANDER</BUTTON>
    </FOODCONTAINER>
  );
};

export default FoodItem;
