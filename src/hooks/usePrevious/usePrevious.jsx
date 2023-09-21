import { useRef, useEffect } from "react";

function usePrevious(value) {
  // Create a ref to store the previous value
  const ref = useRef();

  // Use useEffect to update the ref with the current value
  useEffect(() => {
    ref.current = value;
  }, [value]);

  // Return the previous value
  return ref.current;
}

export default usePrevious;
