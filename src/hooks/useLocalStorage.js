import { useState, useEffect } from "react";

export function useLocalStorage(key = "", initialValue = "") {
  const [storedValue, setStoredValue] = useState(() => {
    if (typeof window === "undefined") {
      return initialValue;
    }

    const item = window.localStorage.getItem(key);
    return item !== null ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    setStoredValue(value);

    if (typeof window !== "undefined") {
      window.localStorage.setItem(key, JSON.stringify(value));
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleStorageChange = (e) => {
        if (e.key === key && e.newValue !== e.oldValue) {
          setStoredValue(JSON.parse(e.newValue));
        }
      };

      window.addEventListener("storage", handleStorageChange);
      return () => {
        window.removeEventListener("storage", handleStorageChange);
      };
    }
  }, [key]);

  return [storedValue, setValue];
}

export default useLocalStorage;
