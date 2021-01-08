import React from 'react';
import axios from 'axios';

import { AddList, InputAddList, Button } from './styled';
import List from '../List';
import Badge from '../Badge';

import closeSvg from '../../assets/img/close.svg';

const AddListButton = ({ colors, addList }) => {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [activeBadge, setActiveBadge] = React.useState(1);
  const [inputValue, setInputValue] = React.useState('');

  React.useEffect(() => {
    if (Array.isArray(colors)) {
      setActiveBadge(colors[0].id);
    }
  }, [colors]);

  const onClose = () => {
    setVisiblePopup(false);
    setInputValue('');
    setActiveBadge(colors[0].id);
  };

  const onSetVisiblePopup = () => {
    setVisiblePopup(!visiblePopup);
  };

  const onSetActiveBadge = (id) => {
    setActiveBadge(id);
  };

  const onAddList = () => {
    if (!inputValue) {
      alert('Введите название списка!');
      return;
    }
    axios
      .post('lists', {
        name: inputValue,
        colorId: activeBadge,
      })
      .then(({ data }) => {
        const color = colors.filter((c) => c.id === activeBadge)[0];
        const newList = { ...data, color, tasks: [] };
        addList(newList);
        onClose();
      });
  };

  return (
    <>
      <List
        onClick={onSetVisiblePopup}
        items={[
          {
            className: 'add-button',
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: 'Добавить список',
          },
        ]}
      />
      {visiblePopup && (
        <AddList>
          <img onClick={onClose} src={closeSvg} alt="" />
          <InputAddList
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Название папки"></InputAddList>
          <ul>
            {colors.map((color) => {
              return (
                <Badge
                  onClick={() => onSetActiveBadge(color.id)}
                  className={activeBadge === color.id && 'active'}
                  key={color.id}
                  color={color.name}></Badge>
              );
            })}
          </ul>
          <Button onClick={onAddList}>Добавить</Button>
        </AddList>
      )}
    </>
  );
};

export default AddListButton;
