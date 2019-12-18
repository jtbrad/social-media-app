import React, { useState, } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleRegister = (newUser, history) => {
    debugger
    axios.post("/api/auth", newUser)
      .then( res => {
        setUser(res.data.data);
        history.push("/");
      })
      .catch( err => {
        console.log(err);
      })
  };

  return (
    <AuthContext.Provider value={{
      user,
      handleRegister,
      }}>
      { props.children }
    </AuthContext.Provider>
  );
};
