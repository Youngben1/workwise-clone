import React from "react";
import sonny from "../assets/sonny.jpg";
import {
  BsThreeDotsVertical,
  BsFillBriefcaseFill,
  BsFillBookmarkFill,
  BsFillEyeFill,
} from "react-icons/bs";
import { BiComment } from "react-icons/bi";
import { FcLike } from "react-icons/fc";
import "./Post.css";

function Post({
  name,
  title,
  time,
  description,
  country,
  salary,
  message,
  image,
}) {
  return (
    <div className="post">
      <div className="post_header">
        <img src={sonny} alt="pics" />
        <div className="post_info">
          <h2>John Doe</h2>
          <p>{time}</p>
        </div>
        <BsThreeDotsVertical />
      </div>
      <div className="post_description">
        <p>{description}</p>
        <p>{country}</p>
        <div>
          <BsFillBookmarkFill />
          <BsFillBriefcaseFill />
        </div>
      </div>

      <div className="post_details">
        <p>{title}</p>
        <p>{salary}</p>
      </div>

      <div className="post_body">
        <p>{message}</p>
      </div>

      <div className="post_buttons">
        <button>HTML</button>
        <button>PHP</button>
        <button>Java</button>
        <button>CSS</button>
        <button>Javascript</button>
      </div>

      <div className="post_foot">
        <FcLike />
        <div className="post_footmid">
          <BiComment />
          <p>Comments</p>
        </div>
        <div className="post_footright">
          <BsFillEyeFill />
          <p>Views</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
