import { useContext } from "react";
import UserContext from "@/context/UserProvider";

export default function UseUser() {
  return useContext(UserContext);
}
