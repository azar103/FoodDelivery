import React from "react";
import styled from "styled-components";

const FOODCONTAINER = styled.div`
  display: block;

  height: 520px;
  width: 283px;
  margin: 5px;
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
  color: #333;
  height: 100px;
`;
const BUTTON = styled.button`
  background-color: #e2474d;
  width: 120px;
  color: white;
  border-radius: 300px;
  border: none;
  outline: none;
  padding: 8px;
  margin-left: 5px;
  margin-top: 5px;
  font-size: 12px;
  cursor: pointer;
`;
const FoodItem = ({ food }) => {
  return (
    <FOODCONTAINER>
      <IMG src={food.url} />
      <NAME>{food.name}</NAME>
      <INGREDIENTS>{food.ingredients.join("-")}</INGREDIENTS>
      <BUTTON>COMMANDER</BUTTON>
    </FOODCONTAINER>
  );
};

export default FoodItem;
