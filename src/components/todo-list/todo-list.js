import React from 'react';

import TodoListItem from '../todo-list-item';
import './todo-list.css';

const TodoList = ({ todos, onDeleted, onAdded, onToggleDone, onToggleImportant }) => {
  
  const elements = todos.map((item) => {
    const { id, filter, ...itemProps } = item;
    let classNames = "list-group-item";
    if (filter === "done" && !itemProps.done){
      classNames += " hidden";
    }else if (filter === "active" && itemProps.done){
      classNames += " hidden";
    };
    return (
      <li key={id} className={classNames}>
        <TodoListItem {...itemProps } 
        onDeleted = {() => onDeleted(id)}
        onAdded = {() => onAdded()}
        onToggleDone = {() => onToggleDone(id)}
        onToggleImportant = {() => onToggleImportant(id)}
        />
      </li>
    );
  });

  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  );
};

export default TodoList;
