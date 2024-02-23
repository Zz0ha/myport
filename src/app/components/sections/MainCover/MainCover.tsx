import React, { useEffect } from "react";
import {
  FaSearch,
  FaMicrophone,
  FaHome,
  FaUserAlt,
  FaBookOpen,
  FaAddressCard,
  FaHeart,
} from "react-icons/fa";
import { StyledLink, MainWrap, Color, Text } from "./MainCoverStyled";
import { onClickbtn } from "@/app/page";

const buttonList = [
  {
    title: "Home",
    icon: FaHome,
    link: "/",
  },
  {
    title: "About",
    icon: FaUserAlt,
    link: "/about",
  },
  {
    title: "Skills",
    icon: FaBookOpen,
    link: "/contact",
  },
  {
    title: "Portfolio",
    icon: FaAddressCard,
    link: "/portfolio",
  },

  {
    title: "Add",
    icon: FaHeart,
    link: "/",
  },
];

const MainCover = React.forwardRef<HTMLDivElement, { btnHandler: onClickbtn }>(
  ({ btnHandler }, ref) => {
    const port2 = ["P", "o", "r", "t", "f", "o", "l", "i", "o"];
    useEffect(() => {}, []);

    return (
      <MainWrap ref={ref}>
        <h1>
          {port2.map((el, idx) => {
            switch (idx) {
              case 0:
              case 3:
              case 8:
                return (
                  <Text color={Color.blue} key={idx}>
                    {el}
                  </Text>
                );
              case 1:
              case 5:
                return (
                  <Text color={Color.red} key={idx}>
                    {el}
                  </Text>
                );
              case 2:
              case 6:
                return (
                  <Text color={Color.yellow} key={idx}>
                    {el}
                  </Text>
                );
              case 4:
              case 7:
                return (
                  <Text color={Color.green} key={idx}>
                    {el}
                  </Text>
                );
              default:
                console.log("err");
            }
          })}
        </h1>
        {/* ---- title ---- */}

        <div className="searchBar">
          <FaSearch className="Icon" />
          <p>안녕하세요 Hayeon의 Portfolio입니다.</p>
          <FaMicrophone className="Icon" />
        </div>
        {/* ---- SearchBar ---- */}

        <div className="linkButtonWrap">
          {buttonList.map((el, idx) => {
            return (
              <StyledLink key={idx}>
                <div
                  className="Button"
                  key={el.title}
                  onClick={(e) => btnHandler(e, el.title)}
                >
                  <div className="buttonCircle">
                    {<el.icon className="linkIcon" />}
                  </div>
                  <p>{el.title}</p>
                </div>
              </StyledLink>
            );
          })}
        </div>
      </MainWrap>
    );
  }
);
export default MainCover;
