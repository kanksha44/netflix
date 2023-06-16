import React from "react";
import logo from "../../../logo.png";
import "./Firstpage.css";
import { BsLaptop } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";
import { BsTablet } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom"; 


const Firstpage = () => {
    const navigate = useNavigate(); 
  return (
    <>
      <div>
        <div className="first-page-nav">
          <div className="first-page-logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="first-page-signinbtn" onClick={()=>navigate("/signin")}>Sign In</div>
        </div>
      </div>
      <div className="firstpage-hero-wrapper">
        <div className="firstpagehero">
          <div className="first-page-icons">
            <BsLaptop />
            <CgScreen />
            <BsTablet />
            <CiMobile2 />
          </div>
          <div className="first-page-content">
            <p>STEP 1 OF 3</p>
            <h4>Finish setting up your account</h4>
            <p>Netflix is personalised for you.</p>
            <p>
              Create a password to watch on any <br />
              device at any time.
            </p>
            <Button className="get-started-btn" variant="contained" onClick={()=>navigate("/secondpage")}>
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Firstpage;
