import React from 'react'
import { FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Footer from '../components/Footer'

const RoadmapPage = () => {
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
                <h1 className='text-3xl'>Roadmap</h1>
            </div>

            <div className='bg-[#112759] px-5 py-10 flex justify-center items-center'>

                <div>

                    {
                        [1, 2, 3, 4, 5, 6]?.map((i) => (
                            <div key={i} className='text-white flex-1 flex items-start gap-x-6 flex-wrap'>
                                <h1 className='font-semibold text-nowrap  mt-2'>Lorem ipsum mauris lectus in <br /> tellus nulla sed accu</h1>
                                <div className='flex items-center flex-1 mt-2 flex-col'>
                                    <div className={`w-[1.5rem] h-[1.5rem] rounded-full border-3 border-white ${i % 2 == 0 ? "bg-[#7064E9]" : "bg-[#F3BA2F]"}`}></div>
                                    <div className='w-[0.1px] h-[15rem] border border-[#BDB7B745]'></div>
                                </div>
                                <p className='text-sm w-[20rem] mt-2'>Lorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accuLorem ipsum mauris lectus in tellus nulla sed accu</p>
                            </div>
                        ))
                    }



                </div>

            </div>

            <Footer />


        </div>
    )
}

export default RoadmapPage