import React, { useContext } from "react";
import "./Layout.scss";
import RightBar from "../../Components/rightBar/RightBar";
import LeftBar from "../../Components/leftBar/LeftBar";
import Navbar from "../../Components/navbar/Navbar";
import { Outlet } from "react-router-dom";
import { themeContext } from "../../Context/DarkModeContext";
import { AuthContext } from "../../Context/AuthContext";

const Layout = () => {
  const { darkMode } = useContext(themeContext);
  const { login } = useContext(AuthContext);
  // const userDataUpdate = () => {
  //   login();
  // };
  return (
    <div className={`theme-${darkMode ? "dark" : "light"}`} id="layoutpage">
      <Navbar />
      <div style={{ display: "flex" }}>
        <LeftBar />
        <div style={{ flex: "6" }}>
          <Outlet />
        </div>
        <RightBar />
      </div>
    </div>
  );
};

export default Layout;
