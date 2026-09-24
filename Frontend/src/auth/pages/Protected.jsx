import React, { useEffect } from 'react'

import { useAuth } from '../Hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { useauth } from '../../chat/useauth/Useauth'
import Home from '../../chat/pages/Home';
const Protected = () => {
  const { loading, userr } = useAuth();
  const {socketinitialization} = useauth()
  console.log("Protected:", {
    loading,
    userr,
    path: window.location.pathname,
  });

  useEffect(()=>{
    socketinitialization()
  },[])
  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (!userr) {
    console.log("Redirecting to login");
    return <Navigate to="/login" replace />;
  }

  console.log("Rendering home");
  return <Home/>
};

export default Protected