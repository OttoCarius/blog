import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerPostPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;

  @media (max-width: 1000px) {
    max-width: 960px;
  }

  @media (max-width: 673px) {
    max-width: 600px;
    padding: 30px 20px;
  }

  @media (max-width: 466px) {
    max-width: 460px;
    padding: 10px 20px;
  }
`;

export const PostPageBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2280ac;

  font-size: 16px;
  border-radius: 8px;
  padding: 8px 16px;

  :hover {
    background-color: #33beff;
  }

  @media (max-width: 673px) {
    font-size: 14px;
    padding: 6px 12px;
  }

  @media (max-width: 466px) {
    font-size: 12px;
    padding: 4px 8px;
  }
`;

export const PostPageLink = styled(Link)`
  color: antiquewhite;
`;

export const PostPageContainer = styled.div`
  display: flex;
  gap: 40px;
  padding: 32px 0;

  @media (max-width: 900px) {
  }

  @media (max-width: 673px) {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 12px 0;
  }
`;

export const PostPageWrap = styled.div`
  width: 70%;

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    width: 100%;
  }
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
  height: 380px;

  @media (max-width: 900px) {
    height: 300px;
  }

  @media (max-width: 600px) {
    height: 200px;
  }
`;

export const ImgWrapTwo2 = styled.div`
  display: flex;
  border-radius: 4px;
`;

export const ImgPost = styled.img`
  object-fit: contain;
  width: 100%;

  @media (max-width: 900px) {
    object-fit: contain;
  }

  @media (max-width: 673px) {
    object-fit: contain;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`;

export const UserName = styled.div`
  font-size: 20px;
  color: antiquewhite;
  opacity: 0.8;
  margin-top: 10px;
  margin-bottom: 10px;

  @media (max-width: 900px) {
    font-size: 16px;
  }

  @media (max-width: 673px) {
    font-size: 14px;
  }
`;

export const Data = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: antiquewhite;
  opacity: 0.8;

  @media (max-width: 673px) {
    font-size: 14px;
  }
`;

export const PostTitle = styled.div`
  color: antiquewhite;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 673px) {
    font-size: 18px;
  }
`;

export const TextPost = styled.p`
  color: antiquewhite;
  opacity: 0.8;
  font-size: 16px;
  padding-top: 8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 20;
  margin-bottom: 15px;

  @media (max-width: 673px) {
    font-size: 14px;
  }
`;

export const IconsWrap = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  gap: 20px;
  color: antiquewhite;
  font-size: 20px;

  @media (max-width: 673px) {
    font-size: 16px;
  }
`;

export const BtnEdit = styled.button`
  color: antiquewhite;
  font-size: 20px;
  opacity: 0.8;
  gap: 8px;

  @media (max-width: 673px) {
    font-size: 16px;
  }
`;

export const EditLink = styled(Link)`
  color: antiquewhite;
`;

export const BtnDelet = styled.button`
  color: antiquewhite;
  font-size: 20px;
  opacity: 0.8;
  gap: 8px;

  @media (max-width: 673px) {
    font-size: 16px;
  }
`;

export const PostPageComments = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 33%;
  padding: 20px;
  border-radius: 6px;

  @media (max-width: 900px) {
    padding: 25px 0;
  }

  @media (max-width: 690px) {
    padding: 40px 0;
    width: 100%;
  }
`;

export const CommentForm = styled.form`
  display: flex;
  gap: 8px;

  @media (max-width: 937px) {
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 673px) {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }
`;

export const CommentInput = styled.input`
  color: black;
  width: 180px;
  border-radius: 4px;
  border: 2px solid;
  border-color: #000000;
  background-color: antiquewhite;
  padding: 8px;
  font-size: 16px;
  outline: none;

  @media (max-width: 937px) {
    width: 240px;
    padding: 6px;
  }

  @media (max-width: 782px) {
    width: 180px;
    font-size: 16px;
    padding: 4px;
  }
`;

export const BtnComments = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  color: white;
  font-size: 20px;
  border-radius: 20px;
  padding: 6px 14px;

  :hover {
    background-color: #000000a2;
  }

  @media (max-width: 1056px) {
    font-size: 18px;
    padding: 4px 8px;
  }

  @media (max-width: 673px) {
    background-color: #33beff;
    color: white;
    font-size: 14px;
    padding: 3px 6px;
  }
`;

export const NoPosts = styled.div`
  font-size: 24px;
  text-align: center;
  color: antiquewhite;
  padding: 40px 0;
`;
