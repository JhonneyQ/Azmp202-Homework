import React from 'react'
import HeaderC from '../../layouts/user/header'
import { Outlet } from 'react-router-dom'

const UserP = () => {
  return (
    <>
        <HeaderC/>
        <Outlet/>
    </>
  )
}

export default UserP