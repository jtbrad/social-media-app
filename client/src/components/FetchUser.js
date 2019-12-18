import React, { useContext, useEffect, useState, } from 'react';
import axios from 'axios';
import { AuthContex, AuthContext, } from '../providers/AuthProvider';

const FetchUser = (props) => {
  const auth = useContext(AuthContext);
  const [loaded, setLoaded] = useState(true);

  useEffect( () => {

    if (auth.user) {
      setLoaded(true);
    } else {
      if (checkLocalToken()) {
        axios.get("/api/auth/validate_token")
          .then( res => {
            auth.setUser(res.data.data)
            setLoaded(true);
          })
      } else {
        setLoaded(true);
      }
    }
  });

  const checkLocalToken = () => {
    const token = localStorage.getItem("access-token");
    return token;
  };


  return (
    loaded ? props.children : null
  );
};

export default FetchUser;