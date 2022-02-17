import { useState, useEffect, useRef, useContext } from "react";
import { getRandomUser } from "../utils/random";
function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cwfUser") === null) {
        let user = getRandomUser();

        localStorage.setItem("cwfUser", JSON.stringify(user));
      }
    }
    let user = JSON.parse(localStorage.getItem("cwfUser")) ?? getRandomUser();
    setUser(user);
  }, []);
  return user;
}
export default useUser;
