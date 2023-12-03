import { useContext } from "react"
import { Navigate, Outlet } from "react-router-dom";

import AuthContext from "../../contexts/AuthContext"
import Path from "../../paths";

export default function AuthGuard(props) {
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        return <Navigate to={Path.Login} />;
    }

    return   <Outlet/>
    
}