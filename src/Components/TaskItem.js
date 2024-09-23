import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggle }) => {
  return (
    <div className={`task-item ${task.isDone ? 'completed' : ''}`}>
      <div className="task-content" onClick={() => onEdit(task)}>
        <h3>{task.name}</h3> {/* Display the task name */}
        <p>{task.description}</p> {/* Display the task description */}
      </div>
      <div className="task-actions">
        <button onClick={() => onToggle(task.id)}>
          {task.isDone ? 'Mark as Incomplete' : 'Mark as completed'}
        </button>
        <button onClick={() => onEdit(task)}>Edit</button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskItem;
