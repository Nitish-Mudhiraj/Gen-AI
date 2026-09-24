import React, { useEffect } from 'react'

import { useAuth } from '../Hooks/useAuth'
import { Navigate } from 'react-router-dom'
import { useauth } from '../../chat/useauth/Useauth'
import Home from '../../chat/pages/Home';
const Protected = () => {

    const { loading, userr } = useAuth();

    const { socketinitialization } = useauth();

    useEffect(() => {
        if (userr) {
            socketinitialization();
        }
    }, [userr]);

    if (loading) {
        return <h1>Loading...</h1>;
    }

    if (!userr) {
        return <Navigate to="/login" replace />;
    }

    return <Home />;
};

export default Protected