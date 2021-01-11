import React from "react"
import Img from "../images/undraw_launch_day_4e04.svg"
import { Link } from "gatsby"

const NotFound = () => {
  return (
    <div className='text-center pt-5'>
      <h1 className='text-center text-3xl text-primary mb-16'>Page Not Found</h1>
      <Link className="rounded-md text-white bg-primary p-5" to="/">
        Back to Home
      </Link>
      <div className='py-9'>
        <img src={Img} alt="" className='mx-auto'/>
      </div>
    </div>
  )
}

export default NotFound
