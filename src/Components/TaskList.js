import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = ({ onEdit, onDelete, onToggle }) => {
  const { tasks, filter } = useSelector(state => state);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true;
  });

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggle={onToggle}
        />
      ))}
    </div>
  );
};

export default TaskList;
