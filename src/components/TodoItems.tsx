import React from 'react';
interface todoItemsModel {
  items: string[];
  onDeleteTodo: (event: React.MouseEvent) => void;
}
const TodoItems: React.FC<todoItemsModel> = (props) => {
  return (
    <div style={{ display: 'flex', marginLeft: 'auto', marginRight: 'auto' }}>
      <p onClick={props.onDeleteTodo}>{props.items}</p>
    </div>
  );
};

export default TodoItems;
