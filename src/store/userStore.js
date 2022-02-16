import React, { useReducer } from "react";
import { getRandomUser } from "../utils/random";
import { UserContext } from "../components/UserContext";
const UserStore = ({ children }) => {
  function reducer(state, action) {
    switch (action.type) {
      case "switch":
        return action.value;

      default:
        throw new Error();
    }
  }
  const [userState, userDispatch] = useReducer(reducer, getRandomUser());
  return (
    <UserContext.Provider
      value={{
        userContext: userState,
        setUserByDispatch: userDispatch,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
export default UserStore;
