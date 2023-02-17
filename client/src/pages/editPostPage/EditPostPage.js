import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { updatePost } from "../../redux/post/postSlice";
import { useParams, useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import {
  Form,
  LabelForm,
  FileInput,
  ImgWraper,
  TitleLabel,
  TitleInput,
  TextLabel,
  TextInput,
  BtnWrapper,
  AddBtn,
  CancelBtn,
} from "./EditPostpage.styled.js";

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
      <Form onSubmit={(e) => e.preventDefault()}>
        <LabelForm>
          Додати фото:
          <FileInput
            type="file"
            onChange={(e) => {
              setNewImage(e.target.files[0]);
              setOldImage("");
            }}
          />
        </LabelForm>
        <ImgWraper>
          {oldImage && (
            <img
              src={`http://localhost:3002/${oldImage}`}
              alt={oldImage.name}
            />
          )}
          {newImage && (
            <img src={URL.createObjectURL(newImage)} alt={newImage.name} />
          )}
        </ImgWraper>
        <TitleLabel>
          Заголовок поста:
          <TitleInput
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </TitleLabel>
        <TextLabel>
          Текст поста:
          <TextInput value={text} onChange={(e) => setText(e.target.value)} />
        </TextLabel>
        <BtnWrapper>
          <AddBtn onClick={submitHandler}>Оновити</AddBtn>
          <CancelBtn onClick={clearFormHandler}>Відмінити</CancelBtn>
        </BtnWrapper>
      </Form>
    </>
  );
}
