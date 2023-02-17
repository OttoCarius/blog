import React from "react";
import { Container, LinkList } from "./PopularPosts.styled.js";

export default function PopularPosts({ post }) {
  return (
    <Container>
      <LinkList to={`${post._id}`}>{post.title}</LinkList>
    </Container>
  );
}
