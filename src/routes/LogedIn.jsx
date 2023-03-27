import React from 'react'
import { Outlet } from 'react-router-dom'
import AppbarLogedIn from '../components/Appbar'

const LogedIn = () => {
  return (
    <>
      <AppbarLogedIn />
      <Outlet />
    </>
  )
}

export default LogedIn
