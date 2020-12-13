import React, { createContext, useReducer } from "react";
import authInitialState from "./initialstates/authInitialState";
import contactsInitialState from "./initialstates/contactsInitialState";
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";

export const GlobalContext = createContext({});

export const GlobalProvider = ({ children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [constactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);

  return <GlobalContext.Provider value={{authState, authDispatch, constactsState, contactsDispatch,}}>{children}</GlobalContext.Provider>
}