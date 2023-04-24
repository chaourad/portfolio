import React from 'react'
import emy from '../assets/images/emy.jpeg'

function Imagepr() {
  
    return (
        <div className="text-center mb-6">
        <img
          src={emy}
          alt="pic"
          className="rounded-circle profile-img"
        />
      </div>
      
  )
}

export default Imagepr