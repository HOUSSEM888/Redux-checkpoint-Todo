const initialState = {
    tasks: JSON.parse(localStorage.getItem('tasks')) || [],
    filter: 'all', // all, completed, or incomplete
  };
  
  const taskReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TASK':
        return {
          ...state,
          tasks: [...state.tasks, { ...action.payload, id: Date.now(), isDone: false }],
        };
      case 'UPDATE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => (task.id === action.payload.id ? action.payload : task)),
        };
      case 'DELETE_TASK':
        return {
          ...state,
          tasks: state.tasks.filter(task => task.id !== action.payload),
        };
      case 'TOGGLE_TASK':
        return {
          ...state,
          tasks: state.tasks.map(task => (task.id === action.payload ? { ...task, isDone: !task.isDone } : task)),
        };
      case 'FILTER_TASKS':
        return {
          ...state,
          filter: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default taskReducer;
  