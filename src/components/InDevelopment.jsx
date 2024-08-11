import React from 'react'
import developmentImg  from '../assets/images/dev.png'

export default function InDevelopment() {
  return (
    <div className='flex flex-col pt-20 items-center font-luxjost mb-20 mx-5'>

        <img className="  mx-auto" src={developmentImg} alt="In development"/>
        <h2 className='text-4xl font-bold text-orange-500 '>COMING SOON STILL IN DEVELOPMENT</h2>
    </div>
  )
}
