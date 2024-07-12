import { useState } from "react";
import { myContext } from "./context";
import "../interfaces"
import "../interfaces"
export const MyProvider = ({ children }) => {
  const [state, setState] = useState({
    global: {
      token: "",
      name: "",
      search: "",
      data: {},
      recipe: {},
      favourite: []
    },
  });

  const SetAuth = (target, payload) => {
    setState((prevState) => ({
      ...prevState,
      global: {
        ...state.global,
        [target]: payload,
      },
    }));
  };

  return (
    <myContext.Provider value={{ state, SetAuth }}>
      {children}
    </myContext.Provider>
  );
};
