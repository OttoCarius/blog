import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../redux/post/postSlice";
import { useNavigate } from "react-router-dom";
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
} from "./AddPostPage.styled";

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
      <Form onSubmit={(e) => e.preventDefault()}>
        <LabelForm>
          Додати фото:
          <FileInput
            type="file"
            onChange={(e) => setImage(e.target.files[0])}
          />
        </LabelForm>
        <ImgWraper>
          {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
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
          <AddBtn onClick={submitHandler}>Додати</AddBtn>
          <CancelBtn onClick={clearForm}>Відмінити</CancelBtn>
        </BtnWrapper>
      </Form>
    </>
  );
}
