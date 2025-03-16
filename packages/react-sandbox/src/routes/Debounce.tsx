import { useEffect, useRef, useState } from "react";

const debounce = (func: Function, delay: number = 1000) => {
  let id: number; // 클로져

  const set = (...arg: unknown[]) => {
    clearTimeout(id);
    id = setTimeout(() => {
      func(...arg);
    }, delay);
  };
  return set;
};

const useDebounce = (func: Function, delay: number = 1000) => {
  const timeoutRef = useRef<number>(null);

  useEffect(() => {
    // 컴포넌트 언마운트 시 타이머 제거
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const debouncedFunc = (...args: unknown[]) => {
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
