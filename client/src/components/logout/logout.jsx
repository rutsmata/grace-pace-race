import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";

import * as authAPI from '../../api/authAPI'
import Path from "../../paths";
import AuthContext from "../../contexts/AuthContext";

export default function Logout () {
    const navigate = useNavigate();
    const {logoutHandler} = useContext(AuthContext);

    useEffect(() => {
        authAPI.logout()
            .then(() => {
                logoutHandler();
                navigate(Path.Home);
            })
            //logoutHandler added, remove if proble
            .catch(() => {
                logoutHandler();
                navigate(Path.Login)
            })
    }, []);

    return null;
}