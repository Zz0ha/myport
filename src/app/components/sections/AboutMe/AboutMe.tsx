import React from 'react';
import {AboutMeStyled} from './AboutMeStyled';
import {Title} from '../../commonStyled';
import {FaUserCircle} from 'react-icons/fa';
import {
  FaCode,
  FaCakeCandles,
  FaLocationDot,
  FaEnvelope,
} from 'react-icons/fa6';
import {RiKakaoTalkFill} from 'react-icons/ri';

const AboutMe = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <AboutMeStyled ref={ref}>
      <div className="container">
        <div className="aboutMeWrap">
          <Title>About Me</Title>
          <div className="aboutGridWrap">
            <div className="flexWrap">
              <FaUserCircle className="aboutIcon"></FaUserCircle>
              <div>
                <div className="aboutQues">Name</div>
                <div className="aboutAnsw">조하연</div>
              </div>
            </div>
            {/* aboutInfo */}
            <div className="flexWrap">
              <div className="aboutIcon">
                <FaCode></FaCode>
              </div>
              <div>
                <div className="aboutQues">Position</div>
                <div className="aboutAnsw">Front-end Developer</div>
              </div>
            </div>
            {/* aboutInfo */}
            <div className="flexWrap">
              <div className="aboutIcon">
                <FaCakeCandles></FaCakeCandles>
              </div>
              <div>
                <div className="aboutQues">Birth</div>
                <div className="aboutAnsw">95.05.30</div>
              </div>
            </div>
            {/* aboutInfo */}
            <div className="flexWrap">
              <div className="aboutIcon">
                <FaEnvelope></FaEnvelope>
              </div>
              <div>
                <div className="aboutQues">Mail</div>
                <div className="aboutAnsw">jjohayeon@gmail.com</div>
              </div>
            </div>
            {/* aboutInfo */}
            <div className="flexWrap">
              <div className="aboutIcon">
                <FaLocationDot></FaLocationDot>
              </div>
              <div>
                <div className="aboutQues">Address</div>
                <div className="aboutAnsw">경기도 안산시</div>
              </div>
            </div>
            {/* aboutInfo */}
            <div className="flexWrap">
              <div className="aboutIcon">
                <RiKakaoTalkFill></RiKakaoTalkFill>
              </div>
              <div>
                <div className="aboutQues">Kakao</div>
                <div className="aboutAnsw">jjohayeon</div>
              </div>
            </div>
            {/* aboutInfo */}
          </div>
        </div>
      </div>
    </AboutMeStyled>
  );
});

export default AboutMe;
