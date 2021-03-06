import React, { useState, useEffect, useContext, createContext } from 'react';
import cookie from 'js-cookie';
import { createUser } from './db';
import firebase from './firebase';
import Router from 'next/router';

const authContext = createContext();

export function AuthProvider({ children }) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};

function useProvideAuth() {
    const [user, setUser] = useState(null);

    const handleUser = (rawUser) => {
        if (rawUser) {
            const user = formatUser(rawUser);

            const { token, ...userWithoutToken } = user;

            createUser(user.uid, userWithoutToken);
            setUser(user);
            cookie.set('fast-feedback-auth', true, {
                expires: 1,
            });
            return user;
        } else {
            Router.push('/');
            setUser(false);
            cookie.remove('fast-feedback-auth');
            return false;
        }
    };

    const signinWithGithub = async () => {
        return await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GithubAuthProvider())
            .then((response) => {
                Router.push('/dashboard');
                handleUser(response.user);
            });
    };

    const signinWithGoogle = async () => {
        return await firebase
            .auth()
            .signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then((response) => {
                Router.push('/dashboard');
                handleUser(response.user);
            });
    };

    const signout = async () => {
        return await firebase
            .auth()
            .signOut()
            .then(() => {
                handleUser(false);
            });
    };

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged(handleUser);

        return () => unsubscribe();
    }, []);

    return {
        user,
        signinWithGithub,
        signinWithGoogle,
        signout,
    };
}

const formatUser = (user) => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
        token: user.ya,
    };
};
