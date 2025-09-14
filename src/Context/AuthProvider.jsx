import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.init";
import { AuthContext } from "./AuthContext";

const AuthProvider = ({children}) => {

     const signUp = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password );
     }

    const userInfo = {
        signUp,
    }
    return (
       <AuthContext value={userInfo}>
        {children}
       </AuthContext>
    );
};

export default AuthProvider;