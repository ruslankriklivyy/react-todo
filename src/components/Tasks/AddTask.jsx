import React from 'react';
import axios from 'axios';

import {
  TaskForm,
  TaskFormNew,
  TaskAdd,
  InputAddTask,
  ButtonTaskAdd,
  ButtonTaskClose,
} from './styled';
import addSvg from '../../assets/img/add.svg';

const AddTask = ({ addTask, list }) => {
  const [visibleAddForm, setVisibleAddForm] = React.useState(false);
  const [inputValue, setInputValue] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const onSetVisibleAddForm = () => {
    setVisibleAddForm(!visibleAddForm);
    setInputValue('');
  };

  const onAddTask = () => {
    const obj = {
      listId: list.id,
      text: inputValue,
      completed: false,
    };

    setIsLoading(true);
    axios
      .post('http://localhost:3001/tasks', obj)
      .then(({ data }) => {
        if (!data.text) {
          alert('Введите задачу');
          return false;
        }
        addTask(list.id, data);
        onSetVisibleAddForm();
      })
      .catch(() => {
        alert('Ошибка при добавлении задачи');
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <TaskForm>
      {!visibleAddForm && (
        <TaskFormNew onClick={onSetVisibleAddForm}>
          <img src={addSvg} alt="add icon" />
          <span>Новая задача</span>
        </TaskFormNew>
      )}
      {visibleAddForm && (
        <TaskAdd>
          <InputAddTask
            placeholder="Текст задачи"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          {isLoading ? (
            <ButtonTaskAdd className={'disabled'} disabled onClick={onAddTask}>
              Добавление...
            </ButtonTaskAdd>
          ) : (
            <ButtonTaskAdd onClick={onAddTask}>Добавить задачу</ButtonTaskAdd>
          )}
          <ButtonTaskClose onClick={onSetVisibleAddForm}>Отмена</ButtonTaskClose>
        </TaskAdd>
      )}
    </TaskForm>
  );
};

export default AddTask;
