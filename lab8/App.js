import React from 'react';
import './Styles.css';
import ToDoList from './ToDoList';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ToDoList />
      </header>
    </div>
  );
}
export default App;

// Sources:
// https://dev.to/misszamzam/a-simple-todo-list-app-with-react-1bj3
// https://www.geeksforgeeks.org/create-a-to-do-list-app-using-react-redux/