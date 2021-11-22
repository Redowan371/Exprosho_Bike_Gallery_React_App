import React, { useState } from "react";
import { Button, Container, Grid, TextField, Alert } from "@mui/material";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoginImg from "../../../images/login.jpg";
import googleImg from "../../../images/google.png";
import LoginBImg from "../../../images/login.png";

const Login = () => {
  const [loginData, SetLoginData] = useState({});
  const { user, loginUser, loading, authError, signInWithGoogle } = useAuth();
  const location = useLocation();
  const history = useHistory();
  const handleOnchange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    SetLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <div className="title">
        <h1 className="text-center mt-5 mb-3 text-uppercase">
          <span>Login</span>
        </h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <form onSubmit={handleLoginSubmit}>
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your Email"
              name="email"
              type="email"
              onChange={handleOnchange}
              variant="standard"
            />
            <TextField
              sx={{ width: "75%", m: 1 }}
              id="standard-basic"
              label="Your PassWord"
              type="password"
              name="password"
              onChange={handleOnchange}
              variant="standard"
            />{" "}
            <br />
            <br />
            <button
              className="reg-btn"
              sx={{ width: "100%", m: 1 }}
              type="submit"
            >
              <img
                style={{ width: "30px", marginRight: "5px" }}
                src={LoginBImg}
                alt=""
              />
              Login
            </button>
            <br />
            <Link to="/register" style={{ textDecoration: "none" }}>
              <Button variant="text">New User? Please Register</Button>
            </Link>
          </form>
          <button
            onClick={handleGoogleSignIn}
            className="reg-btn"
            sx={{ width: "75%", m: 1 }}
            type="submit"
          >
            <img style={{ width: "40px" }} src={googleImg} alt="" />
            oogle Sign In
          </button>
          {user?.email && (
            <Alert severity="success">Login Successfully..</Alert>
          )}
          {authError && <Alert severity="error">{authError}</Alert>}
        </Grid>
        <Grid item xs={12} md={6}>
          <img style={{ width: "100%" }} src={LoginImg} alt="" />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Login;
