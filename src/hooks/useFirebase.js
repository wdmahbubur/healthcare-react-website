import firebaseAuthentication from "../firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
    }, [auth])


    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
            })
    }

    const createAccount = (name, email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                updateProfile(auth.currentUser, {
                    displayName: name
                })
                    .then(result => {
                        setUser(result.user)
                    })
                    .catch(err => {
                        setError(err.message);
                    })
            })
    }
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
        }).catch((error) => {
            setError(error.message);
        });
    }


    return {
        user,
        error,
        auth,
        googleSignIn,
        signOutUser,
        createAccount
    }
}
export default useFirebase;