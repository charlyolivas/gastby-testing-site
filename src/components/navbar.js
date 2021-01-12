import React from "react"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <header className='px-4'>
      <nav className="container mx-auto pt-9 pb-12">
        <ul className="text-dark">
          <div className="float-left">
            <li>
              <Link to="/">
                <svg
                  fill="none"
                  className="w-6 text-primary mx-auto"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </Link>
            </li>
          </div>
          <div className="inline-flex space-x-4 float-right">
            <li>
              <Link to="/products">Products</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <Link to="/images">Images</Link>
            </li>           
            <li>
              <Link to="/another">Another</Link>
            </li>
          </div>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
