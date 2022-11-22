import React, { useRef } from 'react';
import Button from '../layouts/Button'

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
        <Button title={'Add'}/>
      </form>
    </div>
  );
};

export default NewTodos;
