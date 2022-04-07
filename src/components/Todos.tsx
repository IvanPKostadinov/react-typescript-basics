import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

// function Todos(props: { items: string[], children: any }) {
// React.FC<{ items: string [] } -> props: { children: any, items string [] }
const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (
  props
) => {
  return (
    <ul className={classes.todos}>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        // !!! we can add key={...} even though we don't specify it in TodoItem.tsx
        // because it is of type React.FC !!!
        <TodoItem
          key={item.id}
          text={item.text}
          // .bind(what-this-refers-to, first-argument-the-function-will-receive-later)
          onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
