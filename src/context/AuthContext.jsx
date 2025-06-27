import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();
const SocioContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const useSocio = () => useContext(SocioContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");
    if (storedUser && storedToken) {
      setUser({ token: storedToken, user: JSON.parse(storedUser) });
    }
  }, []);

  const login = (userData) => {
    setUser(userData);
    if (userData?.token) {
      localStorage.setItem("token", userData.token);
      localStorage.setItem("user", JSON.stringify(userData.user));
    }
  };

  //console.log(user);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const SocioProvider = ({ children }) => {
  const [socio, setSocio] = useState(null);

  useEffect(() => {
    const storedSocio = localStorage.getItem("socio");

    if (storedSocio) {
      try {
        const parsed = JSON.parse(storedSocio);

        if (parsed.perfil_id === 3) {
          setSocio(parsed);
          console.log("socio");
        }
      } catch (error) {
        console.error("Error al leer usuario desde localStorage:", error);
      }
    }
  }, []);

  const loginSocio = (socioData) => {
    setSocio(socioData);
    if (socioData?.token) {
      localStorage.setItem("tokenSocio", socioData.token);
      localStorage.setItem("socio", JSON.stringify(socioData.socio));
    }
  };

  const logoutSocio = () => {
    setSocio(null);
    localStorage.removeItem("socio");
    localStorage.removeItem("tokenSocio");
  };

  return (
    <SocioContext.Provider value={{ socio, loginSocio, logoutSocio }}>
      {children}
    </SocioContext.Provider>
  );
};
