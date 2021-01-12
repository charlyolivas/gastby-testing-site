import React from "react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children }) => {
  return (
    <div>
      <div className="flex flex-col h-screen">
      <Navbar />
        <main className="bg-light_gray text-dark flex-grow">
          <div className="mx-auto h-auto container pt-5">{children}</div>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
