import React, { useContext } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { AuthContext } from '../auth/AuthContext';

import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyNotices from '../pages/MyNotices';
import NewNotice from '../pages/NewNotice';
import Register from '../pages/Register';
import LogedIn from './LogedIn';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {
  const { user } = useContext(AuthContext);

  return (
    <Router>
      <Routes>
        <Route path='login'
          element={
            <PublicRoute isAuthenticated={user.logged}>
              <Login />
            </PublicRoute>
          }
        />
        <Route path='register'
          element={
            <PublicRoute isAuthenticated={user.logged}>
              <Register />
            </PublicRoute>
          }
        />
        <Route path=''
          element={
            <ProtectedRoute
              isAllowed={user.logged}
            >
              <LogedIn />
            </ProtectedRoute>
          }
        >
          <Route path='' element={<Home />} />
          <Route path='/newnotice' element={<NewNotice />} />
          <Route path='/editprofile' element={<EditProfile />} />
          <Route path='/mynotices' element={<MyNotices />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRouter
