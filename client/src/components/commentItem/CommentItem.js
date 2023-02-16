import React from "react";
import "./styles.css";

export function CommentItem({ cmt }) {
  const avatar = cmt.comment.trim().toUpperCase().split("").slice(0, 2);
  return (
    <div className="comment-page__container">
      <div className="avatar">{avatar}</div>
      <div className="comment-wrapper">{cmt.comment}</div>
    </div>
  );
}
