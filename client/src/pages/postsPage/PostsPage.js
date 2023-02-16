import React, { useEffect, useState } from "react";
import PostItem from "../../components/postItem/PostItem";
import axios from "./../../utils/axios";
import "./styles.css";

export default function PostsPage() {
  const [posts, setPosts] = useState([]);

  const fetchMyPosts = async () => {
    try {
      const { data } = await axios.get("/posts/user/me");
      setPosts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyPosts();
  }, []);

  return (
    <div className="posts-page__container">
      {posts?.map((post, index) => (
        <PostItem post={post} key={index} />
      ))}
    </div>
  );
}
