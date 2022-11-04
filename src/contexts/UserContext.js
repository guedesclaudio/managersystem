import { createContext } from "react";
import { useState } from "react";

const UserContext = createContext()

const UserStorage = ({ children }) => {
    const [userData, setUserData] = useState({});
    const [config, setConfig] = useState({})

    return (
      <UserContext.Provider
        value={{
          userData,
          setUserData,
          config,
          setConfig
        }}
      >
        {children}
      </UserContext.Provider>
    );
  };
  
  export { UserContext, UserStorage };