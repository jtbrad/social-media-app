import React, { useContext, } from "react";
import { Route, Redirect, } from "react-router-dom";
import { AuthContext, } from "../providers/AuthProvider";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  const auth = useContext(AuthContext);

  return (
    <Route 
      { ...rest }
      render={ props => (
        auth.user ?
          <Component { ...props } />
        :
          <Redirect 
            to="/login"
          />
      )}
    />   
  )
};


export default ProtectedRoute;