import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../../components/postItem/PostItem";
import PopularPosts from "../../components/popularPosts/PopularPosts";
import "./styles.css";
import { getAllPosts } from "../../redux/post/postSlice";

export default function MainPage() {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <div className="no-posts">Постів немає</div>;
  }

  return (
    <>
      <div className="container-posts">
        <div className="post-wrap">
          <div className="posts">
            {posts?.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </div>
          <div className="popular-wrap">
            <div className="popular-posts">Популярні:</div>

            {popularPosts?.map((post, index) => (
              <PopularPosts key={index} post={post} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
