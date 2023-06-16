import React from "react";
import logo from "../../../logo.png";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

import "./thirdpage.css";

const Thirdpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="thirdpage-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="third-page-wrapper">
        <div className="thirdpage-hero">
          <IoIosCheckmarkCircleOutline className="third-page-icons" />
          <p>STEP 2 OF 3</p>
          <p>Choose your plan.</p>
          <h4>
            <MdOutlineDone className="third-page-icons" />
            No commitments, cancel anytime.
          </h4>
          <h4>
            <MdOutlineDone className="third-page-icons" />
            Everything on Netflix for one low price.
          </h4>
          <h4>
            <MdOutlineDone className="third-page-icons" />
            No ads and no extra fees. Ever.
          </h4>
          <Button
            onClick={() => navigate("/plans")}
            className="next-btn"
            variant="contained"
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Thirdpage;
