import { createContext, useState } from "react";

const UserContext = createContext({});

export const UserProvider = ({ children, initialState }) => {
  const [user, setUser] = useState(initialState);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
