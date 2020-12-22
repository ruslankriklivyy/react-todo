import styled from 'styled-components';

export const AddList = styled.div`
  width: 235px;
  height: 148px;
  padding: 18px;
  background: #ffffff;
  position: relative;
  top: -23px;
  left: 10px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  img {
    position: absolute;
    top: -8px;
    right: -8px;
    cursor: pointer;
  }

  ul {
    margin: 14px 0;
    display: flex;
    justify-content: space-between;
  }

  i {
    position: static;
    border: 2px solid transparent;
    width: 18px;
    height: 18px;
    cursor: pointer;
  }
  i.active {
    border-color: #525252;
  }
`;

export const InputAddList = styled.input`
  width: 100%;
  height: 32px;
  background-color: #fff;
  background: #ffffff;
  border: 1px solid #efefef;
  border-radius: 4px;
  padding: 5px 11px;
  outline: none;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    color: #c7c7c7;
    letter-spacing: 0.15px;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 37px;
  opacity: 0.8;
  background: #4dd599;
  border-radius: 4px;
  border: none;
  outline: none;
  color: #fff;
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 0.15px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 1;
  }
`;

export const addListColors = styled.ul`
  .badge {
    display: inline-block;
    width: 14px;
    height: 14px;
  }
`;
