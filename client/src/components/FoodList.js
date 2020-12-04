import React, { useState } from "react";
import styled from "styled-components";
import FoodItem from "./FoodItem";
const DIVCONTAINER = styled.div`
  display: flex;
`;
const FoodList = ({ foods }) => {
  console.log(foods);
  return (
    <DIVCONTAINER>
      {foods.map((food, index) => (
        <FoodItem key={index} food={food} />
      ))}
    </DIVCONTAINER>
  );
};

export default FoodList;
