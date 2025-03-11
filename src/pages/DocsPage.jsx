import React from 'react'
import { FaUser } from 'react-icons/fa'
import { MdNavigateNext } from 'react-icons/md'
import { Link } from 'react-router-dom'

const DocsPage = () => {
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

                    <Link to={"/notfound"}>
                        <button className='bg-[#7064E9] cursor-pointer px-3 py-2 rounded-md'>Contact</button>
                    </Link>

                    <button className='bg-[#7064E9] cursor-pointer px-3 py-2 rounded-md'>Connect Wallet</button>

                </div>

            </div>

            <div className='mt-[3rem] lg:flex items-start gap-x-[8rem] mx-5'>

                <div>
                    <h1 className='font-semibold'>ZEXXCOIN DOCS</h1>
                    <h1 className='mt-2'>Introduction</h1>
                    <h1 className='mt-2'>How To Buy</h1>
                    <h1 className='mt-2'>Import Token</h1>
                    <h1 className='mt-2'>Tokenmics</h1>
                    <h1 className='mt-2'>Policies</h1>
                    <h1 className='mt-2'>Audits</h1>
                    <h1 className='mt-2'>Brand</h1>
                    <h1 className='mt-2'>Referral</h1>
                </div>

                <div className='flex-1 pb-10'>
                    <h1 className='text-[2rem] font-semibold'>Introduction</h1>
                    <p className='mt-2 text-[#77828E]'>Welcome to Zexxcoin, the cutting-edge platform that is redefining the <br /> intersection of blockchain technology and artificial intelligence </p>

                    <h1 className='text-[2rem] font-semibold mt-[3rem]'>Vision of Zexxcoin</h1>
                    <p className='mt-2 text-[#77828E] w-[100%] md:w-[60%]'>Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.</p>


                    <h1 className='text-[2rem] font-semibold mt-[3rem]'>Mission</h1>
                    <p className='mt-2 text-[#77828E] w-[100%] md:w-[60%]'>Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.Lorem ipsum pharetra convallis turpis lectus diam ac interdum.</p>


                    <div className='border border-[#C7C1C1] w-[100%] md:w-[60%] h-[8rem] rounded-md flex justify-between items-center px-5 mt-14'>
                        <div>
                            <h1>Next</h1>
                            <p className='text-[#7C0C98]'>How to buy</p>
                        </div>
                        <MdNavigateNext className='text-[2rem] cursor-pointer' />

                    </div>
                </div>

            </div>


        </div>
    )
}

export default DocsPage