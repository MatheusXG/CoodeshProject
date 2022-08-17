import { createContext, ReactNode, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

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

  
  async function SignUp(dataSignUp: SignUpCredentials) {
    const { email, password } = dataSignUp;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user)
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });

    // setIsLoading(true)

    // try {
    //   const auth = getAuth(app);
    //   const response =  await createUserWithEmailAndPassword(auth, email, password)
    //   console.log(response)

    // } catch (error) {
    //   console.log(error)

    // }

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
