'use client';
import styled from 'styled-components';

const SkillsWrap = styled.div`
  padding: 50px 0;
  .skillsTableWrap {
    padding: 50px;
    display: flex;
    justify-content: space-around;
    h2 {
      padding: 50px 0 20px 0;
    }
    table {
      text-align: center;
      th {
        background-color: #f7f7f9;
      }
      th:nth-child(2) {
        width: 300px;
      }
      .skillsNameBox {
        display: flex;
        align-items: center;
        gap: 20px;
      }
      tr,
      td,
      th {
        padding: 20px;
      }
    }
  }
`;

const SkillDescBox = styled.div`
  .skillBox {
    padding: 50px;
    ul {
      padding: 30px 0;
      h2 {
        margin: 15px 0;
      }
      li {
        background: #f7f7f9;
        padding: 20px 40px;
        border-radius: 20px;
        margin-bottom: 10px;
        text-indent: -12px;
      }
    }
  }
`;
export {SkillsWrap, SkillDescBox};