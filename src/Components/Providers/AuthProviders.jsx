import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
import { GithubAuthProvider } from "firebase/auth/cordova";

const auth = getAuth(app)

export const AuthContext = createContext(null)


const AuthProviders = ({children}) => {

  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()
  const githubProvider = new GithubAuthProvider()

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider)
}
const githubLogin = () => {
  return signInWithPopup(auth, githubProvider)
}
  

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  } 

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
        console.log('observing current user inside useEffect of AuthProvider', currentUser)
        setUser(currentUser);
        setLoading(false);
    })

    return () => {
      unSubscribe()
    }
  }, [])

  const authInfo = {
    user,
    loading,
    createUser,
    loginUser,
    googleLogin,
    githubLogin,
    logOut
  }

  return (
    <div>
      <AuthContext.Provider value={authInfo}>
          {children}
      </AuthContext.Provider>
      
    </div>
  );
};

export default AuthProviders;