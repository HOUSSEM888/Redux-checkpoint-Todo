import React, { useState } from 'react';
import { Provider, useDispatch, useSelector } from 'react-redux';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import store from './Redux/store';
import { deleteTask, toggleTask, filterTasks } from './Redux/taskActions';
import './Styles.css';

const App = () => {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTask(id));
  };

  const handleFilterChange = (e) => {
    dispatch(filterTasks(e.target.value));
  };

  return (
    <div className="app">
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      <select onChange={handleFilterChange}>
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="incomplete">Incomplete</option>
      </select>
      <TaskList tasks={tasks} onEdit={setTaskToEdit} onDelete={handleDeleteTask} onToggle={handleToggleTaskCompletion} />
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
