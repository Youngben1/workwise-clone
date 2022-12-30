import React from "react";
import { BsFillEnvelopeFill } from "react-icons/bs";

function TopProfileOption() {
  return (
    <div>
      <div className="top_profiledetails">
        <h1>John Doe</h1>
        <p>Graphic Designer</p>
      </div>
      <div className="profile_buttons">
        <button>Follow</button>
        <BsFillEnvelopeFill />
        <button>Hire</button>
      </div>
      <p>View Profile</p>
    </div>
  );
}

export default TopProfileOption;
