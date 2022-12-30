import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Widgets.css";
import sonny from "../assets/sonny.jpg";
import { AiOutlinePlusSquare } from "react-icons/ai";
import wlog from "../assets/wlogo.png";

function Widgets() {
  return (
    <div className="widgets">
      <div className="top_widget">
        <img src={wlog} alt="face" />
        <h1>Track time on workwise</h1>
        <p>Pay only for the hours worked</p>
        <div className="top_widgetum">
          <h1>Sign Up</h1>
          <p>Learn More</p>
        </div>
      </div>
      <div className="second_widget">
        <div className="second_widgetdetail">
          <h1>Top Jobs</h1>
          <BsThreeDotsVertical />
        </div>
        <div className="second_widgetjob">
          <div className="second_widgetdesc">
            <h2>Senior Product Designer</h2>
            <p>This role is for a designer with 3 years experience</p>
          </div>
          <div>$25/hr</div>
        </div>

        <div className="second_widgetjob">
          <div className="second_widgetdesc">
            <h2>Senior UI/UX</h2>
            <p>This role is for a designer with 3 years experience</p>
          </div>
          <div>$25/hr</div>
        </div>

        <div className="second_widgetjob">
          <div className="second_widgetdesc">
            <h2>Junior Seo Designer</h2>
            <p>This role is for a designer with 3 years experience</p>
          </div>
          <div>$25/hr</div>
        </div>

        <div className="second_widgetjob">
          <div className="second_widgetdesc">
            <h2>Senior PHP Designer</h2>
            <p>This role is for a designer with 3 years experience</p>
          </div>
          <div>$25/hr</div>
        </div>

        <div className="second_widgetjob">
          <div className="second_widgetdesc">
            <h2>Senior Laravel Designer</h2>
            <p>This role is for a designer with 3 years experience</p>
          </div>
          <div>$25/hr</div>
        </div>
      </div>
      <div className="third_widget">
        <div className="third_widgetdetail">
          <h1>Most Viewed This Week</h1>
          <BsThreeDotsVertical />
        </div>
        <div>
          <div className="third_widgetjob">
            <div className="third_widgetdesc">
              <h2>Senior Product Designer</h2>
              <p>This role is for a designer with 3 years experience</p>
            </div>
            <div>$25/hr</div>
          </div>

          <div className="third_widgetjob">
            <div className="third_widgetdesc">
              <h2>Senior UI/UX</h2>
              <p>This role is for a designer with 3 years experience</p>
            </div>
            <div>$25/hr</div>
          </div>

          <div className="third_widgetjob">
            <div className="third_widgetdesc">
              <h2>Junior Seo Designer</h2>
              <p>This role is for a designer with 3 years experience</p>
            </div>
            <div>$25/hr</div>
          </div>
        </div>
      </div>
      <div className="widgets_bottom">
        <h1>Most Viewed People</h1>
        <BsThreeDotsVertical />
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
    </div>
  );
}

export default Widgets;
