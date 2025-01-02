
import { createContext, useContext } from 'react';

const authContext = createContext();
export function ProvideAuth({ children }) {
    const cookies = typeof window !== "undefined" && localStorage.getItem('user');
    const user = JSON.parse(cookies);
    return (
        <authContext.Provider value={user}>
            {children}
        </authContext.Provider>
    );
}
export function useAuth() {
    return useContext(authContext);
}
