import React, { useState } from "react";
import { ProjectCardWrap, ProjectWrap } from "./ProjectStyled";
import { Title } from "../../commonStyled";
import { personalProject, project } from "@/app/data/project";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Project = React.forwardRef<HTMLDivElement>(({}, ref) => {
  const [btnDown, setBtnDown] = useState(false);
  const btnHandler = () => {
    setBtnDown(true);
  };
  return (
    <ProjectWrap ref={ref}>
      <div className="container">
        <Title>Project</Title>
        <div className="companyProjectWrap">
          <h2>Company Project</h2>
          <div className="projectSection">
            {project.map((projectElement, idx) => {
              return (
                <ProjectCardWrap key={idx}>
                  <div className="projectCardLeft">
                    <div className="projectLogo">
                      <img src={projectElement.logo} alt="" />
                    </div>
                    <h2>{projectElement.name}</h2>
                    <p>{projectElement.desc}</p>
                    <table className={btnDown ? "nohidden" : "hidden"}>
                      <tbody>
                        <tr>
                          <th>소속</th>
                          <td>{projectElement.company}</td>
                        </tr>
                        <tr>
                          <th>기간</th>
                          <td>{projectElement.period}</td>
                        </tr>
                        <tr>
                          <th>사용기술</th>
                          <td>{projectElement.skill}</td>
                        </tr>
                        <tr>
                          <th>업무</th>
                          <td>
                            {projectElement.work.map((work, idx) => {
                              return <li key={idx}>{work}</li>;
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="projectCardRight">
                    {projectElement.workImg.map((img, idx) => {
                      return <img src={img} alt="" key={idx} />;
                    })}
                  </div>
                </ProjectCardWrap>
              );
            })}
          </div>
        </div>
        {/* company project */}

        <div className="companyProjectWrap">
          <h2>Personal Project</h2>
          <div className="projectSection">
            {personalProject.map((personalPro, idx) => {
              return (
                <ProjectCardWrap key={idx}>
                  <div className="projectCardLeft">
                    <div className="projectLogo">
                      <img src={personalPro.logo} alt="" />
                    </div>
                    <h2>{personalPro.name}</h2>
                    <p>{personalPro.desc}</p>
                    <table className={btnDown ? "nohidden" : "hidden"}>
                      <tbody>
                        <tr>
                          <th>소속</th>
                          <td>{personalPro.company}</td>
                        </tr>
                        <tr>
                          <th>기간</th>
                          <td>{personalPro.period}</td>
                        </tr>
                        <tr>
                          <th>사용기술</th>
                          <td>{personalPro.skill}</td>
                        </tr>
                        <tr>
                          <th>설명</th>
                          <td>
                            {personalPro.work.map((work, idx) => {
                              return <li key={idx}>{work}</li>;
                            })}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="projectCardRight">
                    {personalPro.workImg.map((img, idx) => {
                      return <img src={img} alt="" key={idx} />;
                    })}
                  </div>
                </ProjectCardWrap>
              );
            })}
          </div>
        </div>
      </div>
    </ProjectWrap>
  );
});

export default Project;
