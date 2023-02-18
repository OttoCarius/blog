import styled from "styled-components";

export const ContainerPost = styled.div`
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

export const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  flex-basis: 60%;

  @media (max-width: 1000px) {
    flex-basis: 50%;
  }
`;

export const PopularWrap = styled.div`
  flex-basis: 20%;

  @media (max-width: 673px) {
    flex-basis: 10%;
  }
`;

export const PopularPost = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  color: antiquewhite;
`;

export const NoPosts = styled.div`
  font-size: 24px;
  text-align: center;
  color: antiquewhite;
  padding: 40px 0;
`;
