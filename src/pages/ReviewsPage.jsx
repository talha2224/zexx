import React from 'react'
import { FaUser, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { SlGraph } from 'react-icons/sl'


const ReviewsPage = () => {
    return (
        <div>

            <div className='flex justify-between items-center bg-[#112759] text-white px-4 py-3'>

                <div>
                    <Link to={"/"} className='text-3xl font-semibold'>ZEXXCOIN</Link>
                </div>

                <div className='hidden lg:flex items-center gap-x-3 text-lg'>
                        <Link to={"/roadmap"}>Roadmap</Link>
                        <Link to={"/join"}>Whitepaper</Link>
                        <Link to={"/reviews"}>Zexxcoin</Link>
                        <Link to={"/docs"}>Docs</Link>
                </div>

                <div className='hidden lg:flex items-center gap-x-4'>
                    <div className='w-[2.6rem] h-[2.6rem] flex justify-center items-center rounded-md bg-[#7064E9]'>
                        <FaUser />
                    </div>

                    <button className='bg-[#7064E9] cursor-pointer px-3 py-2 rounded-md'>Connect Wallet</button>
                </div>

            </div>

            <div className='flex justify-center items-center h-[10rem] bg-[#D4CAFF]'>
                <h1 className='text-3xl'>Zexxcoin Reviews</h1>
            </div>

            <div className='bg-[#112759] px-5 py-10 flex justify-center items-center flex-col'>

                <h1 className='text-white text-[1.5rem]'>Youtube Videos </h1>
                <p className='text-center text-[#FFFBFB80]'>Discover insights from the crypto community with our curated page featuring all YouTube video reviews of Zexxcoin. <br />Explore expert analyses, presale highlights, and in-depth breakdowns of our innovative blockchain technology.</p>
                <div className='flex justify-center items-center flex-wrap mt-10 md:w-[50%]'>
                    {
                        [1, 2, 3, 4, 5, 6.7,8,8,10,11,12,13,14,15,16,17,18,19]?.map((i) => (

                            <div key={i} className='bg-[#FFFBFB] min-w-[15rem] max-w-[15rem] h-[7rem] mt-2 rounded-md p-4 mr-3 flex justify-center items-center flex-col'>
                                <FaYoutube className='text-[2rem] text-[#EF4E47]'  />
                            </div>

                        ))
                    }
                </div>

            </div>

            <Footer />


        </div>
    )
}

export default ReviewsPage