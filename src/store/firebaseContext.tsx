import { createContext, ReactNode, useContext, useState } from "react";
// import firebase from "firebase/app";
import "firebase/firestore";

interface FirebaseContextType {
  auth?: any;
  db?: any;
  storage?: any;
  // other properties
}

export const firebaseContext = createContext({} as FirebaseContextType);

interface UserContextType {
  user?: any;
  setUser: any;
}

export const AuthContext = createContext({} as UserContextType);

interface Props {
  children: ReactNode;
}

export default function FirebaseContextProvider({ children }: Props) {
  const [user, setUser] = useState<any>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
