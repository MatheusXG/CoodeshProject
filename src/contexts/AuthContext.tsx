import { createContext, ReactNode, useState } from "react";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


type SignUpCredentials = {
    email: string
    password: string
};

type AuthContextData = {
  SignUp(credentials: SignUpCredentials): Promise<void>;
  isLoading: boolean;
};

type AuthProvider = {
  children: ReactNode;
};

export const AuthContext = createContext({} as AuthContextData);

export function AuthProvider(props: AuthProvider) {

  const [ isLoading, setIsLoading ] = useState(false)

  
  async function SignUp( dataSignUp: SignUpCredentials) {
    const { email, password } = dataSignUp

    console.log(email, password)

    setIsLoading(true)

    const auth = getAuth();

    const response = await createUserWithEmailAndPassword(auth, email, password)
    return console.log(response)

      // .then((userCredential) => {
      //   setIsLoading(false)
      //   const user = userCredential.user
      // })

      // .catch((error) => {
      //   const errorCode = error.code;
      //   const errorMessage = error.message;
      // });
  }

  
  return (
    <AuthContext.Provider value={{ SignUp, isLoading }}>
      {props.children}
    </AuthContext.Provider>
  );
}
