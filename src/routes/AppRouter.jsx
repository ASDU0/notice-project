import React, { useContext } from 'react'
import { useSelector } from 'react-redux';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";

import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyNotices from '../pages/MyNotices';
import NewNotice from '../pages/NewNotice';
import Register from '../pages/Register';
import AuthRouter from './AuthRouter';
import LogedIn from './LogedIn';
import ProtectedRoute from './ProtectedRoute';
import PublicRoute from './PublicRoute';

const AppRouter = () => {

  const { logged } = useSelector(state => state.auth);

  return (
    <Router>
      <Routes>

        <Route path='auth'
          element={
            <PublicRoute isAuthenticated={logged}>
              <AuthRouter />
            </PublicRoute>
          }
        >
          <Route path='' element={<Login />} />
          <Route path='register' element={<Register />} />
        </Route>

        <Route path=''
          element={
            <ProtectedRoute
              isAllowed={logged}
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
