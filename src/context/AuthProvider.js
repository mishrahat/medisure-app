import useFirebase from '../hooks/useFirebase';
const { createContext } = require("react");


export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const allContexts = useFirebase();
    return (
        <AuthContext.Provider value={allContexts}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;