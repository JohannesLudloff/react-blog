import React, { useContext, useState, useEffect } from "react";
import { auth } from "../firebase"; // import auth module

const AuthContext = React.createContext();

export function useAuth() {
	return useContext(AuthContext);
}

export function AuthProvider({ children }) {
	const [currentUser, setCurrentUser] = useState(""); // use state to store user

	function signUp(email, password) {
		return auth.createUserWithEmailAndPassword(email, password); // use auth module to sign up user with email and pw
	}
	useEffect(() => {
		// only run it once when mounting
		const unsubscribe = auth.onAuthStateChanged((user) => setCurrentUser(user)); // when authorisation state changes set the current user accordingly
		return unsubscribe; // unsubscribes whenever component unmounts
	}, []);

	const value = { currentUser, signUp };

	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
