import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import EditProfile from '../pages/EditProfile';
import Home from '../pages/Home';
import Login from '../pages/Login';
import MyNotices from '../pages/MyNotices';
import NewNotice from '../pages/NewNotice';
import Register from '../pages/Register';
import LogedIn from './LogedIn';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/' element={<LogedIn />}>
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
