import { useState } from "react";

// Custom hook for handling local storage with JSON serialization
function useLocalStorage(key, initialValue) {
  // Get the stored value from local storage (if exists)
  const storedValue = localStorage.getItem(key);

  // Initialize the state with the stored value or the initial value
  const [value, setValue] = useState(
    storedValue ? JSON.parse(storedValue) : initialValue
  );

  // Function to update the local storage and state
  const updateValue = (newValue) => {
    setValue(newValue);
    localStorage.setItem(key, JSON.stringify(newValue));
  };

  // Function to remove the value from local storage and state
  const removeValue = () => {
    setValue(null);
    localStorage.removeItem(key);
  };

  return [value, updateValue, removeValue];
}

export default useLocalStorage;
