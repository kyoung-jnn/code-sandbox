import { useEffect, useRef, useState } from "react";

const debounce = <Params extends unknown[]>(
  func: (...args: Params) => void,
  delay: number = 1000,
) => {
  let timeoutId: number | null = null;

  return (...args: Params) => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func(...args);
      timeoutId = null;
    }, delay);
  };
};

const useDebounce = <Params extends unknown[]>(
  func: (...args: Params) => void,
  delay: number = 1000,
) => {
  const timeoutRef = useRef<number>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedFunc = (...args: Params) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      func(...args);
    }, delay);
  };

  return debouncedFunc;
};

function Debounce() {
  // React
  const [inputValue, setInputValue] = useState("");
  const setDebouncedValue = useDebounce(setInputValue);

  // JavaScript
  useEffect(() => {
    const inputElement = document.getElementById("input");
    const resultElement = document.getElementById("output");

    const updateOutput = (value: string) => {
      if (resultElement) {
        resultElement.textContent = value;
      }
    };

    const setDebouncedValue = debounce(updateOutput);
    const handleInput = (e: Event) => {
      const target = e.target as HTMLInputElement;
      setDebouncedValue(target.value);
    };

    if (inputElement) {
      inputElement.addEventListener("input", handleInput);
    }

    return () => {
      if (inputElement) {
        inputElement.removeEventListener("input", handleInput);
      }
    };
  }, []);

  return (
    <div>
      <h1>JavaScript</h1>
      <input id="input" />
      <h3 id="output"></h3>
      <hr />
      <h1>React</h1>
      <input onChange={(e) => setDebouncedValue(e.target.value)} />
      <h3>{inputValue}</h3>
    </div>
  );
}

export default Debounce;
