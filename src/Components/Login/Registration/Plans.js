import React from "react";
import logo from "../../../logo.png";
import "./plans.css";
import { useNavigate } from "react-router-dom";
import { MdOutlineDone } from "react-icons/md";
import Button from "@mui/material/Button";
import { CiMobile2 } from "react-icons/ci";
import { BsTablet } from "react-icons/bs";
import { BsLaptop } from "react-icons/bs";
import { CgScreen } from "react-icons/cg";

const Plans = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className="first-page-nav">
          <div className="first-page-logo">
            <img src={logo} alt="logo" />
          </div>
          <div
            className="first-page-signinbtn"
            onClick={() => navigate("/signin")} //one popup (leaving so soon)should come and then sign in shoul be there
          >
            Sign Out
          </div>
        </div>
      </div>
      <div className="plans-hero">
        <p>STEP 2 OF 3</p>
        <h1>Choose the plan that’s right for you</h1>
        <h4>
          <MdOutlineDone className="third-page-icons" />
          Watch all you want. Ad-free.
        </h4>
        <h4>
          <MdOutlineDone className="third-page-icons" />
          Recommendations just for you.
        </h4>
        <h4>
          <MdOutlineDone className="third-page-icons" />
          Change or cancel your plan anytime.
        </h4>
        <div className="plans-container">
          <div className="plans-mode">
            <div className="plans-notvisible"></div>
            <div className="all-plans">
              <div className="plans-mobile">Mobile</div>
              <div className="plans-basic">Basic</div>
              <div className="plans-standard">Standard</div>
              <div className="plans-premium">Premium</div>
            </div>
          </div>
          <div className="monthly-price">
            <div className="dummyprice">
              <p>Monthly price</p>
            </div>
            <div className="plan-price">
              <li>₹ 149</li>
              <li>₹ 199</li>
              <li>₹ 499</li>
              <li>₹ 649</li>
            </div>
          </div>
          <div className="video-quality">
            <div className="video-mode">
              <p>Video quality</p>
            </div>
            <div className="plans-video">
              <li>Good </li>
              <li>Good </li>
              <li>Better</li>
              <li>Best</li>
            </div>
          </div>
          <div className="resolution">
            <div className="resolution-mode">
              <p>Resolution</p>
            </div>
            <div className="resolution-plans">
              <li>480p</li>
              <li>720p</li>
              <li>1080p</li>
              <li>4K+HDR</li>
            </div>
          </div>

          <div className="devices-watch">
            <div className="device-mode">
              <p>Devices you can use to watch</p>
            </div>
            <div className="device-plans">
              <li>
                <CiMobile2 />
                Phone
              </li>
              <li>
                <CiMobile2 />
                Phone
              </li>
              <li>
                <CiMobile2 />
                Phone
              </li>
              <li>
                <CiMobile2 />
                Phone
              </li>
            </div>
          </div>

          <div className="devices-watch">
            <div className="device-mode">
              <p>Devices you can use to watch</p>
            </div>
            <div className="device-plans">
              <li>
                <BsTablet />
                Tablet
              </li>
              <li>
                <BsTablet />
                Tablet
              </li>
              <li>
                <BsTablet />
                Tablet
              </li>
              <li>
                <BsTablet />
                Tablet
              </li>
            </div>
          </div>

          <div className="devices-watch">
            <div className="device-mode">
              <p>Devices you can use to watch</p>
            </div>
            <div className="device-plans">
              <li>
                <CgScreen />
                TV
              </li>
              <li>
                <CgScreen />
                TV
              </li>
              <li>
                <CgScreen />
                TV
              </li>
              <li>
                <CgScreen />
                TV
              </li>
            </div>
          </div>
          <div className="devices-watch">
            <div className="device-mode">
              <p>Devices you can use to watch</p>
            </div>
            <div className="device-plans">
              <li>
                <BsLaptop />
                Computer
              </li>
              <li>
                <BsLaptop />
                Computer
              </li>
              <li>
                <BsLaptop />
                Computer
              </li>
              <li>
                <BsLaptop />
                Computer
              </li>
            </div>
          </div>

          <br />
          <p>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. See our
            <span>Terms of Use</span> for more details.
          </p>
          <br />
          <p>
            Only people who live with you may use your account. Watch on 4
            different devices at the same time with Premium, 2 with Standard,
            and 1 with Basic and Mobile.
          </p>
          <Button
            onClick={() => navigate("/login")}
            className="next-btn"
            variant="contained"
          >
            Next
          </Button>
        </div>

        <div className="plans-footer">footer</div>
      </div>
    </div>
  );
};

export default Plans;
