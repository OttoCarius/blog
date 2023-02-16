import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export default function PopularPosts({ post }) {
  return (
    <div className="popular-container">
      <Link to={`${post._id}`} className="popular-post">
        {post.title}
      </Link>
    </div>
  );
}
