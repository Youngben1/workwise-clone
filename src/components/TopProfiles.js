import React from "react";
import { BsThreeDotsVertical, BsFillEnvelopeFill } from "react-icons/bs";
import sonny from "../assets/sonny.jpg";
import "./TopProfiles.css";

function TopProfiles() {
  return (
    <div className="profile">
      <div className="profile_head">
        <h1>Top Profiles</h1>
        <BsThreeDotsVertical />
      </div>
      <div className="top_profile">
        <div className="top_profiledetails">
          <img src={sonny} alt="facecard" />
          <h2>John Doe</h2>
          <p>Graphic Designer</p>
        </div>
        <div className="profile_buttons">
          <button>Follow</button>
          <BsFillEnvelopeFill />
          <button>Hire</button>
        </div>
        <p>View Profile</p>
      </div>
      <div className="top_profile">
        <div className="top_profiledetails">
          <img src={sonny} alt="facecard" />
          <h2>John Doe</h2>
          <p>Graphic Designer</p>
        </div>
        <div className="profile_buttons">
          <button>Follow</button>
          <BsFillEnvelopeFill />
          <button>Hire</button>
        </div>
        <p>View Profile</p>
      </div>
      <div className="top_profile">
        <div className="top_profiledetails">
          <img src={sonny} alt="facecard" />
          <h2>John Doe</h2>
          <p>Graphic Designer</p>
        </div>
        <div className="profile_buttons">
          <button>Follow</button>
          <BsFillEnvelopeFill />
          <button>Hire</button>
        </div>
        <p>View Profile</p>
      </div>
    </div>
  );
}

export default TopProfiles;
