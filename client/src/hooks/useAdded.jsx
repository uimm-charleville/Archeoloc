import { AddedContext } from "../contexts/AddedContext";
import { useContext } from "react";

export default function usePhoto() {
  const { added, addOne } = useContext(AddedContext);

  return { added, addOne };
}
