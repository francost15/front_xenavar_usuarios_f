/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { registerRequest,loginRequest,verifyTokenRequest } from '../api/auth';
import Cookies from 'js-cookie';

export const AuthContext = createContext()

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error ("UseAuth must be within an AuthProvider");
    }
    return context;
};
export const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, SetErrrors] = useState([]);
    const [loading, setLoading] = useState(true);
    const  signup = async (user) => {
    try {
        const res = await registerRequest(user)
        setUser(res.data)
        setIsAuthenticated(true);
        }catch (error) {
            SetErrrors(error.response.data);
        }
    }
    const signin = async (user) => {
        try{
            const res = await loginRequest(user)
            console.log(res)
            setIsAuthenticated(true);
            setUser(res.data)
        }catch (error) {
            if(Array.isArray(error.response.data)){
            return SetErrrors(error.response.data);
            }
            SetErrrors([error.response.data.message]) 
        }
    }
    const logout =  () => {
        Cookies.remove('token');
        setUser(null);
        setIsAuthenticated(false);

    }
    useEffect(() => {
        if (errors.length > 0) {
        const timer = setTimeout(() =>{
            SetErrrors([])
        }, 5000)
        return () => clearTimeout(timer)
        }
    }, [errors]);
    useEffect(() => {
        async function checklogin () {
            const cookies= Cookies.get();
            
            if (!cookies.token) {
                setIsAuthenticated(false);
                setLoading(false);
                return setUser(null);
            }
                try {
                    const res = await verifyTokenRequest(cookies.token);
                    if (!res.data) {
                        setIsAuthenticated(false);
                        setLoading(false);
                        return;
                    }

                        setIsAuthenticated(true);
                        setUser(res.data);
                        setLoading(false);
                }catch (error) {
                    setIsAuthenticated(false);
                    setUser(null);
                    setLoading(false);
                }
            
        }
        checklogin();
    }, []);
    
    return (
        <AuthContext.Provider 
        value={{
            signup,
            signin,
            logout,
            loading,
            user,
            isAuthenticated,
            errors
            }} >
            {children}
        </AuthContext.Provider>
    )
}