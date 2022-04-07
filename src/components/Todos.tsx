import React from 'react';

// function Todos(props: { items: string[], children: any }) {
// React.FC<{ items: string [] } -> props: { children: any, items string [] }
const Todos: React.FC<{ items: string[] }> = (props) => {
  return (
    <ul>
      {props.items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
};

export default Todos;
