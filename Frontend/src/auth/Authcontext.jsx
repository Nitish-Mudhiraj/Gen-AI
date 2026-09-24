import React, { createContext, useEffect, useState } from "react";
import { getme } from "../auth/services/authservice";

export const DataContext = createContext();

const Authcontext = ({ children }) => {

    const [userr, setuser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkUser = async () => {
            try {
                const response = await getme();

                if (response?.user) {
                    setuser(response.user);
                }
            } catch (err) {
                console.log("User not logged in");
                setuser(null);
            } finally {
                setLoading(false);
            }
        };

        checkUser();
    }, []);

    return (
        <DataContext.Provider
            value={{
                loading,
                userr,
                setLoading,
                setuser
            }}
        >
            {children}
        </DataContext.Provider>
    );
};

export default Authcontext;