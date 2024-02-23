'use client';
import React from 'react';
import {SkillDescBox, SkillsWrap} from './SkillsStyled';
import {Title} from '../../commonStyled';
import {
  frontskills,
  versionControlSkills,
  communicationSkills,
} from '../../../data/skills';

const Skills = React.forwardRef<HTMLDivElement>(({}, ref) => {
  return (
    <>
      <SkillsWrap ref={ref}>
        <div className="container">
          <Title>Skills</Title>
          <div className="skillsTableWrap">
            <div>
              <h2>Front-end Skills</h2>
              <table>
                <thead>
                  <tr>
                    <th>순위</th>
                    <th>스킬</th>
                    <th>티어</th>
                  </tr>
                </thead>
                <tbody>
                  {frontskills.map(el => {
                    return (
                      <tr>
                        <td>{el.rank}</td>
                        <td className="skillsNameBox">
                          <img
                            src={el.logo.src}
                            alt=""
                            width={30}
                            height={30}
                          />
                          {el.name}
                        </td>
                        <td>
                          <img src={el.tier.src} alt="" />
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
            <div>
              <div>
                <h2>VersionControl Skills</h2>
                <table>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>스킬</th>
                      <th>티어</th>
                    </tr>
                  </thead>
                  <tbody>
                    {versionControlSkills.map(el => {
                      return (
                        <tr>
                          <td>{el.rank}</td>
                          <td className="skillsNameBox">
                            <img
                              src={el.logo.src}
                              alt=""
                              width={30}
                              height={30}
                            />
                            {el.name}
                          </td>
                          <td>
                            <img src={el.tier.src} alt="" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              <div>
                <h2>Communication Skills</h2>
                <table>
                  <thead>
                    <tr>
                      <th>순위</th>
                      <th>스킬</th>
                      <th>티어</th>
                    </tr>
                  </thead>
                  <tbody>
                    {communicationSkills.map(el => {
                      return (
                        <tr>
                          <td>{el.rank}</td>
                          <td className="skillsNameBox">
                            <img
                              src={el.logo.src}
                              alt=""
                              width={30}
                              height={30}
                            />
                            {el.name}
                          </td>
                          <td>
                            <img src={el.tier.src} alt="" />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </SkillsWrap>
      <SkillDescBox>
        <div className="container">
          <div className="skillBox">
            <ul>
              <h2>Skills</h2>
              <li>
                - 유명한 건축가 미켈란젤로가 있습니다. HTML & CSS로 웹 사이트를
                멋지게 구축시켜 웹 상의 미켈란젤로가 될 자신이 있습니다.
              </li>
              <li>
                - 순살아파트, 순살건축의 문제가 많은 요즘, 부실공사의 웹사이트를
                구축하지 않습니다. 검색어 최적화 그리고 문서의 가독성을 위한
                메타태그 및 시맨틱 태그를 활용하여 뼈대있는 사이트를 구축할 수
                있습니다. 
              </li>
              <li>
                - 사이트 개발 후 개발된 사이트 특성 상노출이 잘 되어야 하기
                때문에 SEO를 적용시켜 Google Analytics, Naver Search Adviser,
                Microsoft Bing Webmaster Tools, yandex Webmaster에 연동하여
                방문자의 데이터를 확인하고 분석한 경험이 있어서 마케팅 활용에
                도움이 될 수 있습니다.
              </li>
              <li>
                - jQuery와 Javascript를 활용하여 스크롤 애니메이션을 구현할 수
                있고, interactive한 웹사이트를 만들 수 있습니다.
              </li>
              <li>
                - Javascript ES6+ 문법을 활용하여 개발 할 수 있고, Promise객체의
                비동기 처리를 라이브러리 없이, 그리고 라이브러리를 활용하여
                구현할 수 있습니다.
              </li>
              <li>
                - REST API에 대해 이해를 하고있고, RESTful하게 구성된 API를
                활용하여 CRUD (로그인, 회원가입, 장바구니, 마이페이지 등) 기능을
                구현할 수 있습니다.
              </li>
              <li>
                - React를 기반으로 Styled components를 활용하여 재사용 가능한
                컴포넌트를 모듈화 하여 구현할 수 있고 React-query를 활용하여
                데이터의 서버 상태관리와 Recoil을 활용하여 상태관리를 할 수
                있습니다.
              </li>
              <li>
                - Typescript를 활용한 Type-safe한 웹을 구현할 수 있습니다.
              </li>
            </ul>
            <ul>
              <h2>Tools</h2>
              <li>
                - Figma와 Zeplin 툴의 기본적인 기능을 알고있어서 디자이너와
                원활한 소통이 가능하고 간단한 작업이 가능합니다.
              </li>
              <li>
                - 평소에 Notion에 TodoList 작성, TIL, 캘린더 활용 등을 사용하고
                있어서 Notion 기능 활용이 가능합니다.
              </li>
              <li>
                - Slack으로 메신저, 코드 공유, 파일 공유 등 커뮤니케이션이
                가능합니다.
              </li>
              <li>- Git을 활용한 형상관리를 할 수 있습니다</li>
              <li>
                - AWS S3의 서버에 이미지 업로드 및 관리를 한 경험이 있습니다.
              </li>
            </ul>
          </div>
        </div>
      </SkillDescBox>
    </>
  );
});

export default Skills;