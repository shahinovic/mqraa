import { useState, useEffect } from "react";

function useDebouncedSearch(searchTerm, delay) {
  const [results, setResults] = useState([]);

  useEffect(() => {
    // Function to perform the search (replace with your actual search logic)
    const performSearch = async () => {
      setResults(searchTerm);
    };

    // Use a timer to debounce the search function
    const timerId = setTimeout(() => {
      performSearch();
    }, delay);

    // Cleanup: Clear the timer if the searchTerm changes or when the component unmounts
    return () => {
      clearTimeout(timerId);
    };
  }, [searchTerm, delay]);

  return results;
}

export default useDebouncedSearch;
