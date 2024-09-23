import React, { useState } from 'react';
import { Provider, useDispatch} from 'react-redux';
import TaskForm from './Components/TaskForm';
import TaskList from './Components/TaskList';
import store from './Redux/store';
import { deleteTask, toggleTask, setFilter } from './Redux/taskActions';
import './Styles.css';

const App = () => {
  const dispatch = useDispatch();
  //const tasks = useSelector(state => state.tasks);
  const [taskToEdit, setTaskToEdit] = useState(null);

  const handleDeleteTask = (id) => {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
      dispatch(deleteTask(id));
    }
  };

  const handleToggleTaskCompletion = (id) => {
    dispatch(toggleTask(id));
  };

  const handleFilterChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <div className="app">
      <h1 style={{ textAlign: 'center', color: 'blue' }}>TO-DO LIST</h1>
      <TaskForm taskToEdit={taskToEdit} setTaskToEdit={setTaskToEdit} />
      
      <select onChange={handleFilterChange}>
        <option value="all">Tout</option>
        <option value="completed">Complété</option>
        <option value="incomplete">Incomplet</option>
      </select>
      
      <TaskList 
        onEdit={setTaskToEdit} 
        onDelete={handleDeleteTask} 
        onToggle={handleToggleTaskCompletion} 
      />
    </div>
  );
};

const Root = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default Root;
