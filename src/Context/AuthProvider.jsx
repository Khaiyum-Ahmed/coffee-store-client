import { createUserWithEmailAndPassword, deleteUser, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {

     const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
     }

     const deleteUserFB = ()=>{
        const user = auth.currentUser;
        return deleteUser(user);
     }

     const signIn = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password);
     }

    const userInfo = {
        signUp,
        deleteUserFB,
        signIn
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;