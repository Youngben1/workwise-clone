import React from "react";
import sonny from "../assets/sonny.jpg";
import Post from "./Post";
import "./Feed.css";
import TopProfiles from "./TopProfiles";

function Feed() {
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <img src={sonny} alt="face" />
          <form type="submit">
            <input type="text" placeholder="Post a Project" />
            <button>Post a Job</button>
          </form>
        </div>
      </div>

      <Post
        name="John Doe"
        time="3 mins ago"
        title="Senior Wordpress developer"
        description="Epic Coder"
        country="India"
        salary="$300 - $500"
        message="For I know the plans I have for you declares the Lord, plans of Good and not of Evil, plans to give you a hope and a future"
      />

      <TopProfiles />
      <Post
        name="John Doe"
        time="3 mins ago"
        title="Senior Wordpress developer"
        description="Epic Coder"
        country="India"
        salary="$300 - $500"
        message="For I know the plans I have for you declares the Lord, plans of Good and not of Evil, plans to give you a hope and a future"
      />
      <Post
        name="John Doe"
        time="3 mins ago"
        title="Senior Wordpress developer"
        description="Epic Coder"
        country="India"
        salary="$300 - $500"
        message="For I know the plans I have for you declares the Lord, plans of Good and not of Evil, plans to give you a hope and a future"
      />
      <Post
        name="John Doe"
        time="3 mins ago"
        title="Senior Wordpress developer"
        description="Epic Coder"
        country="India"
        salary="$300 - $500"
        message="For I know the plans I have for you declares the Lord, plans of Good and not of Evil, plans to give you a hope and a future"
      />
    </div>
  );
}

export default Feed;
