import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { logout } from "../redux/actions/authActions";
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
const INPUT = styled.input`
  width: 300px;
  border-radius: 4px;
  outline: none;
  border: none;
  padding: 10px;
  margin-left: 10px;
`;

const NavBar = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);
  const dispatch = useDispatch();
  return (
    <NavbarContainer>
      <NavBarHeader>
        Foodocity
        <INPUT placeholder="Search foods..." />
      </NavBarHeader>

      <NavBarRight>
        <NavLink>
          <MyLink to="/cart">
            <FontAwesomeIcon icon={faShoppingCart} />
          </MyLink>
        </NavLink>
        <NavLink>
          {!isAuth ? (
            <TomatoLink to="/login">Login</TomatoLink>
          ) : (
            <TomatoLink to="/login" onClick={() => dispatch(logout())}>
              Logout
            </TomatoLink>
          )}
        </NavLink>
      </NavBarRight>
    </NavbarContainer>
  );
};

export default NavBar;
