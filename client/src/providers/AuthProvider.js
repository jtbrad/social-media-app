import React, { useState, } from 'react';
import axios from 'axios';

export const AuthContext = React.createContext();

export const AuthConsumer = AuthContext.Consumer;

export const AuthProvider = (props) => {
  const [user, setUser] = useState(null);

  const handleLogin = (newUser, history) => {
    debugger
    axios.post("/api/auth/sign_in", newUser)
      .then( res => {
        setUser(res.data.data);
        history.push("/");
      })
      .catch( err => {
        console.log(err);
      })
  };

  const handleRegister = (newUser, history) => {
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
      handleLogin,
      handleRegister,
      }}>
      { props.children }
    </AuthContext.Provider>
  );
};
