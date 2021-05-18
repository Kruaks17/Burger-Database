import { createContext, useContext, useEffect, useState } from 'react';
import nookies from 'nookies';
import firebase from './config/firebase';

const AuthContext = createContext({ user: null })

export const useAuth = () => {
    return useContext(AuthContext);

};

export function AuthProvider({ children }) {

    const [user, setUser] = useState();
    const [loading, setLoading] = useState(true);
    const isAuthenticated = user !== null && !loading;

    useEffect(() => {
        return firebase.auth().onIdTokenChanged(async (user) => {
            if (!user) {
                setUser(null)
                nookies.set(undefined, 'token', null, { path: "/" })
            } else {
                const token = user.getIdToken()
                setUser(user)
                nookies.set(undefined, token, 'token', null, { path: "/" })
            }
            setLoading(false);
        });
    }, []);
    useEffect(() => {
        const handle = setInterval(async () => {
            const user = firebase.auth().currentUser
            if (user) await user.getIdToken(true)
        }, 10 * 60 * 1000)

        return clearInterval(handle)
    }, []);
    useEffect(() => {
        firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(() => {
                return firebase.auth().signInWithEmailAndPassword(email, password);
            })
            .catch((error) => {
            });   
    }, [])

    return <AuthContext.Provider value={{ user, isAuthenticated, loading }}>{!loading && children}</AuthContext.Provider>;
}

