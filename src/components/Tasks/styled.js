import styled from 'styled-components';

import { InputAddList, Button } from '../AddList/styled';

export const TasksStyle = styled.div`
  flex: 1;
  padding: 60px;
  overflow: auto;
  :not(:last-of-type) {
    margin-bottom: 40px;
  }

  a {
    text-decoration: none;
  }
`;

export const TasksTitle = styled.h2`
  font-family: Montserrat;
  font-weight: bold;
  font-size: 32px;
  line-height: 39px;
  color: #64c4ed;
  padding-bottom: 20px;
  border-bottom: 1px solid #f2f2f2;

  :hover {
    img {
      opacity: 0.2;
    }
  }

  img {
    opacity: 0;
    cursor: pointer;
    margin-left: 15px;

    &:hover {
      opacity: 0.8;
    }
  }
`;

export const TasksItems = styled.div`
  margin-top: 30px;

  h2 {
    font-family: Montserrat;
    font-weight: bold;
    font-size: 22px;
    color: #c9d1d3;
    position: absolute;
    left: 50%;
    top: 50%;
  }
`;

export const TaskAction = styled.div`
  display: flex;
  opacity: 0;
  transition: opacity 0.15s ease-in-out;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: lighten(#f4f6f8, 2%);
    border-radius: 6px;
    margin-left: 5px;
    cursor: pointer;

    &:hover {
      background-color: darken(#f4f6f8, 2%);
      svg {
        opacity: 0.9;
      }
    }

    svg {
      width: 11px;
      height: 11px;
      opacity: 0.4;
    }
  }
`;

export const TasksItemsRow = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  &:hover ${TaskAction} {
    opacity: 1;
  }

  p {
    margin: 0;
    margin-left: 15px;
    border: 0;
    font-size: 16px;
    width: 100%;
  }
`;

export const TasksCheckbox = styled.div`
  input {
    display: none;
  }

  svg {
    transition: opacity 0.15s ease-in-out;
    path {
      stroke: #f2f2f2;
    }
  }

  input:checked + label {
    background-color: #4dd599;
    border-color: #4dd599;

    svg {
      opacity: 1;
      path {
        stroke: #fff;
      }
    }
  }

  &:hover {
    label {
      background-color: #f2f2f2;
      border-color: #f2f2f2;
      svg {
        opacity: 1;
        path {
          stroke: #b2b2b2;
        }
      }
    }
  }

  label {
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid #e8e8e8;
    border-radius: 30px;
    width: 20px;
    height: 20px;
    cursor: pointer;
    transition: background-color 0.15s ease-in-out, border-color 0.15s ease-in-out;

    svg {
      opacity: 0;
    }
  }
`;

export const TaskForm = styled.div`
  margin-top: 20px;
`;

export const TaskFormNew = styled.div`
  display: flex;
  align-items: center;
  opacity: 0.4;
  transition: opacity 0.15s ease-in-out;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  img {
    width: 16px;
    height: 16px;
    margin-left: 4px;
  }

  span {
    font-size: 16px;
    margin-left: 19px;
  }
`;

export const TaskAdd = styled.div`
  margin-top: 15px;
`;

export const InputAddTask = styled(InputAddList)`
  font-size: 16px;
  height: 40px;
  margin-bottom: 15px;

  ::placeholder {
    font-size: 16px;
  }
`;

export const ButtonTaskAdd = styled(Button)`
  font-size: 16px;
  height: 40px;
  width: 155px;
  margin-right: 10px;

  &.disabled {
    background-color: grey;
  }
`;

export const ButtonTaskClose = styled(ButtonTaskAdd)`
  width: 100px;
  background: #f4f6f8;
  color: #9c9c9c;
  margin-right: 0;
`;
