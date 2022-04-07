import React, { useContext } from 'react';

import TodoItem from './TodoItem';
import { TodosContext } from '../store/todo-context';
import classes from './Todos.module.css';

// function Todos(props: { items: string[], children: any }) {
// React.FC<{ items: string [] } -> props: { children: any, items string [] }
// const Todos: React.FC<{ items: Todo[]; onRemoveTodo: (id: string) => void }> = (props) => {
const Todos: React.FC = () => { // we remove "props" because we use Context now
  const todosCtx = useContext(TodosContext);

  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        // <li key={item.id}>{item.text}</li>
        // !!! we can add key={...} even though we don't specify it in TodoItem.tsx
        // because it is of type React.FC !!!
        <TodoItem
          key={item.id}
          text={item.text}
          // .bind(what-this-refers-to, first-argument-the-function-will-receive-later)
          onRemoveTodo={todosCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
