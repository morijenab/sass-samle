import React, { useReducer } from "react";
import StateProvider from "./context";

export default function State({ children }) {

  const initialState = {
    user: {
      name: "mori",
      role: { roleId: undefined }
    },
    userRole: {
      roleId: undefined
    }

  }
  function reducer(state, action) {
    console.log(action);
    switch (action.type) {

      case 'SET_USER':
        return { ...state, user: action.payLoad };

      default:
        break;

    }
  }

  const setUser = (user) => {
    console.log(user);
    dispatch({ type: "SET_USER", payLoad: user });
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { user } = state;
  console.log(children);
  return (
    <StateProvider.Provider value={{ state, setUser }}>
      {children}
    </StateProvider.Provider>
  );

}


