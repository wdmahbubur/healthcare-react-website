import firebaseAuthentication from "../firebase/firebase.initialize";
import { GoogleAuthProvider, getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { useState } from "react";

firebaseAuthentication();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState();

    const googleProvider = new GoogleAuthProvider();

    const auth = getAuth();

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(user);
        }
    });
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
            })
            .catch(error => {
                setError(error.message)
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
        signOutUser
    }
}
export default useFirebase;