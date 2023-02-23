import { Icon } from "@mui/material";
import React from "react";
import "./SidebarOption.css";

function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOption">
      <Icon />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
