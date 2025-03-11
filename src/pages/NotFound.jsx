import React from 'react'
import person from '../assets/person.png'
import notfound from '../assets/notfound.png'

const NotFound = () => {
    return (
        <div style={{ backgroundImage: `url(${notfound})` }} className='flex justify-center items-center w-screen h-screen flex-col bg-[#112759]'>

            <h1 className='text-[2rem] text-white font-semibold'>Page Not Found</h1>

            <img src={person} className='mt-10'/>
        </div>
    )
}

export default NotFound