import styled from "styled-components";

export const PostItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  flex-grow: 1;
`;

export const ImgWrap = styled.div`
  display: flex;
  border-radius: 4px;

  /* @media (max-width: 670px) {
    height: 380px;
  }
  @media (max-width: 480px) {
    height: 220px;
  } */
`;

export const ImgWrapTWo = styled.div`
  display: flex;
  border-radius: 4px;
`;

export const Img = styled.img`
  object-fit: contain;
  width: 100%;

  @media (max-width: 1000px) {
    object-fit: contain;
  }

  @media (max-width: 600px) {
    object-fit: contain;
  }
`;

export const UserWrap = styled.div`
  display: flex;
  justify-content: space-between;
  justify-items: center;
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
    font-size: 10px;
  }
`;

export const Date = styled.div`
  margin-top: 10px;
  font-size: 16px;
  color: antiquewhite;
  opacity: 0.8;

  @media (max-width: 673px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 10px;
    margin-top: 5px;
  }
`;

export const PostTitle = styled.div`
  color: antiquewhite;
  font-size: 24px;
  margin-bottom: 10px;

  @media (max-width: 673px) {
    font-size: 18px;
  }

  @media (max-width: 480px) {
    font-size: 14px;
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
  -webkit-line-clamp: 4;
  margin-bottom: 15px;

  @media (max-width: 673px) {
    font-size: 14px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
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
  color: antiquewhite;
  opacity: 0.8;
  font-size: 16px;
`;

export const CommentsBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  color: antiquewhite;
  opacity: 0.8;
  font-size: 16px;
`;

export const NoPost = styled.div`
  font-size: 24px;
  text-align: center;
  color: antiquewhite;
  padding: 40px 0;
`;
