import React, { useState } from "react";
import FoodItem from "./FoodItem";
import List from "./List";
const FoodList = ({ foods }) => {
  return (
    <List>
      {foods.map((food, index) => (
        <FoodItem key={index} food={food} />
      ))}
    </List>
  );
};

export default FoodList;
