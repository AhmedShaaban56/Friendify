import React, { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || false
  );
  const login = () => {
    setCurrentUser({
      id: 1,
      name: "Ahmed Kholif",
      profilePic:
        "https://media.licdn.com/dms/image/D4D03AQGzgJU9D5cWlg/profile-displayphoto-shrink_400_400/0/1696748237926?e=1711584000&v=beta&t=Ww43_XpgZQ2p9kjTGfVaWBoe0Gbiiau8epEZvEyfwGg",
    });
  };
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};
export default AuthContextProvider;
