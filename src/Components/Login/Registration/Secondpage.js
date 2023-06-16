import React from "react";
import logo from "../../../logo.png";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import "./secondpage.css";


const Secondpage = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className="second-page-nav">
          <div className="second-page-logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className="second-page-signinbtn"
            onClick={() => navigate("/signin")}
          >
            Sign In
          </div>
        </div>
      </div>
      <div className="secondpage-hero-wrapper">
        <div className="secondpagehero">
          <div className="second-page-content">
            <p>STEP 1 OF 3</p>
            <h1>
              Create a password to start <br /> your membership
            </h1>
            <p>
              Just a few more steps and you're done! <br />
              We hate paperwork, too.
            </p>
            <div className="secondpage-form">
              <form action="">
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Email"
                  defaultValue="add a email"
                  variant="standard"
                />
                <br />
                <TextField
                  error
                  id="standard-error-helper-text"
                  label="Password"
                  defaultValue="add a password"
                  helperText="Incorrect password."
                  variant="standard"
                />
              </form>
              <br />
              <Button onClick={()=>navigate("/thirdpage")} className="get-started-btn" variant="contained">
                Next
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Secondpage;
