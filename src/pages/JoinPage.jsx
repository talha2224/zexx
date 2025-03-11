import React, { useState } from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'
import { GiHamburgerMenu } from 'react-icons/gi'

const JoinPage = () => {
    const [showNav, setshowNav] = useState(false)

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

                <div className=' relative lg:hidden block'>
                        <GiHamburgerMenu onClick={() => setshowNav(!showNav)} className='text-xl' />
                        {
                            showNav && (
                                <div className=' absolute bg-black p-5 right-0 top-4 mt-5 rounded-md'>
                                    <Link className=' block mt-2' to={"/roadmap"}>Roadmap</Link>
                                    <Link className=' block mt-2' to={"/join"}>Whitepaper</Link>
                                    <Link className=' block mt-2' to={"/reviews"}>Zexxcoin</Link>
                                    <Link className=' block mt-2' to={"/docs"}>Docs</Link>
                                </div>
                            )
                        }
                    </div>

            </div>

            <div className='flex justify-center items-center h-[10rem] bg-[#D4CAFF]'>
                <h1 className='text-3xl'>Join Zexxcoin Giveaway</h1>
            </div>

            <div className='bg-[#112759] px-5 py-10 flex justify-center items-center flex-col'>

                <h1 className='text-white text-[1.5rem]'> 🎉Win 100k🎉</h1>

                <div className='bg-[#566288] w-[20rem] h-[100vh] rounded-md mt-10'>

                </div>

            </div>

            <Footer />


        </div>
    )
}

export default JoinPage