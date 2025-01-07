import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderA from '../../layouts/admin/header'

const AdminP = () => {
  return (
    <>
        <HeaderA/>
        <Outlet/>
    </>
  )
}

export default AdminP