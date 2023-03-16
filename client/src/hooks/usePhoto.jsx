import { PhotoContext } from "../contexts/PhotoContext";
import { useContext } from "react";

export default function usePhoto() {
  const { photo, setPhoto } = useContext(PhotoContext);

  return { photo, setPhoto };
}
