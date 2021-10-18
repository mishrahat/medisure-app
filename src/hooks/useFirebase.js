import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebase.init";
initializeAuthentication();

const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const googleUser = result.user;
                setUser(googleUser);
            })

    }

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({});
        })
    }

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        })
    }, [])

    return {
        user,
        signInWithGoogle,
        logOut
    }

}