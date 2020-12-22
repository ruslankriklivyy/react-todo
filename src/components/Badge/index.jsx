import React from 'react';
import classNames from 'classnames';
import { BadgeStyle } from './styled';

const Badge = ({ color, onClick, className }) => {
  return (
    <BadgeStyle
      onClick={onClick}
      className={classNames({ [`badge--${color}`]: 'active' }, className)}></BadgeStyle>
  );
};

export default Badge;
