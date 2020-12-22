import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
  }

  html, body {
    margin: 0;
    padding: 0;
  }

  ul, li {
    list-style: none;
    padding: 0;
    margin: 0;
  }
`;

export const Todo = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  top: 50%;
  width: calc(100vw - 30px);
  height: calc(100vh - 100px);
  transform: translate(-50%, -50%);
  box-shadow: 1px 2px 20px #f3f3f3;
  border-radius: 10px;
  border: 1px solid #f1f1f1;
  font-size: 14px;
`;

export const TodoSidebar = styled.div`
  width: 220px;
  height: calc(100%-120px);
  background-color: #f4f6f8;
  border-right: 1px solid #f1f1f1;
  padding: 60px 20px;
`;
