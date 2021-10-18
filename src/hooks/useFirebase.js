import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, updateProfile, createUserWithEmailAndPassword, sendEmailVerification, sendPasswordResetEmail, } from 'firebase/auth'
import initializeAuthentication from "../firebase/firebase.init";





initializeAuthentication();
const useFirebase = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLogin, setIsLogin] = useState(false)


    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider)

    }
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({})
            })
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
        });
        return unsubscribe;
    }, [auth])
    ////////////////////////////////////////////////////////////////////////////////////////

    //******************States*******************

    //*********************************************************
    const handleRegistation = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password Must be minimum six charcater')
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setError('password must contain two uppercase')
            return;
        }
        isLogin ? processLogin(email, password) : registerNewUser(email, password);


    }
    const processLogin = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('')
            })
            .catch(error => {

                setError(error.message);

            })
    }
    //*********************
    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setUsername();
                veryfyEmail();
            })
            .catch(error => {
                setError(error.message);
            })
    }
    const setUsername = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => {
            })
    }
    const veryfyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result);
            })
    }
    //*********************
    const handleEmailchange = e => {

        setEmail(e.target.value);


    }
    //**********************
    const handleNamechange = e => {
        setName(e.target.value)
    }
    //*********************
    const handlePasswordchange = e => {

        setPassword(e.target.value);
    }
    const handleResetPassword = e => {
        sendPasswordResetEmail(auth, email)
            .then(result => {
                console.log(result);
            })
    }
    //*********************
    const toggleLogin = e => {
        setIsLogin(e.target.checked);
    }
    ////////////////////////////////////////////////////////////////////////////////////////
    return {
        user,
        signInUsingGoogle,
        logOut

    }

}

export default useFirebase;









