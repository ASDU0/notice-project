import React from 'react'
import { Outlet } from 'react-router-dom'
import AppbarLogedIn from '../components/AppbarLogedIn'

const LogedIn = () => {
  return (
    <>
      <AppbarLogedIn />
      <Outlet />
    </>
  )
}

export default LogedIn
