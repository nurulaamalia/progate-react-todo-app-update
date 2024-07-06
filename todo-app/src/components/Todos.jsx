import React from 'react';
import TodoItem from './TodoItem';

const Todos = ({ todos, toggleTodo, deleteTodo }) => {
  return (
    <div style={styles.container}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
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
