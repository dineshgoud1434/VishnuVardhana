import React from "react";
import { Navbar } from "../NavBar/navbar";
import { Content } from "../Content/content";
import "./header.style.css";
import "../Content/content.style.css";
import buildings from "../../Images/buildings.jpg";

export const Header = () => {
  return (
    <div className="header">
      <Navbar />
      <Content />
    </div>
  );
};
