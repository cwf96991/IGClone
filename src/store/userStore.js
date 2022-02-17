import React, { useReducer, useState, useEffect } from "react";
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

  
  const [userState, userDispatch] = useReducer(reducer, {});
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
