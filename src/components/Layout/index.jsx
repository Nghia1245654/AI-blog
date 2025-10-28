import React from 'react'
import Header from '../Header'
import {Outlet} from 'react-router-dom'
const Layout = () => {
  return (
    <>
      <Header  />
      <main className="container mx-auto px-4 py-12">
        <Outlet />
      </main>
    </>
  )
}

export default Layout
