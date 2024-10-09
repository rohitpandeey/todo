// src/TodoItem.tsx
import React from 'react';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  deleteTodo: (id: number) => void;
  toggleCompletion: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, deleteTodo, toggleCompletion }) => {
  return (
    <div className={`flex items-center justify-between p-2 ${todo.completed ? 'bg-green-100' : 'bg-white'} border-b`}>
      <span 
        onClick={() => toggleCompletion(todo.id)} 
        className={`cursor-pointer ${todo.completed ? 'line-through' : ''}`}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)} className="bg-red-500 text-white p-1 rounded">
        Delete
      </button>
    </div>
  );
};

export default TodoItem;
