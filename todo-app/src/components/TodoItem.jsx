import React from 'react';

const TodoItem = ({ todo, toggleTodo, deleteTodo }) => {
  return (
    <div style={styles.todoItem}>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }} onClick={() => toggleTodo(todo.id)}>
        {todo.title}
      </p>
      <button onClick={() => deleteTodo(todo.id)} style={styles.button}>Delete</button>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px',
  },
  button: {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 10px',
    cursor: 'pointer',
  },
};

export default TodoItem;
