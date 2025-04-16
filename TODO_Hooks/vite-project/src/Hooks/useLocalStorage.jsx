// hooks/useLocalStorage.js
// we need to persist todos even after a refresh  localStorage is perfect 

// this hook helps me to save and load todos automatically

// no need to manually write localStorage logic every time — we will just call this hook
import { useState, useEffect } from 'react';
// accepts a key like todos to store and receieve from local storage initial value if nothing exist iin todo initially
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    //on first render i will check if my key elem exist or not
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue; //if yes parse it to json and return it
  });
// this is sideeffects whenever stored value changes update local storage   
// Converts the value into a JSON string (since localStorage only stores strings
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  return [storedValue, setStoredValue];//returning current data and setter to update and automatically save local storage
}

export default useLocalStorage;
