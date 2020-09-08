import React, {createContext, useEffect, useState} from 'react'
import {auth} from '../firebase';

const UserContext = createContext(null);

export const UserContextProvider = (props) => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    auth.onAuthStateChanged(userAuth => {
      setUser(userAuth);
    });
  }, []);
  return <UserContext.Provider value={user}>{props.children}</UserContext.Provider>
}

export default UserContext;
