import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
};

const styles = {
  container: {
    width: '40%',
    margin: '0 auto',
  },
};

export default Todos;
