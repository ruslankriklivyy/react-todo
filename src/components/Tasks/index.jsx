import React from 'react';
import AddTask from './AddTask';
import { TasksTitle } from './styled';
import { Link } from 'react-router-dom';
import editSvg from '../../assets/img/edit.svg';
import Task from './Task';

const Tasks = ({
  list,
  onEditNameList,
  addTask,
  onRemoveTask,
  onEditTask,
  onCompletedTask,
  withoutEmpty,
}) => {
  const editNameList = (id) => {
    const title = window.prompt();
    if (title) {
      onEditNameList(id, title);
    }
  };

  return (
    <>
      <Link to={`lists/${list.id}`}>
        <TasksTitle style={{ color: list.color.hex }}>
          {list.name}
          <img onClick={() => editNameList(list.id)} src={editSvg} alt="edit svg" />
        </TasksTitle>
      </Link>
      <Task
        list={list}
        onRemove={onRemoveTask}
        onEdit={onEditTask}
        onCompleted={onCompletedTask}
        withoutEmpty={withoutEmpty}
      />
      <AddTask key={list.id} list={list} addTask={addTask} />
    </>
  );
};

export default Tasks;
