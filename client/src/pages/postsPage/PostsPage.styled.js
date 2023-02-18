import styled from "styled-components";

export const PostPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 50%;
  margin: 0 auto;
  padding: 20px 0;
  /* 
  @media (max-width: 1280px) {
    width: 80%;
  } */

  @media (max-width: 673px) {
    width: 90%;
    gap: 20px;
  }
`;
