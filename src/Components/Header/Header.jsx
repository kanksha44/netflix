import React from "react";
import logo from "../../logo.png";
import { Link, useNavigate } from "react-router-dom";
import { ImSearch } from "react-icons/im";

const Header = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    navigate("/login");
  };
  return (
    <nav className="header">
      <img src={logo} alt="logo" />
      <div className="menus">
        <Link to="/tvshows">TV Shows</Link>
        <Link to="/tvshows">Movies</Link>
        <Link to="/tvshows">Recently Added </Link>
        <Link to="/tvshows">My List</Link>
      </div>

      <div className="btn">
        <ImSearch />
        <button onClick={handleLogout} className="logoutbtn">
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Header;
