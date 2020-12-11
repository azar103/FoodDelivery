import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { register, setLoading } from "../redux/actions/authActions";
import { useHistory } from "react-router-dom";
import { CircleLoading } from "react-loadingg";
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

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const dispatch = useDispatch();
  const history = useHistory();
  //const loading = useSelector((state) => state.auth.loading);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleConfirm = (e) => {
    e.preventDefault();
    dispatch(register(formData));
    history.push("/");
  };

  return (
    <CONTAINER onSubmit={handleConfirm}>
      <H2>Sign Up</H2>
      <p>
        <LABEL>Name</LABEL> <br />
        <INPUT
          type="name"
          placeholder="enter a name.."
          name="name"
          onChange={handleChange}
        />
      </p>
      <p>
        <LABEL>Email</LABEL> <br />
        <INPUT
          type="email"
          placeholder="enter a mail.."
          name="email"
          onChange={handleChange}
        />
      </p>
      <p>
        <LABEL>Password</LABEL> <br />
        <INPUT
          type="password"
          placeholder="enter a password.."
          name="password"
          onChange={handleChange}
        />
      </p>
      <p>
        <LABEL>Confirm your password</LABEL> <br />
        <INPUT
          type="password"
          placeholder="confirm the password.."
          name="confirm_password"
          onChange={handleChange}
        />
      </p>
      <BUTTON>Register</BUTTON>
      <p>
        Have you an account ? <Link to="/login">Login</Link>
      </p>
    </CONTAINER>
  );
};

export default SignUp;
