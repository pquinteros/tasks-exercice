import { createContext, useContext } from "react";

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const user = {
    fullName: "Pablo Quinteros",
    email: "pquinteros@gmail.com",
    role: "admin",
  };

  return (
    <UserContext.Provider value={user}>
      {children}
    </UserContext.Provider>
  );
};