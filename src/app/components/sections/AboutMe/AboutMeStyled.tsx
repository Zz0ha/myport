

import styled from "styled-components";

const AboutMeStyled = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  .aboutMeWrap {
    .aboutGridWrap {
      padding-top: 50px;
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      .flexWrap {
        display: flex;
        align-items: center;
        padding: 20px;
        gap: 20px;
        .aboutIcon {
          font-size: 40px;
        }
        .aboutQues {
          font-weight: bold;
          font-size: 18px;
        }
        .aboutAnsw {
          color: #888;
        }
      }
    }
  }
`;

export { AboutMeStyled };
