import {
	createUserWithEmailAndPassword,
	getAuth,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	signOut,
	updateProfile,
} from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import axios from "axios";
import app from './../firebase/firebase.config';
import { getRole } from '../Api/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
	const googleProvider = new GoogleAuthProvider();
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);
	const [role, setRole] = useState(null)

	useEffect(() => {
		if (user) {
		  getRole(user.email).then(data => setRole(data))
		}
	  }, [user])

	// handle theme change

	const [theme, setTheme] = useState(false);

	useEffect(() => {
		setTheme(JSON.parse(window.localStorage.getItem('theme') || 'false'));
	}, []);

	const handleToggleTheme = () => {
		setTheme(!theme);
		window.localStorage.setItem('theme', JSON.stringify(!theme));
	};

	// create user
	const createUser = (email, password) => {
		setLoading(true);
		return createUserWithEmailAndPassword(auth, email, password);
	};

	// user login
	const signIn = (email, password) => {
		setLoading(true);

		return signInWithEmailAndPassword(auth, email, password);
	};

	// update user profile
	const updateUserProfile = (name, photo) => {
		setLoading(true);

		const profile = {
			displayName: name,
			photoURL: photo,
		};

		return updateProfile(auth.currentUser, profile);
	};

	// sign in with google
	const googleSignIn = () => {
		setLoading(true);

		return signInWithPopup(auth, googleProvider);
	};

	// log out
	const logOut = () => {
		setLoading(true);

		return signOut(auth);
	};

	useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('current user', currentUser);

            // get and set token
            if(currentUser){
                axios.post('https://adventure-camp-server.vercel.app/jwt', {email: currentUser.email})
                .then(data =>{
                    // console.log(data.data.token)
                    localStorage.setItem('access-token', data.data.token)
                    setLoading(false);
                })
            }
            else{
                localStorage.removeItem('access-token')
            }

            
        });
        return () => {
            return unsubscribe();
        }
    }, [])

	const authInfo = {
		user,
		loading,
		setLoading,
		createUser,
		updateUserProfile,
		signIn,
		googleSignIn,
		logOut,
		theme,
		handleToggleTheme,
		role,
		setRole,
	};

	return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;