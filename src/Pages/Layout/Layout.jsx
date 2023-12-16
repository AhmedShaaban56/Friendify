import React from "react";
import "./Layout.scss";
import RightBar from "../../Components/rightBar/RightBar";
import LeftBar from "../../Components/leftBar/LeftBar";
import Navbar from "../../Components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layoutpage">
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
