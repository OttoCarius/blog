import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import PostItem from "../../components/postItem/PostItem";
import PopularPosts from "../../components/popularPosts/PopularPosts";
import { getAllPosts } from "../../redux/post/postSlice";
import {
  ContainerPost,
  PostWrap,
  Posts,
  PopularWrap,
  PopularPost,
  NoPosts,
} from "./MainPage.styled.js";

export default function MainPage() {
  const dispatch = useDispatch();
  const { posts, popularPosts } = useSelector((state) => state.post);

  useEffect(() => {
    dispatch(getAllPosts());
  }, [dispatch]);

  if (!posts.length) {
    return <NoPosts>Постів немає</NoPosts>;
  }

  return (
    <>
      <ContainerPost>
        <PostWrap>
          <Posts>
            {posts?.map((post, index) => (
              <PostItem key={index} post={post} />
            ))}
          </Posts>
          <PopularWrap>
            <PopularPost>Популярні:</PopularPost>

            {popularPosts?.map((post, index) => (
              <PopularPosts key={index} post={post} />
            ))}
          </PopularWrap>
        </PostWrap>
      </ContainerPost>
    </>
  );
}
