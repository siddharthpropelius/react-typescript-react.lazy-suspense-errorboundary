import React, { useRef } from 'react';

interface newTodosModel {
  onAddTodo: (text: string) => void;
}

const NewTodos: React.FC<newTodosModel> = (props) => {
  const inputTxtRef = useRef<HTMLInputElement>(null);
  const handleOnSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const inputTxt = inputTxtRef.current!.value;
    if (inputTxt?.trim().length === 0) {
      //throw error
      return;
    }
    props.onAddTodo(inputTxt);
  };
  return (
    <div>
      <form onSubmit={handleOnSubmit}>
        <label>Todo Title:</label>
        <input type="text" ref={inputTxtRef} required />
        <button>Add</button>
      </form>
    </div>
  );
};

export default NewTodos;
