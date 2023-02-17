import React, { useCallback, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
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
    return <div className="no-posts">Постів немає</div>;
  }

  return (
    <div>
      <button className="post-page__button">
        <Link className="post-page__link" to={"/"}>
          Назад
        </Link>
      </button>
      <div className="post-page__container">
        <div className="post-page__wrap">
          <div className="post-page__img-wrap">
            <div className={post?.imgUrl ? "image-wrap2" : "image-wrap-two2"}>
              {post?.imgUrl && (
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
            <p className="text-posts">{post.text}</p>
            <div className="icons-wrap">
              <div className="icons">
                <button className="views">
                  <AiFillEye />
                  <span>{post.views}</span>
                </button>
                <button className="coments">
                  <AiOutlineMessage />
                  <span>{post.comments?.length || 0} </span>
                </button>
              </div>
              {user?._id === post.author && (
                <div className="icons">
                  <button className="edit">
                    <Link to={`/${params.id}/edit`}>
                      <AiFillEdit />
                    </Link>
                  </button>
                  <button onClick={removePostHandler} className="delete">
                    <AiOutlineDelete />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="post-page__comments">
          <form onSubmit={(e) => e.preventDefault()} className="comment-form">
            <input
              type="text"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Коментар"
              className="comment-input"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="comment-btn"
            >
              Надіслати
            </button>
          </form>
          {comments?.map((cmt, index) => (
            <CommentItem key={(cmt._id, index)} cmt={cmt} />
          ))}
        </div>
      </div>
    </div>
  );
}
