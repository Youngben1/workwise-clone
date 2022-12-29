import React from "react";
import "./Navbar.css";
import {
  AiOutlineSearch,
  AiFillHome,
  AiFillCaretDown,
  AiFillThunderbolt,
} from "react-icons/ai";
import {
  BsFillPuzzleFill,
  BsFillBriefcaseFill,
  BsFillPeopleFill,
  BsFillEnvelopeFill,
} from "react-icons/bs";
import { BiBuilding } from "react-icons/bi";
import wlog from "../assets/wlogo.png";
import sonny from "../assets/sonny.jpg";
import NavbarOption from "./NavbarOption";

function Navbar() {
  return (
    <div className="header">
      <div className="header_left">
        <img src={wlog} alt="face" />

        <div className="header_search">
          <input placeholder="Search..." type="text" />
          <AiOutlineSearch />
        </div>
      </div>

      <div className="header_right">
        <NavbarOption Icon={AiFillHome} title="Home" />
        <NavbarOption Icon={BiBuilding} title="Companies" />
        <NavbarOption Icon={BsFillPuzzleFill} title="Projects" />
        <NavbarOption Icon={BsFillPeopleFill} title="Profiles" />
        <NavbarOption Icon={BsFillBriefcaseFill} title="Jobs" />
        <NavbarOption Icon={BsFillEnvelopeFill} title="Messages" />
        <NavbarOption Icon={AiFillThunderbolt} title="Notifications" />
        <img src={sonny} alt="face" />
        <NavbarOption avatar={true} title="Me" />
        <AiFillCaretDown />
      </div>
    </div>
  );
}

export default Navbar;
