import { useEffect, useState } from 'react';
import initializeFirebase from '../pages/Firebase/firebase.init';
import { getAuth, createUserWithEmailAndPassword,signOut, onAuthStateChanged,updateProfile ,signInWithEmailAndPassword  } from "firebase/auth";


initializeFirebase();
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');
    const [admin, setAdmin] = useState(false);

    const auth = getAuth();

    const registerUser = (email, password,name,history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setAuthError('');
                const newUser = {email, displayname: name};
                setUser(newUser);
                //save user to database
                savedUser(email, name);
                updateProfile(auth.currentUser, {
                    displayName: name, 
                  }).then(() => {
                  }).catch((error) => {
                  });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                console.log(error);
            })
            .finally(() => setIsLoading(false));
    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }

    // observer user state
    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, [auth])

    console.log(user.email);
    useEffect(()=>{
        const url=`https://murmuring-fjord-09510.herokuapp.com/users/${user.email}`;
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log('check admin=',data)
            setAdmin(data.admin)
        })
        .catch(err=>{console.log(err.message)});
    },[user,admin]);
    console.log(admin);

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
        .finally(() => setIsLoading(false));
    }

    const savedUser = (email, displayName) =>{
        const user = {email, displayName};
        fetch('https://murmuring-fjord-09510.herokuapp.com/users',{
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(user)
        })
            .then()
    }
 
    
    return {
        user,
        admin,
        isLoading,
        authError,
        registerUser,
        loginUser,
        logout,
    }
}

export default useFirebase;