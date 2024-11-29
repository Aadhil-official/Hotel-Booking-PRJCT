// src/context/UserContext.js

import React, { createContext, useState } from 'react';

// Create the UserContext with default values
export const UserContext = createContext({
  user: null,
  setUser: () => {},
});

// Create a provider component
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Initialize user state

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
