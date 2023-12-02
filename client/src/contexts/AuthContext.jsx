import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({
    children,
    value
}) => {
    const [auth, setAuth] = useState({});


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};


export default AuthContext;
