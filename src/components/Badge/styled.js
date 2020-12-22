import styled from 'styled-components';

export const BadgeStyle = styled.i`
  position: relative;
  display: inline-block;
  left: 5px;
  width: 10px;
  height: 10px;
  border-radius: 100%;

  &.badge--green {
    background-color: #42b883;
  }
  &.badge--blue {
    background-color: #64c4ed;
  }
  &.badge--pink {
    background-color: #ffbbcc;
  }
  &.badge--grey {
    background-color: #c9d1d3;
  }
  &.badge--lime {
    background-color: #b6e6bd;
  }
  &.badge--black {
    background-color: #110133;
  }
  &.badge--red {
    background-color: #ff6464;
  }
  &.badge--purple {
    background-color: #c355f5;
  }
`;
