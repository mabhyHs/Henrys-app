/* eslint-disable react-hooks/rules-of-hooks */
import { useSelector } from "react-redux";

export function setImgError(e, img){
    if(!img) return;
    e.target.src = img;
}

export function isLogged() {
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