import React from "react";
import logo from "../../../logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

const Signin = () => {
  return (
    <div>
      <div className="signin-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="signin-hero">
        <h2>Sign In</h2>
        <form action="">
          <TextField
            error
            id="standard-error-helper-text"
            label="Email"
            defaultValue="add a email"
            variant="standard"
          />
          <TextField
            error
            id="standard-error-helper-text"
            label="Password"
            defaultValue="add a password"
            helperText="Incorrect password."
            variant="standard"
          />
        </form>

        <Button className="get-started-btn" variant="contained">
          Sign In
        </Button>
        <div className="signin-btn-text">
          <p>remember me</p>
          <p>Need help?</p>
        </div>
        <div className="signin-text">
          <p>
            New to Netflix?<span> Sign up now.</span>
          </p>
          <p>
            This page is protected by Google reCAPTCHA to <br /> ensure you're
            not a bot. Learn more.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signin;
