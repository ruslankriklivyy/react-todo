import styled from 'styled-components';

export const TodoList = styled.ul`
  $self: &;

  margin-bottom: 30px;

  ::last-child {
    margin-bottom: 0;
  }

  .add-button {
    opacity: 0.5;

    &:hover {
      opacity: 1;
    }
  }

  li {
    display: flex;
    align-items: center;
    padding: 10px 12px;
    align-items: center;
    transition: background-color 0.15s ease-in-out;
    cursor: pointer;

    :hover .remove-icon {
      opacity: 0.2;
    }

    #{$self} .remove-icon {
      opacity: 0;
      transition: opacity 0.15s ease-in-out;

      :hover {
        opacity: 0.8;
      }
    }

    &:hover {
      background: rgba(255, 255, 255, 0.5);
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
    }

    &.active {
      background: #fff;
      box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.04);
      border-radius: 4px;
    }

    span {
      display: block;
      flex: 1;
      text-overflow: ellipsis;
      overflow: hidden;
      width: 120px;
      white-space: nowrap;
    }

    i {
      display: inline-flex;
      margin-right: 7px;

      svg {
        opacity: 0.7;
        path {
          fill: #7c7c7c;
        }
      }
    }

    img {
      display: block;
      padding-left: 6px;
    }
  }
`;
