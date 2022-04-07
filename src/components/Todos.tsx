import React from 'react';

import Todo from '../models/todo';

// function Todos(props: { items: string[], children: any }) {
// React.FC<{ items: string [] } -> props: { children: any, items string [] }
const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
