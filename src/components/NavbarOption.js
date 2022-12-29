import React from "react";
import "./NavbarOption.css";

function NavbarOption({ avatar, Icon, title, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption_icon" />}
      <h3 className="headerOption_title">{title}</h3>
    </div>
  );
}

export default NavbarOption;
