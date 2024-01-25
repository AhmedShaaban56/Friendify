import "./Navbar.scss";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { useContext } from "react";
import { themeContext } from "../../Context/DarkModeContext";
import { AuthContext } from "../../Context/AuthContext";
import { Link } from "react-router-dom";
// import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const Navbar = () => {
  const { toggle, darkMode } = useContext(themeContext);
  const pointer = { cursor: "pointer" };
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="container">
        <div className="left">
          <Link to="/">
            <h1>Friendify</h1>
          </Link>
          <HomeOutlinedIcon />
          {darkMode ? (
            <LightModeOutlinedIcon style={pointer} onClick={toggle} />
          ) : (
            <DarkModeOutlinedIcon style={pointer} onClick={toggle} />
          )}
          <GridViewOutlinedIcon />
          <div className="search">
            <SearchOutlinedIcon />
            <input type="search" name="" id="search" placeholder="Search.." />
          </div>
        </div>
        <div className="right">
          <PermIdentityOutlinedIcon />
          <EmailOutlinedIcon />
          <NotificationsNoneOutlinedIcon />
          <div className="user">
            <img src={currentUser.profilePic} alt="" />
            <span>{currentUser.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
