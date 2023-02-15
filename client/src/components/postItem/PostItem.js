import React from "react";
import { AiFillEye, AiOutlineMessage } from "react-icons/ai";
import Moment from "react-moment";
import "./styles.css";

export default function PostItem({ post }) {
  if (!post) {
    return <div className="no-posts">Постів немає</div>;
  }

  return (
    <div className="post-item__container">
      <div className={post.imgUrl ? "image-wrap" : "image-wrap-two"}>
        {post.imgUrl && (
          <img
            src={`http://localhost:3002/${post.imgUrl}`}
            alt="img"
            className="img-post"
          />
        )}
      </div>
      <div className="user-wrap">
        <div className="username">{post.username}</div>
        <div className="data">
          <Moment date={post.createdAt} format="D MMM YYYY" />
        </div>
      </div>
      <div className="post-title">{post.title}</div>
      <p className="text-post">{post.text}</p>
      <div className="icons-wrap">
        <button className="views">
          <AiFillEye />
          <span>{post.views}</span>
        </button>
        <button className="coments">
          <AiOutlineMessage />
          <span>{post.comments?.length || 0}</span>
        </button>
      </div>
    </div>
  );
}
