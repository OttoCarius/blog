import styled from "styled-components";

export const ContainerPost = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 40px 0;
`;

export const PostWrap = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 32px;
`;

export const Posts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  flex-basis: 80%;
`;

export const PopularWrap = styled.div`
  flex-basis: 20%;
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
