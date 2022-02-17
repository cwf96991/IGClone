import { useState, useEffect, useRef, useContext } from "react";
import { getRandomUser } from "../utils/random";
function useUser() {
  const [user, setUser] = useState({});

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("cwfUser") === null) {
        let user1 = getRandomUser();
        let user2 = getRandomUser();
        let user = {};
        user.user = user1;
        user.extraUser = user2;
        localStorage.setItem("cwfUser", JSON.stringify(user));
      }
    }
    let user1 = getRandomUser();
    let user2 = getRandomUser();
    let tempUser = {};
    tempUser.user = user1;
    tempUser.extraUser = user2;
    let finalUser = JSON.parse(localStorage.getItem("cwfUser")) ?? tempUser;
    setUser(finalUser);
  }, []);
  return user;
}
export default useUser;
