import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import sonny from "../assets/sonny.jpg";
import TopProfileOption from "./TopProfileOption";
import "./TopProfiles.css";

function TopProfiles() {
  return (
    <div className="profile">
      <div className="profile_desc">
        <h1>Top Profiles</h1>
        <BsThreeDotsVertical />
      </div>
      <div className="profile_head">
        <div className="top_profile">
          <img src={sonny} alt="face" />
          <TopProfileOption name="John Doe" title="Graphic Designer" />
        </div>

        <div className="top_profile">
          <img src={sonny} alt="face" />
          <TopProfileOption name="Jassica" title="PHP Designer" />
        </div>

        <div className="top_profile">
          <img src={sonny} alt="face" />
          <TopProfileOption name="John Doe" title="Graphic Designer" />
        </div>
      </div>
    </div>
  );
}

export default TopProfiles;
