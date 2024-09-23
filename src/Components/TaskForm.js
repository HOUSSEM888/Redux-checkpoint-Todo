import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask, updateTask } from '../Redux/taskActions';

const TaskForm = ({ taskToEdit, setTaskToEdit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  // Effect to set fields when editing a task
  useEffect(() => {
    if (taskToEdit) {
      setName(taskToEdit.name);
      setDescription(taskToEdit.description);
    } else {
      setName('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && description.trim()) { // Ensure fields are not just whitespace
      const task = { name, description, isDone: false };
      if (taskToEdit) {
        dispatch(updateTask({ ...task, id: taskToEdit.id })); // Dispatch update action
      } else {
        dispatch(addTask(task)); // Dispatch add action
      }
      // Reset the form and task to edit
      setName('');
      setDescription('');
      setTaskToEdit(null);
    } else {
      alert('Veuillez remplir les deux champs.'); 
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="NAME"
        required
      />
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description "
        required
      />
      <button type="submit">{taskToEdit ? 'Update' : 'ADD TO LIST'}</button>
    </form>
  );
};

export default TaskForm;

