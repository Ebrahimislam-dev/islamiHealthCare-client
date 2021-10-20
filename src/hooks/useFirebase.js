import { useEffect, useState } from "react"
import { getAuth, signInWithPopup, signOut, GoogleAuthProvider, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth'
import initializeAuthentication from "../firebase/firebase.init";



initializeAuthentication();


const useFirebase = () => {

    const auth = getAuth();
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true)
    // email and password reset email
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLogin, setIsLogin] = useState(false);



    // Authenticatopn For email & password



    const handleRegistration = e => {
        e.preventDefault();
        console.log(email, password);
        if (password.length < 6) {
            setError('Password Must be at least 6 characters long.')
            return;
        }
        if (isLogin) {
            processLogin(email, password);

        }
        else {
            registerNewUser(email, password);
        }

    }
    // email and password auth methods
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user
                console.log(user)
                setError('')
                verifyEmail()
            })
            .catch(error => {
                setError(error.message)
            })
    }


    const processLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setIsLogin(true);
                setUser(user);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    const registerNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                setIsLogin(true);
                setUser(user);
                setUserName();


            })
            .catch(error => {
                setError(error.message);
            })
    }

    const setUserName = () => {
        updateProfile(auth.currentUser, { displayName: name })
            .then(result => { })
    }


    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }
    const toggleLogin = (e) => {
        setIsLogin(e.target.checked)
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value)
    }
    const verifyEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(result => {
                console.log(result)
            })
    }
    // Authentication For Google login System

    const signInUsingGoogle = () => {
        setIsLoading(true);
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)

            .finally(() => setIsLoading(false));

    }






    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            }
            else {
                setUser({})
            }
            setIsLoading(false)
        });
        return unsubscribe;
    }, [auth])

    const logOut = () => {
        setIsLoading(true)
        signOut(auth)
            .then(() => { })
            .finally(() => setIsLoading(false));
    }
    return {
        isLoading,
        user,
        signInUsingGoogle,
        createNewUser,

        logOut,
        handleNameChange,
        name,
        handleEmailChange,
        handlePasswordChange,
        handleRegistration,
        error,
        isLogin,
        toggleLogin,
        processLogin,

    }

}

export default useFirebase;









