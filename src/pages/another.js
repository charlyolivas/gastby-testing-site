import React from 'react'
import Build from '../images/undraw_under_construction_46pa.svg'

const another = () => {
  return (
    <div>
    <h1 className='text-center text-3xl py-9 text-primary'>Page in construction!!</h1>
    <br />
    <img src={Build} alt="build" className='mx-auto'/>
  </div>
  )
}

export default another
