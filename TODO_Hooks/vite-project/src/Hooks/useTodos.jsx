import { useCallback } from 'react';
import useLocalStorage from './useLocalStorage';

function useTodos() {
  // use local storage to persist todos
  const [todos, setTodos] = useLocalStorage('todos', []);//loads todo from local storage setTodos to update and persist to local storage

  // useCallback to memorize func for optimized not recreating again after triggering rerender
  const addTodo = useCallback((text) => {
    //creating newtodos based on text appending it to previous todos array list
    const newTodo = {
      id: Date.now(),        // Unique ID based on current time
      text,                  // The todo text
      completed: false       // Initial state is incomplete
    };
    setTodos((prev) => [...prev, newTodo]); 
  }, [setTodos]);

  // Toggle the completion status of a todo
  const toggleTodo = useCallback((id) => {
    //prev is list of todos it will map and check which id is matching and convert it to true means completed otherwise same
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, [setTodos]);

  // Remove a todo by ID
  //Keepin only those todos whose ids doesnt match with id that we select
  const removeTodo = useCallback((id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  }, [setTodos]);

  // Clear all todos
  const clearTodos = useCallback(() => {
    setTodos([]);
  }, [setTodos]);

  // Return all methods and todos array
  return {
    todos,
    addTodo,
    toggleTodo,
    removeTodo,
    clearTodos
  };
}

export default useTodos;
