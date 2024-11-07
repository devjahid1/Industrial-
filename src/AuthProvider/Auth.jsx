import { createContext } from "react";

export const AuthContext = createContext(null)

const Auth = ({children}) => {
    const authInfo = {name: 'nodi shagor'}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default Auth;