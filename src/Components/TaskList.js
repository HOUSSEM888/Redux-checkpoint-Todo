import React from 'react';
import TaskItem from './TaskItem';
import { useSelector } from 'react-redux';

const TaskList = ({ onEdit, onDelete, onToggle }) => {
  const tasks = useSelector((state) => state.tasks);
  const filter = useSelector((state) => state.filter);

  // Filter tasks based on the selected filter
  const filteredTasks = tasks.filter((task) => {
    if (filter === 'completed') return task.isDone;
    if (filter === 'incomplete') return !task.isDone;
    return true; // Return all tasks if no filter
  });

  return (
    <div className="task-list">
      {filteredTasks.length === 0 ? (
        <p>No tasks available.</p> 
      ) : (
        filteredTasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
