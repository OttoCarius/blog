import React from "react";
import { Container, Avatar, CommentWrap } from "./CommentItem.styled";

export const CommentItem = ({ cmt }) => {
  const avatar = cmt.comment?.trim().toUpperCase().split("").slice(0, 2);
  return (
    <Container>
      <Avatar>{avatar}</Avatar>
      <CommentWrap>{cmt.comment}</CommentWrap>
    </Container>
  );
};
