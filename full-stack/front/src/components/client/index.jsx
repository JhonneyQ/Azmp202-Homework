import React from 'react'
import HeaderC from '../../layouts/client/header'
import { Outlet } from 'react-router-dom'

const Client = () => {
    return (
        <>
            <HeaderC />
            <Outlet />
        </>
    )
}

export default Client