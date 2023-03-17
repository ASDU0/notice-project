import React, { useEffect, useReducer } from "react";
import { authReducer } from "./auth/authReducer";
import { AuthContext } from "./auth/AuthContext";
import AppRouter from "./routes/AppRouter";

const init = () => {
  return JSON.parse(localStorage.getItem('user')) || { logged: false };
}

function App() {
  const [user, dispatch] = useReducer(authReducer, {}, init);

  // guardar el usuario en localstorage
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  return (
    <AuthContext.Provider
      value={{ user, dispatch }}
    >
      <AppRouter />
    </AuthContext.Provider>
  )
}

export default App;
