import React, { useState } from "react";
import { Alert, Button, Container, Grid, TextField } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoginImg from "../../../images/login.jpg";
import registerImg from "../../../images/registration.png";

const Register = () => {
  const [loginData, SetLoginData] = useState({});
  const { registerUser, loading, user, authError } = useAuth();
  const history = useHistory();
  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    console.log(newLoginData);
    SetLoginData(newLoginData);
  };
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (loginData.password !== loginData.password2) {
      alert("your Password did'nt match");
      return;
    }
    registerUser(loginData.email, loginData.password, loginData.name, history);
  };
  return (
    <Container>
      <div className="title">
        <h1 className="text-center mt-5 mb-3 text-uppercase">
          <span>Register</span>
        </h1>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          {!loading && (
            <form onSubmit={handleLoginSubmit}>
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Name"
                name="name"
                type="text"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your Email"
                name="email"
                type="email"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Your PassWord"
                type="password"
                name="password"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <TextField
                sx={{ width: "75%", m: 1 }}
                id="standard-basic"
                label="Confirm PassWord"
                type="password"
                name="password2"
                onBlur={handleOnBlur}
                variant="standard"
              />
              <br />
              <br />
              <button
                className="reg-btn"
                sx={{ width: "75%", m: 1 }}
                type="submit"
              >
                <img
                  style={{ width: "30px", marginRight: "5px" }}
                  src={registerImg}
                  alt=""
                />
                Register
              </button>
              <br />
              <Link to="/login" style={{ textDecoration: "none" }}>
                <Button variant="text">Already Registered? Please Login</Button>
              </Link>
            </form>
          )}
          {user?.email && (
            <Alert severity="success">Registration Successfully..</Alert>
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

export default Register;
