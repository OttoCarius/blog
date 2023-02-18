import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  color: rgb(240, 228, 228);

  @media (max-width: 673px) {
    width: 380px;
  }

  @media (max-width: 450px) {
    width: 280px;
  }
`;

export const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  background-color: #33beff;
  color: antiquewhite;
  font-size: 14px;
  margin: 8px 0;

  @media (max-width: 673px) {
    margin: 8px 0;
  }

  @media (max-width: 450px) {
    margin: 6px 0;
  }
`;

export const CommentWrap = styled.div`
  display: flex;

  color: white;
  font-size: 12px;
  letter-spacing: 0.04em;

  @media (max-width: 450px) {
    font-size: 10px;
    letter-spacing: 0.02em;
  }
`;
