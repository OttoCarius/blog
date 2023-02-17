import React, { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "../../utils/axios";
import { removePost } from "../../redux/post/postSlice";
import { CommentItem } from "../../components/commentItem/CommentItem";
import {
  createComment,
  getPostComments,
} from "../../redux/comment/commentSlice.js";
import {
  AiFillEye,
  AiOutlineMessage,
  AiOutlineDelete,
  AiFillEdit,
} from "react-icons/ai";
import Moment from "react-moment";
import { toast } from "react-toastify";
import {
  ContainerPostPage,
  PostPageBtn,
  PostPageLink,
  PostPageContainer,
  PostPageWrap,
  PostPageImgWrap,
  ImgWrap2,
  ImgWrapTwo2,
  ImgPost,
  UserWrap,
  UserName,
  Data,
  PostTitle,
  TextPost,
  IconsWrap,
  BtnEdit,
  BtnDelet,
  Icons,
  EditLink,
  PostPageComments,
  CommentForm,
  CommentInput,
  BtnComments,
  NoPosts,
} from "./PostPage.styled";
import "./styles.css";

export default function PostPage() {
  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");

  const { user } = useSelector((state) => state.auth);
  const { comments } = useSelector((state) => state.comment);
  const { status } = useSelector((state) => state.comment);

  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useDispatch();

  const removePostHandler = () => {
    try {
      dispatch(removePost(params.id));
      toast("Пост був видалений");
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = () => {
    try {
      const postId = params.id;
      dispatch(createComment({ postId, comment }));
      // toast("Коментар не може бути порожнім");
      setComment("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchComments = useCallback(async () => {
    try {
      dispatch(getPostComments(params.id));
    } catch (error) {
      console.log(error);
    }
  }, [params.id, dispatch]);

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setPost(data);
  }, [params.id]);

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  useEffect(() => {
    if (status) toast(status);
  }, [status]);

  if (!post) {
    return <NoPosts>Постів немає</NoPosts>;
  }

  return (
    <ContainerPostPage>
      <PostPageBtn>
        <PostPageLink to={"/"}>Назад</PostPageLink>
      </PostPageBtn>
      <PostPageContainer>
        <PostPageWrap>
          <PostPageImgWrap>
            <ImgWrap2>
              {post?.imgUrl ? <ImgWrap2 /> : <ImgWrapTwo2 />}
              {post?.imgUrl && (
                <ImgPost
                  src={`http://localhost:3002/${post.imgUrl}`}
                  alt="img"
                />
              )}
            </ImgWrap2>
            <UserWrap>
              <UserName>{post.username}</UserName>
              <Data>
                <Moment date={post.createdAt} format="D MMM YYYY" />
              </Data>
            </UserWrap>
            <PostTitle>{post.title}</PostTitle>
            <TextPost>{post.text}</TextPost>
            <IconsWrap>
              <Icons>
                <button className="views">
                  <AiFillEye />
                  <span>{post.views}</span>
                </button>
                <button className="coments">
                  <AiOutlineMessage />
                  <span>{post.comments?.length || 0} </span>
                </button>
              </Icons>
              {user?._id === post.author && (
                <Icons>
                  <BtnEdit>
                    <EditLink to={`/${params.id}/edit`}>
                      <AiFillEdit />
                    </EditLink>
                  </BtnEdit>
                  <BtnDelet onClick={removePostHandler}>
                    <AiOutlineDelete />
                  </BtnDelet>
                </Icons>
              )}
            </IconsWrap>
          </PostPageImgWrap>
        </PostPageWrap>
        <PostPageComments>
          <CommentForm onSubmit={(e) => e.preventDefault()}>
            <CommentInput
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Коментар"
            />
            <BtnComments type="submit" onClick={handleSubmit}>
              Надіслати
            </BtnComments>
          </CommentForm>
          {comments?.map((cmt, index) => (
            <CommentItem key={(cmt._id, index)} cmt={cmt} />
          ))}
        </PostPageComments>
      </PostPageContainer>
    </ContainerPostPage>
  );
}
