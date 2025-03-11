import React, { useState } from 'react'
import Hero from '../assets/hero.png'
import Bar from '../assets/bar.png'
import Sofa from '../assets/sofa.png'
import Tokonomics from '../assets/tokonomics.png'

import { Link } from 'react-router-dom'
import { FaAngleDown, FaAngleUp, FaKeyboard, FaUser, FaWallet } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { SlGraph } from "react-icons/sl";
import { BsWindowDesktop } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";
import { GoAlert, GoArrowSwitch } from "react-icons/go";
import Footer from '../components/Footer'
import { GiHamburgerMenu } from "react-icons/gi";

const HomePage = () => {

    const [openQuestion, setOpenQuestion] = useState(null);
    const [showNav, setshowNav] = useState(false)

    const faqs = [
        {
            question: "What is Zexxcoin",
            answer: "Lorem ipsum dolor sit amet consectetur. Aliquam urna ante tellus ornare lectus morbi.. Lacus consequat condimentum maecenas pretium turpis vel massa vulputate... Massa metus ante aliquet velit",
        },
        {
            question: "What makes Zexxcoin Unique?",
            answer: "This is the answer to the unique question.",
        },
        {
            question: "What are the details of the Zexxcoin persale?",
            answer: "Details about the persale go here.",
        },
        {
            question: "How does Zexxcoin Ensure Transparency in its ecosystem?",
            answer: "Explanation of transparency measures.",
        },
        {
            question: "What role does decentralized governance play in zexxcoin?",
            answer: "Role of decentralized governance explained.",
        },
        {
            question: "How can I get started with A-Crypto?",
            answer: "Instructions on getting started.",
        },
        {
            question: "Does A-Crypto offer customer support?",
            answer: "Information about customer support.",
        },
    ];
    const toggleQuestion = (index) => {
        setOpenQuestion(openQuestion === index ? null : index);
    };

    return (

        <div>


            <div style={{ backgroundImage: `url(${Hero})` }} className='py-5 px-10 min-h-[100vh] bg-no-repeat bg-cover text-white'>

                <div className='flex justify-between items-center'>

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


                <div className='flex justify-center items-center flex-col mt-[5rem]'>
                    <h1 className='text-5xl font-semibold text-center'>ZEECOIN PROTOCOL <br /> <span className='text-[#F2C120]'>BRIDGING AI WITH</span><br /> BLOCKCHAIN</h1>
                </div>


                <div className='flex justify-center items-center mt-5'>

                    <div className='bg-black p-4 rounded-[.6rem] w-[25rem]'>

                        <h1 className='text-[#F2C120] text-center'>Stateg 10 - Buy Zexxcoin Now</h1>
                        <h1 className='text-[#C7C1C1] text-center mt-2'>Until price increase </h1>
                        <h1 className='text-[#C7C1C1] text-end mt-5'>Next Stage Price $0.00254 </h1>
                        <div className='flex items-center justify-center mt-3'><img src={Bar} /></div>

                        <div className='flex justify-between items-center mt-6'>
                            <div className='flex justify-center items-center gap-x-3 py-2 rounded-md flex-1 mr-3 bg-[#7064E9]'>
                                <FaEthereum className='text-[#353535]' />
                                <h1>Eth</h1>
                            </div>
                            <div className='flex justify-center items-center gap-x-3 py-2 rounded-md flex-1 bg-[#343434]'>
                                <SiBinance />
                                <h1>BNB</h1>
                            </div>
                        </div>

                        <div className='flex justify-between items-center mt-3'>
                            <div className='flex justify-between items-center py-2 rounded-md flex-1 mr-3 bg-[#7064E9]'>
                                <input type="text" defaultValue={0} className='w-3 outline-none border-none flex-1 pl-2' />
                                <FaEthereum className='text-[#353535]' />
                            </div>
                            <div className='flex justify-between items-center py-2 rounded-md flex-1 bg-[#343434]'>
                                <input type="text" defaultValue={0} className='w-3 outline-none border-none flex-1 pl-2' />
                                <SiBinance />
                            </div>
                        </div>

                        <button className='bg-[#7064E9] cursor-pointer px-3 py-2 rounded-md mt-5 w-[100%]'>Connect Wallet</button>
                        <button className='bg-[#343434] cursor-pointer px-3 py-2 rounded-md mt-2 w-[100%]'>REFFER A FRIEND</button>

                        <Link to={"/buy"} className='text-[#C7C1C1] flex justify-center items-center mt-6'>How To Buy ?</Link>
                        <h1 className='text-[#C7C1C1] text-center mt-1'>Help, My Wallet Won’t connect!</h1>




                    </div>


                </div>


            </div>


            <div className='flex justify-center items-center mt-10 lg:flex-row flex-col flex-wrap mx-[2rem] lg:mx-[6rem]'>

                <div className='flex-1'>
                    <h1 className='text-[1.7rem] font-semibold text-start'>Proof  of Intelligence (pol)</h1>
                    <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br /> Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed.</p>
                </div>

                <div className='flex-1'>
                    <img src={Sofa} alt="" />
                </div>


            </div>

            <div className='flex justify-center items-center mt-10 lg:flex-row flex-col flex-wrap mx-[2rem] lg:mx-[6rem]'>

                <div className='flex-1 lg:order-1 order-2'>
                    <img src={Sofa} alt="" />
                </div>


                <div className='flex-1 lg:order-2 order-1'>
                    <h1 className='text-[1.7rem] font-semibold text-start'>Artificial Intelligence Virtural <br /> Machine (AIVM)</h1>
                    <p className='mt-3 text-sm'>Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br /> Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed. <br />Lorem ipsum dolor sit amet consectetur. Tortor blandit eleifend lectus donec sed.</p>
                </div>

            </div>


            <div className='bg-[#CFB4DD] mt-[3rem] flex justify-center items-center flex-col p-10'>
                <h1 className='text-[2rem] text-[#353535BD] font-semibold'>Transforming Blockchain & AIVM</h1>
                <h1 className='text-[#353535BD]'>Transforming Tomorrow with AI-Driven Blockchain</h1>

                <div className='flex justify-center items-center flex-wrap mt-10'>
                    {
                        [1, 2, 3, 4, 5, 6]?.map((i) => (

                            <div key={i} className='bg-white min-w-[25rem] max-w-[25rem] h-[15rem] mt-2 rounded-md p-4 mr-3 flex justify-center items-center flex-col'>
                                <SlGraph />

                                <h1 className='text-[#8A8A8A] text-lg font-semibold mt-5'>Pol Consensus </h1>

                                <h1 className='text-[#c7c1c1] mt-2 text-sm text-center'>Lorem ipsum dolor sit amet consectetur. Sed est nisi facilisi vitae commodo in vel lorem. Urna erat ullamcorper etiam na</h1>

                            </div>

                        ))
                    }
                </div>

            </div>


            <div className='mt-10 bg-[#0D1323ED] flex justify-center items-center flex-col p-10'>
                <h1 className='text-[2rem] text-[#ffff] font-semibold'>ZEECOIN Roadmap</h1>

                <div className='md:w-[70%] bg-[#0D1323] mt-6 rounded-md p-5'>

                    <div className='flex justify-between items-center flex-wrap'>

                        <div className='text-white flex-1 mt-3'>
                            <h1 className='text-lg font-semibold text-nowrap'>Phase 1 : Prototype Development </h1>
                            <div className='flex items-center flex-1 mt-2'>
                                <div className='w-[1.5rem] h-[1.5rem] rounded-full border-3 border-white'></div>
                                <div className='flex-1 w-[100%] h-[0.1px] border border-[#BDB7B745]'></div>
                            </div>
                        </div>

                        <div className='text-white flex-1 mt-3'>
                            <h1 className='text-lg font-semibold text-nowrap'>Phase 2: Testnet Rollout</h1>
                            <div className='flex items-center flex-1 mt-2'>
                                <div className='w-[1.5rem] h-[1.5rem] rounded-full border-3 border-white'></div>
                                <div className='flex-1 w-[100%] h-[0.1px] border border-[#BDB7B745]'></div>
                            </div>
                        </div>

                        <div className='text-white flex-1 mt-3'>
                            <h1 className='text-lg font-semibold text-nowrap'>Phase 3: Mainnet launch</h1>
                            <div className='flex items-center flex-1 mt-2'>
                                <div className='w-[1.5rem] h-[1.5rem] rounded-full border-3 border-white'></div>
                                <div className='flex-1 w-[100%] h-[0.1px] border border-[#BDB7B745]'></div>
                            </div>
                        </div>

                    </div>


                </div>


            </div>


            <div style={{ backgroundImage: `url(${Tokonomics})` }} className='py-10 min-h-[20rem] bg-no-repeat bg-cover flex justify-center items-center flex-col'>

                <h1 className='text-[2rem]  font-semibold'>Tokenmics</h1>
                <h1 className='mt-10'>0x9c6w775whAcehuysdi82r9uewjgfu9t8w45uw8</h1>
                <button className='mt-10 bg-[#81109D] px-3 py-2 rounded-md text-white cursor-pointer'>View Contract</button>

            </div>


            <div className='flex justify-center items-center mt-10 flex-col pb-10 mx-5'>

                <div className='flex justify-between items-center mt-10 gap-x-8 flex-wrap'>
                    <div></div>
                    <h1 className='text-[2rem]  font-semibold'>FAQs</h1>
                    <input placeholder='Search' type="text" name="" id="" className='w-[16rem] h-[2.3rem] rounded-md px-3 outline-none border border-[#8F9AA7]' />
                </div>

                <div className='flex justify-start md:justify-center items-start mt-10 gap-x-8 flex-wrap'>

                    <div className='p-3 border border-[#E7E9EC] min-w-[15rem] rounded-md mt-5'>
                        <div className='flex items-center gap-x-3 h-[2.3rem] bg-[#EFE7F4] rounded-md px-3 mt-2'>
                            <BsWindowDesktop className='text-[#965CB6]' />
                            <p className='text-[#965CB6]'>General</p>
                        </div>
                        <div className='flex items-center gap-x-3 h-[2.3rem] rounded-md px-3 mt-2'>
                            <MdAccountCircle className='text-[#5C6C7E]' />
                            <p className='text-[#5C6C7E]'>Account</p>
                        </div>
                        <div className='flex items-center gap-x-3 h-[2.3rem] rounded-md px-3 mt-2'>
                            <FaWallet className='text-[#5C6C7E]' />
                            <p className='text-[#5C6C7E]'>Wallet and Asset</p>
                        </div>

                        <div className='flex items-center gap-x-3 h-[2.3rem] rounded-md px-3 mt-2'>
                            <GoArrowSwitch className='text-[#5C6C7E]' />
                            <p className='text-[#5C6C7E]'>Trading</p>
                        </div>

                        <div className='flex items-center gap-x-3 h-[2.3rem] rounded-md px-3 mt-2'>
                            <GoAlert className='text-[#5C6C7E]' />
                            <p className='text-[#5C6C7E]'>Disputes</p>
                        </div>

                        <div className='flex items-center gap-x-3 h-[2.3rem] rounded-md px-3 mt-2'>
                            <FaKeyboard className='text-[#5C6C7E]' />
                            <p className='text-[#5C6C7E]'>Advertising</p>
                        </div>


                    </div>

                    {/* ADD FAQ HERE  */}
                    <div className='md:w-[30rem] mt-5'>
                        {faqs.map((faq, index) => (
                            <div key={index} className='mb-4 border-b pb-4'>
                                <div className='flex justify-between items-center cursor-pointer' onClick={() => toggleQuestion(index)}>
                                    <h3 className='font-semibold'>{faq.question}</h3>
                                    {openQuestion === index ? (
                                        <FaAngleUp className='text-xl' />
                                    ) : (
                                        <FaAngleDown className='text-xl' />
                                    )}
                                </div>
                                {openQuestion === index && (
                                    <div className='mt-2'>
                                        <p>{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>

            </div>

            <Footer />



        </div>

    )
}

export default HomePage