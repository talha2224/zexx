import React from 'react'
import { FaFacebookF, FaTelegramPlane, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (

        <div className='w-screen bg-[#F6F9FC] px-5 md:px-[10rem] py-10 flex justify-between items-start'>

            <div>
                <h1 className='text-lg font-bold text-[#630C92]'>ZEXXCOIN</h1>
                <p>Lorem ipsum dolor sit </p>
                <div className='flex items-center gap-x-2 mt-2'>
                    <div className='flex justify-center items-center w-[2.3rem] h-[2.3rem] text-white rounded-full bg-black'>
                        <FaTelegramPlane />
                    </div>
                    <div className='flex justify-center items-center w-[2.3rem] h-[2.3rem] text-white rounded-full bg-black'>
                        <FaFacebookF />
                    </div>
                    <div className='flex justify-center items-center w-[2.3rem] h-[2.3rem] text-white rounded-full bg-black'>
                        <FaYoutube />
                    </div>
                    <div className='flex justify-center items-center w-[2.3rem] h-[2.3rem] text-white rounded-full bg-black'>
                        <FaTwitter />
                    </div>
                </div>
            </div>

            <div>
                <h1 className='text-lg font-bold'>About Us</h1>
                <p className='mt-3 text-[#5C6C7E]'>Terms of use</p>
                <p className='mt-3 text-[#5C6C7E]'>Service Policy</p>
            </div>

            <div>
                <h1 className='text-lg font-bold'>Services</h1>
                <p className='mt-3 text-[#5C6C7E]'>P2P</p>
                <p className='mt-3 text-[#5C6C7E]'>Swap Token</p>
            </div>

        </div>

    )
}

export default Footer