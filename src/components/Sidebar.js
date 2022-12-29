import React from "react";
import "./Sidebar.css";
import { BsThreeDotsVertical } from "react-icons/bs";
import sonny from "../assets/sonny.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="top_sidebar">
        <img src={sonny} alt="face" />
        <h1>Sonny Sangha</h1>
        <p>Graphic Designer at Self Employed</p>
        <div className="sidebar_stats">
          <div className="sidebar_stat">
            <h1>Following</h1>
            <p className="sidebar_statNum">34</p>
          </div>
        </div>
        <div className="sidebar_stats">
          <h1>Followers</h1>
          <p className="sidebar_statNum">155</p>
        </div>
        <div>
          <p className="sidebar_detail">View Profile</p>
        </div>
      </div>

      <div className="middle_sidebar">
        <div className="middle_suggest">
          <p>Suggestions</p>
          <BsThreeDotsVertical />
        </div>
        <div className="middle_details">
          <img src={sonny} alt="side" />
          <div>
            <h2>Sonny Sangha</h2>
            <p>Graphic Designer</p>
            <div>
              <AiOutlinePlusSquare />
            </div>
          </div>
        </div>
        <div className="middle_details">
          <img src={sonny} alt="side" />
          <div>
            <h2>Sonny Sangha</h2>
            <p>Graphic Designer</p>
            <div>
              <AiOutlinePlusSquare />
            </div>
          </div>
        </div>
        <div className="middle_details">
          <img src={sonny} alt="side" />
          <div>
            <h2>Sonny Sangha</h2>
            <p>Graphic Designer</p>
            <div>
              <AiOutlinePlusSquare />
            </div>
          </div>
        </div>
        <div className="middle_details">
          <img src={sonny} alt="side" />
          <div>
            <h2>Sonny Sangha</h2>
            <p>Graphic Designer</p>
            <div>
              <AiOutlinePlusSquare />
            </div>
          </div>
        </div>
        <div className="middle_details">
          <img src={sonny} alt="side" />
          <div>
            <h2>Sonny Sangha</h2>
            <p>Graphic Designer</p>
            <div>
              <AiOutlinePlusSquare />
            </div>
          </div>
        </div>
      </div>

      <div className="bottom_sidebar">
        <div className="bottom_list">
          <p>Help Center</p>
          <p>About</p>
          <p>Privacy Policy</p>
        </div>
        <div className="bottom_list">
          <p>Community Guidelines</p>
          <p>Cookies Policy</p>
        </div>
        <div className="bottom_list">
          <p>Career</p>
          <p>Language</p>
          <p>Copyright Policy</p>
        </div>
        <div className="bottom_list">
          <p>Workwise</p>
          <p>Copyright 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
