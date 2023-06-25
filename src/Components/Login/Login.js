import React from "react";
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Login = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="login-nav">
          <div className="login-logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className="login-signinbtn"
            onClick={() => navigate("/signin")} //one popup (leaving so soon)should come and then sign in shoul be there
          >
            Sign Out
          </div>
        </div>
      </div>

      <div className="login-form">
        <form action="">
          <TextField
            error
            id="standard-error-helper-text"
            label="Email"
            variant="standard"
          />
          <br />
          <TextField
            error
            id="standard-error-helper-text"
            label="Password"
            helperText="Incorrect password."
            variant="standard"
          />
        </form>
        <br />
        <Button
          onClick={() => navigate("/home")}
          className="login-btn"
          variant="contained"
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Login;
