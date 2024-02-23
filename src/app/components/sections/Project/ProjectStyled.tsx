import styled from "styled-components";

const ProjectWrap = styled.div`
  .companyProjectWrap {
    margin: 100px 0;
    > h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 30px;
    }
    .projectSection {
      display: flex;
      flex-direction: column;
      justify-items: center;
      row-gap: 50px;
    }
  }
`;

const ProjectCardWrap = styled.div`
  width: 90%;
  margin: 0 auto;
  padding: 30px 20px;
  border-radius: 20px;
  box-shadow: 15px 15px 15px rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: space-around;
  .projectCardLeft {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
    .projectLogo {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      min-height: 70px;
    }
    table {
      tr {
        vertical-align: top;
        text-align: left;
        th,
        td {
          padding: 5px 0;
        }
        th {
          width: 20%;
        }
        td {
          li {
            list-style: "- ";
            margin-bottom: 5px;
            text-indent: -12px;
          }
        }
      }
    }
  }
  .projectCardRight {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    img {
      width: 250px;
    }
  }
`;
export { ProjectWrap, ProjectCardWrap };
