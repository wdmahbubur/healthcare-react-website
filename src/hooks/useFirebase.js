import firebaseAuthentication from "../firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";

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
                setError("")
            }
        });
    }, [auth])


    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                setError("")
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
                        setError("")
                    })
                    .catch(err => {
                        setError(err.message);
                    })
            })
            .catch(err => {
                setError("Failed To Create Account");
            })
    }
    const signIn = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                setError("")
            })
            .catch(err => {
                if (err.message === "Firebase: Error (auth/user-not-found).") {
                    setError("User Not Found")
                }
                else if (err.message === "Firebase: Error (auth/wrong-password).") {
                    setError("Wrong Password")
                }
                else {
                    setError(err.message)
                }
            })
    }
    const signOutUser = () => {
        signOut(auth).then(() => {
            setUser({});
            setError("")
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
        createAccount,
        signIn
    }
}
export default useFirebase;