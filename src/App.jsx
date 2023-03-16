import React from "react";
import {
  BrowserRouter,
  Route,
  // Link,
  Outlet,
  Routes
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import NewNotice from "./pages/NewNotice";
import Register from "./pages/Register";
import MyNotices from "./pages/MyNotices";
import AppbarLogedIn from "./components/AppbarLogedIn";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <AppRouter />
    // <BrowserRouter>
    //   <AppbarLogedIn />
    //   <Outlet />
    //   <Routes>
    //     <Route path="/" element={<Home />}/>
    //     <Route path="/login" element={<Login />}/>
    //     <Route path="/register" element={<Register />}/>
    //     <Route path="/newnotice" element={<NewNotice />} />
    //     <Route path="/editprofile" element={<EditProfile />} />
    //     <Route path="/mynotices" element={<MyNotices />} />
    //   </Routes>
    // </BrowserRouter>
  )
}

export default App;
