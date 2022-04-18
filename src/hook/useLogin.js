import { useState, useEffect, useRef, useContext } from "react";
import { getRandomUser } from "../utils/random";
function useLogin() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (localStorage.getItem("login") === null) {
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
export default useLogin;
