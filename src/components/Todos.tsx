import React from 'react';
import TodoItems from './TodoItems';

interface todosModel {
  items: string[];
  onDeleteTodo: (id: string) => void;
}

const Todos: React.FC<todosModel> = (props) => {
  return (
    <div>
      {props.items.map((item: any) => (
          <div key={item}>
        <TodoItems
          items={item}
          onDeleteTodo={props.onDeleteTodo.bind(null, item)}
        />
          </div>
      ))}
    </div>
  );
};

export default Todos;
