import React, {useEffect, useState} from 'react';
import { Const } from "../util/Constants";

export default function AdminProtectedRoute({children}) {
    const [protacted, isProtacted] = useState(false);
    useEffect(() => {
        const token = localStorage.getItem(Const.Token);
        if (token){
            isProtacted(true);
        }else{
            localStorage.clear();
            window.location = "/login"
        }
    }, [protacted])
    
    return (
        <>
            {protacted && (children)}    
        </>
    );
};    