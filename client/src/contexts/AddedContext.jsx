import { createContext, useState } from "react";

export const AddedContext = createContext();

export default function AddedContextProvider({ children }) {
  const [added, setAdded] = useState([]);

  const addOne = (details) => {
    setAdded([...added, details]);
  };

  return (
    <AddedContext.Provider
      value={{
        added,
        addOne,
      }}
    >
      {children}
    </AddedContext.Provider>
  );
}
