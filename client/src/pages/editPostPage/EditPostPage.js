import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/post/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";

export default function EditPostPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [oldImage, setOldImage] = useState("");
  const [newImage, setNewImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const params = useParams();

  const fetchPost = useCallback(async () => {
    const { data } = await axios.get(`/posts/${params.id}`);
    setTitle(data.title);
    setText(data.text);
    setOldImage(data.imgUrl);
  }, [params.id]);

  const submitHandler = () => {
    try {
      const updatedPost = new FormData();
      updatedPost.append("title", title);
      updatedPost.append("text", text);
      updatedPost.append("id", params.id);
      updatedPost.append("image", newImage);
      dispatch(updatePost(updatedPost));
      navigate("/posts");
    } catch (error) {
      console.log(error);
    }
  };

  const clearFormHandler = () => {
    setTitle("");
    setText("");
  };

  useEffect(() => {
    fetchPost();
  }, [fetchPost]);
  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="label-form">
          Додати фото:
          <input
            type="file"
            onChange={(e) => {
              setNewImage(e.target.files[0]);
              setOldImage("");
            }}
            className="file-input"
          />
        </label>
        <div className="img-wrap">
          {oldImage && (
            <img
              src={`http://localhost:3002/${oldImage}`}
              alt={oldImage.name}
            />
          )}
          {newImage && (
            <img src={URL.createObjectURL(newImage)} alt={newImage.name} />
          )}
        </div>
        <label className="title-label">
          Заголовок поста:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="input-title"
          />
        </label>
        <label className="text-label">
          Текст поста:
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="input-text"
          />
        </label>
        <div className="btn-wrap">
          <button onClick={submitHandler} className="add-btn">
            Оновити
          </button>
          <button onClick={clearFormHandler} className="cancel-btn">
            Відмінити
          </button>
        </div>
      </form>
    </>
  );
}
