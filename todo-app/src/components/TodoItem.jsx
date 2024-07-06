import React from 'react';

const TodoItem = ({ todo, toggleTodo }) => {
  return (
    <div style={styles.todoItem} onClick={() => toggleTodo(todo.id)}>
      <p style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.title}
      </p>
    </div>
  );
};

const styles = {
  todoItem: {
    border: '2px solid #f4f4f4',
    fontSize: '24px',
    cursor: 'pointer',
  },
};

export default TodoItem;
