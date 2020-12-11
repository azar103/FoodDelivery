import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../redux/actions/authActions";
const CONTAINER = styled.form`
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 14px;
`;
const H2 = styled.h2`
  font-weight: 600;
`;
const INPUT = styled.input`
  width: 470px;
  padding: 10px;
  border: 1px solid #cccccc;
  border-radius: 5px;
  margin-top: 4px;
  outline: none;
`;
const LABEL = styled.label`
  color: gray;
`;

const BUTTON = styled.button`
  width: 70px;
  background-color: #296089;
  color: white;
  padding: 10px;
  cursor: pointer;
  border: none;
  outline: none;
  border-radius: 4px;
`;
const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(login(formData));
    history.push("/");
  };
  return (
    <CONTAINER onSubmit={handleConfirm}>
      <H2>Login</H2>
      <p>
        <LABEL>Email</LABEL> <br />
        <INPUT
          type="email"
          placeholder="enter a mail.."
          onChange={handleChange}
          name="email"
        />
      </p>
      <p>
        <LABEL>Password</LABEL> <br />
        <INPUT
          type="password"
          placeholder="enter a password.."
          onChange={handleChange}
          name="password"
        />
      </p>
      <BUTTON>Sign In</BUTTON>
      <p>
        Not inscribed ? <Link to="/signup">Register</Link>
      </p>
    </CONTAINER>
  );
};

export default Login;
