import { useState, useContext, createContext, useEffect } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState({
        user: null,
        token: "",
    });
    useEffect(() => {
        const Lcdata = localStorage.getItem('auth');
        if (Lcdata) {
            const parseData = JSON.parse(Lcdata);
            setAuth({
                ...auth,
                user: parseData.user,
                token: parseData.token
            })

        }
    }, [auth]);
    return (
        <AuthContext.Provider value={[auth, setAuth]}>
            {children}
        </AuthContext.Provider>
    );
};

//custom hook
const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };