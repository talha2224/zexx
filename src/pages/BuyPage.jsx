import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const BuyPage = () => {
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
                <h1 className='text-3xl'>How to buy</h1>
            </div>

            <div className='bg-[#112759] px-5 py-10 flex justify-center items-center text-white'>

                <div className='md:w-[50%] w-[100%]'>
                    <h1 className='text-[2rem]'>How to Buy Zexxcoin</h1>
                    <h1 className='text-[2rem]'>During the Presale</h1>
                    <p>um mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accu</p>


                    <div className='mt-10'>
                        <h1 className='text-[2rem]'>Step-by-Step Guide to Buying ZEXXCOIN</h1>
                        {
                            [1, 2, 3, 4, 5, 6, 7, 8]?.map((i) => (
                                <div key={i} className='mt-[2rem]'>
                                    <h1 className='text-[1.5rem]'>Step {i}: Prepare Your Wallet</h1>
                                    <p className='mt-2'>1. ellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum </p>
                                    <p className='mt-2'>2. mauris lectus in tellus nulla uris lectus in tellus nulla sed accuLorem ipsum mauris lectus</p>
                                    <p className='mt-2'>3. in tellus nulla sed accu</p>
                                </div>
                            ))
                        }

                        <div className='mt-[2rem]'>
                            <h1 className='text-[1.5rem]'>Important Notes:</h1>
                            <p className='mt-2'>1. Double-check all wallet addresses and payment details to avoid errors.</p>
                            <p className='mt-2'>2. When paying with USDT, ensure both "Approval" and "Buy" transactions are completed.</p>
                            <p className='mt-2'>3. By following these simple steps, you can secure your LCAI tokens during this exclusive presale phase.</p>
                        </div>
                    </div>
                </div>

            </div>

            <Footer />


        </div>
    )
}

export default BuyPage