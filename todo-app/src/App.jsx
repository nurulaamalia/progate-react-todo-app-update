import React, { useState } from 'react';
import Todos from './components/Todos';
import TodoForm from './components/TodoForm';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Finish Progate React Course', completed: false },
    { id: 2, title: 'Have lunch with Guru Domba', completed: false },
    { id: 3, title: 'Study React with Ninja Ken', completed: false },
  ]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>My Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <Todos todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

const styles = {
  container: {
    textAlign: 'center',
    padding: '12px',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#f4f4f4',
    minHeight: '100vh',
  },
  title: {
    fontSize: '36px',
    color: '#333',
  },
};

export default App;
