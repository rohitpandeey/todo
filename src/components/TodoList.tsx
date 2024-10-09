// src/TodoList.tsx
import React from 'react';
import TodoItem from './todoitem';
import { Todo } from '../types';

interface TodoListProps {
  todos: Todo[];
  deleteTodo: (id: number) => void;
  toggleCompletion: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = ({ todos, deleteTodo, toggleCompletion }) => {
  return (
    <div>
      {todos.length === 0 ? (
        <p className="text-gray-500">No tasks available.</p>
      ) : (
        todos.map(todo => (
          <TodoItem 
            key={todo.id} 
            todo={todo} 
            deleteTodo={deleteTodo} 
            toggleCompletion={toggleCompletion} 
          />
        ))
      )}
    </div>
  );
};

export default TodoList;
