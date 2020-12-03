import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 70px;
  background-color: #296089;
  color: "#FFF";
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;
const NavBarHeader = styled.p`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
  margin-left: 40px;
`;
const NavLink = styled.li`
  margin: 8px;
`;
const NavBarRight = styled.ul`
  display: flex;
  list-style-type: none;
  margin-right: 72px;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    margin-left: -6px;
  }
`;
const MyLink = styled(Link)`
  text-decoration: none;
  font-weight: 300;
  color: #fff;
  &:hover {
    cursor: pointer;
    border-bottom-color: #e2474d;
    border-bottom-width: 3px;
    border-bottom-style: solid;
    line-height: 2px;
    color: #fff;
  }
`;
const InputSearch = styled.input`
  width: 300px;
  padding: 10px;
  margin-top: -5px;
  border: none;
  border-radius: 2px;
`;

const TomatoLink = styled(MyLink)`
  background-color: #e2474d;
  padding: 9px;
  color: white;
  border-radius: 3px;
  width: 200px;
  &:hover {
    color: #fff;
    border: none;
  }
`;

const NavBar = () => {
  return (
    <NavbarContainer>
      <NavBarHeader>Foodhub</NavBarHeader>
      <NavBarRight>
        <NavLink>
          <InputSearch placeholder="Track your order" />
        </NavLink>
        <NavLink>
          <MyLink to="/cart">Shop</MyLink>
        </NavLink>
        <NavLink>
          <MyLink to="/">Home</MyLink>
        </NavLink>
        <NavLink>
          <TomatoLink>Login</TomatoLink>
        </NavLink>
      </NavBarRight>
    </NavbarContainer>
  );
};

export default NavBar;
