import React from 'react'
import HeaderA from '../../layouts/admin/header'
import { Outlet } from 'react-router-dom'

const Admin = () => {
    return (
        <>
            <HeaderA />
            <Outlet />
        </>
    )
}

export default Admin