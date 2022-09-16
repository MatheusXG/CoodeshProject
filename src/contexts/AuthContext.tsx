import { createContext, ReactNode, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { showNotification } from '@mantine/notifications';

type SignUpCredentials = {
  email: string;
  password: string;
};


type Error = {
  err: {
    errorMessage: string;
    errorCode: string;
  }
}

type AuthContextData = {
  SignUp(credentials: SignUpCredentials): Promise<void>;
  isLoading: boolean;
  error: Error;

};


type AuthProvider = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError ] = useState<Error>({err: {errorMessage: '', errorCode: ''}})



  async function SignUp(dataSignUp: SignUpCredentials) {
    setIsLoading(true);
    const { email, password } = dataSignUp;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        setIsLoading(false);
       
        
        // ...
      })
      .catch((error) => {
        
        setError({err: {
          errorMessage: error.message,
          errorCode: error.code
        }})
        
        // ..
      });
  }

  return (
    <AuthContext.Provider value={{ SignUp, isLoading, error }}>
      {props.children}
    </AuthContext.Provider>
  );
}
