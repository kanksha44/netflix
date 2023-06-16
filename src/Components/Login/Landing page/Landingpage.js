import React from "react";
import "./Landing.css";
import logo from "../../../logo.png";
import LanguageDropdown from "./langaugebutton";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landingpage = () => {
  const navigate = useNavigate();

  return (
    <div className="mainlanding">
      <div className="landingnav">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="butns">
          <LanguageDropdown />
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#E50914",
              height: "2.1rem",
              marginLeft: "10px",
            }}
          >
            Sign in
          </Button>
        </div>
      </div>
      <div className="landingnavhero">
        <h1>Unlimited movies, TV shows and more</h1>
        <span>Watch anywhere. Cancel anytime.</span>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="emailinput">
          <input type="text" placeholder="Email address" />{" "}
          <button onClick={() => navigate("/firstpage")}> Get Started </button>
        </div>
      </div>
    </div>
  );
};

export default Landingpage;
