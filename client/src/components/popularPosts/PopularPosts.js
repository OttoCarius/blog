import React from "react";
import "./styles.css";

export default function PopularPosts({ post }) {
  return (
    <div className="popular-container">
      <div className="popular-post">{post.title}</div>
    </div>
  );
}
