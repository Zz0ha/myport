import styled, { keyframes } from "styled-components";

//animation
const bounce = keyframes`
  100% {
    top: -10px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 #ccc, 0 7px 0 #ccc, 0 8px 0 #ccc, 0 9px 0 #ccc,
      0 50px 25px rgba(0, 0, 0, 0.2);
  }`;

//Style
const StyledLink = styled.div`
  text-decoration: none;
  color: #000;
`;

const MainWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  h1 {
    cursor: Default;
    font-weight: 700;
    font-size: 90px;
    letter-spacing: 5px;
    text-shadow: 0 1px 0 #ccc, 0 2px 0 #ccc, 0 3px 0 #ccc, 0 4px 0 #ccc,
      0 5px 0 #ccc, 0 6px 0 transparent, 0 7px 0 transparent,
      0 8px 0 transparent, 0 9px 0 transparent, 0 10px 10px rgba(0, 0, 0, 0.4);
    margin: 0;
  }
  .searchBar {
    width: 600px;
    height: 50px;
    box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.5);
    border-radius: 50px;
    display: flex;
    align-items: center;
    margin: 40px 0;
    .Icon {
      margin: 0px 20px;
    }
    p {
      color: #999999;
      flex: 1;
    }
  }
  .linkButtonWrap {
    width: 600px;
    display: flex;
    justify-content: space-evenly;
    .Button {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      padding: 20px;
      gap: 15px;
      &:hover {
        background-color: #000;
        color: #ffffff;
        border-radius: 10px;
        transition: 0.5s;
        .linkIcon {
          color: #000;
        }
      }
      .buttonCircle {
        width: 60px;
        height: 60px;
        border-radius: 50px;
        background: #f1f3f4;
        display: flex;
        align-items: center;
        justify-content: center;
        .linkIcon {
          font-size: 22px;
        }
      }
    }
  }
`;

const Color = {
  blue: "#4688f1",
  red: "#e8453c",
  yellow: "#fabb2d",
  green: "#3aa757",
};

const Text = styled.span`
  color: ${({ color }) => color};
  position: relative;
  top: 20px;
  animation: ${bounce} 0.3s ease infinite alternate;
  ${() => {
    let returncss: string = "";
    for (let i = 1; i < 10; i++) {
      returncss += `&:nth-child(${i}) {
          animation-delay: 0.${i}s;
        }`;
    }
    return returncss;
  }}
`;

export { bounce, StyledLink, MainWrap, Color, Text };
