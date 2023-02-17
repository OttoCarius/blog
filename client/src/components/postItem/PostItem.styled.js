import styled from "styled-components";

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  flex-grow: 1;
`;

export const ImgWrap = styled.div`
  display: flex;
  border-radius: 4px;
  height: 380px;
`;

export const ImgWrapTWo = styled.div`
  display: flex;
  border-radius: 4px;
`;

export const Img = styled.img`
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

export const Date = styled.div`
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

export const IconWrap = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const ViewsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgb(56, 56, 55);
  font-size: 16px;
  opacity: 0.8;
`;

export const CommentsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: rgb(56, 56, 55);
  font-size: 16px;
  opacity: 0.8;
`;

export const NoPost = styled.div`
  font-size: 24px;
  text-align: center;
  color: antiquewhite;
  padding: 40px 0;
`;
