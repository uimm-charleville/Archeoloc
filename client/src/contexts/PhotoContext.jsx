import { createContext, useState } from "react";

export const PhotoContext = createContext();

export default function PhotoContextProvider({ children }) {
  const [photo, setPhoto] = useState(null);

  return (
    <PhotoContext.Provider
      value={{
        photo,
        setPhoto,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
}
