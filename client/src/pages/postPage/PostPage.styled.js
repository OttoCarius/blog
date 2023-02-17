import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerPostPage = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const PostPageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;

  font-size: 16px;
  border-radius: 8px;
  padding: 8px 16px;
`;

export const PostPageLink = styled(Link)`
  color: antiquewhite;
`;

export const PostPageContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 32px 0;
`;

export const PostPageWrap = styled.div`
  width: 66%;
`;

export const PostPageImgWrap = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  flex-grow: 1;
`;

export const ImgWrap2 = styled.div`
  display: flex;
  border-radius: 4px;
  height: 320px;
`;

export const ImgWrapTwo2 = styled.div`
  display: flex;
  border-radius: 4px;
`;

export const ImgPost = styled.img`
  object-fit: cover;
  width: 100%;
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const UserName = styled.div`
  font-size: 16px;
  color: rgb(56, 56, 55);
  opacity: 0.8;
`;

export const Data = styled.div`
  font-size: 16px;
  color: rgb(56, 56, 55);
  opacity: 0.8;
`;

export const PostTitle = styled.div`
  color: rgb(56, 56, 55);
  font-size: 24px;
`;

export const TextPost = styled.p`
  color: rgb(56, 56, 55);
  opacity: 0.8;
  font-size: 16px;
  padding-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`;

export const IconsWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
  align-items: center;
  align-content: center;
`;

export const Icons = styled.div`
  display: flex;
  margin-top: 10px;
  gap: 20px;
  color: rgb(56, 56, 55);
  font-size: 16px;
`;

export const BtnEdit = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  color: white;
  font-size: 16px;
  opacity: 0.8;
`;

export const EditLink = styled(Link)``;

export const BtnDelet = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgb(56, 56, 55);
  font-size: 16px;
  opacity: 0.8;
`;

export const PostPageComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 33%;
  padding: 32px;

  border-radius: 6px;
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 8px;
`;

export const CommentInput = styled.input`
  color: black;
  width: 100%;
  border-radius: 4px;
  border: 1px;
  background-color: antiquewhite;
  padding: 8px;
  font-size: 16px;
  outline: none;
`;

export const BtnComments = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: cadetblue;
  font-size: 16px;
  border-radius: 20px;
  padding: 8px 16px;
`;

export const NoPosts = styled.div`
  font-size: 24px;
  text-align: center;
  color: antiquewhite;
  padding: 40px 0;
`;
