import React from "react";
import {
  BrowserRouter,
  Route,
  // Link,
  Outlet,
  Routes
} from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <BrowserRouter>
      <Outlet />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route path="login" element={<Login />}/>
        <Route exact path="register" element={<Register />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
