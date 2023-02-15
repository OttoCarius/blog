import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/post/postSlice";
import { useNavigate } from "react-router-dom";
import "./styles.css";

export default function AddPostPage() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      dispatch(createPost(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const clearForm = () => {
    setText("");
    setTitle("");
  };

  return (
    <>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <label className="label-form">
          Додати фото:
          <input
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
            className="file-input"
          />
        </label>
        <div className="img-wrap">
          {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
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
            Додати
          </button>
          <button onClick={clearForm} className="cancel-btn">
            Відмінити
          </button>
        </div>
      </form>
    </>
  );
}
