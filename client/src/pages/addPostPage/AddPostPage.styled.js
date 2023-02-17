import styled from "styled-components";

export const Form = styled.form`
  width: 33%;
  margin: 0 auto;
  padding: 50px 0;
`;

export const LabelForm = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-width: 2px;
  border-style: dotted;
  cursor: pointer;
  color: blanchedalmond;
  background-color: cadetblue;
  font-size: 16px;
  padding-top: 18px;
`;

export const FileInput = styled.input`
  visibility: hidden;
`;

export const ImgWraper = styled.div`
  object-fit: cover;
  padding: 8px 0;
`;

export const TitleLabel = styled.label`
  font-size: 20px;
  color: rgb(68, 65, 61);
  opacity: 70%;
`;

export const TitleInput = styled.input`
  margin-top: 4px;
  color: black;
  width: 100%;
  border-radius: 10px;
  background-color: blanchedalmond;
  border: 1px;
  padding: 4px 8px;
  font-size: 16px;
  outline: none;
  margin-bottom: 10px;
`;

export const TextLabel = styled.label`
  font-size: 20px;
  color: rgb(68, 65, 61);
  opacity: 70%;
`;

export const TextInput = styled.textarea`
  margin-top: 4px;
  color: black;
  width: 100%;
  border-radius: 10px;
  background-color: blanchedalmond;
  border: 1px;
  padding: 4px 8px;
  font-size: 16px;
  outline: none;

  resize: none;
  height: 180px;
`;

export const BtnWrapper = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
`;

export const AddBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: rgb(42, 179, 87);
  font-size: 16px;
  color: antiquewhite;
  border-radius: 10px;
  padding: 4px 8px;

  &:active {
    position: relative;
    top: 1px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const CancelBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  background-color: rgb(161, 59, 102);
  font-size: 16px;
  color: antiquewhite;
  border-radius: 10px;
  padding: 4px 8px;

  &:active {
    position: relative;
    top: 1px;
  }

  &:hover {
    opacity: 0.8;
  }
`;
