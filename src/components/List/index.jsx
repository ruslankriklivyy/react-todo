import React from 'react';
import axios from 'axios';
import classNames from 'classnames';

import Badge from '../Badge';
import { TodoList } from './styled';

import removeSvg from '../../assets/img/remove.svg';

const List = ({ items, onClick, activeItem, isRemove, onClickItem, removeList }) => {
  const onRemoveList = (item) => {
    if (window.confirm('Вы действительно хотите удалить список?')) {
      axios.delete('/' + item.id).then(() => {
        removeList(item.id);
      });
    }
  };

  return (
    <TodoList onClick={onClick}>
      {items.map((item, index) => (
        <li
          onClick={onClickItem ? () => onClickItem(item) : null}
          key={index}
          className={classNames(item.className, {
            active: item.active ? item.active : activeItem && activeItem.id === item.id,
          })}>
          <i>{item.icon ? item.icon : <Badge color={item.color.name} />}</i>
          <span>
            {item.name}
            {item.tasks && item.tasks.length >= 0 && ` (${item.tasks.length})`}
          </span>
          {isRemove && (
            <img
              onClick={() => onRemoveList(item)}
              className="remove-icon"
              src={removeSvg}
              alt="remove icon"
            />
          )}
        </li>
      ))}
    </TodoList>
  );
};

export default List;
