import React from 'react';

import Todo from '../models/todo';
import TodoItem from './TodoItem';

// function Todos(props: { items: string[], children: any }) {
// React.FC<{ items: string [] } -> props: { children: any, items string [] }
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        // !!! we can add key={...} even though we don't specify it in TodoItem.tsx
        // because it is of type React.FC !!!
        <TodoItem key={item.id} text={item.text} />
      ))}
    </ul>
  );
};

export default Todos;
