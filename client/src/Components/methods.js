/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";

export function setImgError(e, img){
    if(!img) return;
    e.target.src = img;
}

export function isLogged() {
    const { isAuthenticated } = useAuth0();

    // prevenir doble redirect (auth0)
    if(isAuthenticated){
        return true;
    }
    
    const isSession = useSelector((state) => state.loginState);

    if(!isSession || !isSession.token){
        return undefined;
    }
    return isSession;
}

export function isLoggedAdmin(){
    const isSession = isLogged();
    if(!isSession){
        return undefined;
    }    

    return isSession.role === "admin";
}