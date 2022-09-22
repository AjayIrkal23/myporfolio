import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import { useState, useContext } from 'react';
import { useEffect } from 'react';
import {useRouter} from "next/router"
import { AccountContext } from './../Context/AppContext';


const Navbar = () => {

  const {ProjData} = useContext(AccountContext)

  const [Nav, setNav] = useState(false)
  const [Shadow, setShadow] = useState(false)
  const [Navbg, setNavbg] = useState("#ecf0f3")
  const [Linkc, setLinkc] = useState("#1f2937")
 let Item = {}

  const router = useRouter()
  const ProjectId = router.query.ProjectId

  useEffect(()=>{
    console.log(Item)
    ProjData.filter((item)=>(
      router.asPath === item.Url && (Item = item)
    ))
if(router.asPath=== Item.Url){
  setNavbg("rgba(0,0,0,0.4")
  setLinkc("#ecf0f3")
}

else{
  setNavbg("#ecf0f3")
  setLinkc("#1f2937")
}
  },[ProjectId])

  const HandleNav = () => {
    setNav(!Nav)
  }

  useEffect(() => {
    const HandleS = () => {
      if (window.scrollY >= 90) {
        setShadow(true)
      }

      else {
        setShadow(false)
      }


    }
    
    window.addEventListener("scroll",HandleS)
  }
    , [])
  return (
    <div style={{backgroundColor:`${Navbg}`}} className={Shadow ? "fixed w-full h-20 shadow-xl z-[100] ease-in duration-200 bg-white" : "fixed w-full h-20 z-[100]"}>
      <div className="flex items-center justify-between w-full h-full px-2 2xl:px-16">
      <Link href="/">
        <h1 style={{ fontFamily: "'Ms Madi', cursive", fontSize: "50px" }} className="ml-3 cursor-pointer font-extrabold text-[#504ac2]">Mercy</h1>
        </Link>
        <div>
          <ul style={{color:`${Linkc}`}} className='hidden mr-3 md:flex text-black-900 '>
            <Link href="/">
              <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
            </Link>
            <Link href="/#about">
              <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
            </Link>
            <Link href="/#certificate">
              <li className='ml-10 text-sm uppercase hover:border-b'>Certification</li>
            </Link>
            <Link href="/#skills">
              <li className='ml-10 text-sm uppercase hover:border-b'>Skills</li>
            </Link>
            <Link href="/#project">
              <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
            </Link>
            <Link href="/#contact">
              <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
            </Link>
          </ul>
          <div style={{color:`${Linkc}`}} onClick={HandleNav} className="md:hidden">
            <MenuIcon />
          </div>

          <div className={Nav ? ' md:hidden fixed top-0 left-0 w-full h-screen bg-black/70' : ""}>
            <div className={Nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in-out duration-500 ' : 'fixed left-[-200%] top-0  p-10 ease-in-out -in duration-500 '}>
              <div className="flex items-center justify-between w-full">
                <h1 style={{ fontFamily: "'Ms Madi', cursive", fontSize: "40px" }} className="font-extrabold text-[#504ac2]">Mercy</h1>
                <div onClick={HandleNav} className='p-2 rounded-full shadow-lg cursor-pointer shadow-gray-400'>
                  <CloseIcon />
                </div>
              </div>
              <div className="my-4 text-center border-b border-gray-300">
                <p className='w-[85%] md:w[90%] py-4 '>Lets Build Something Legendary Together </p>
              </div>
              <div className='flex flex-col py-4'>
                <ul className='uppercase'>
                  <Link href="/">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">Home </li>
                  </Link>
                  <Link href="/#about">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">About </li>
                  </Link>
                  <Link href="/#certificate">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">Certifications </li>
                  </Link>
                  <Link href="/#skills">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">Skills </li>
                  </Link>
                  <Link href="/#project">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">Projects </li>
                  </Link>
                  <Link href="/#contact">
                    <li onClick={()=>setNav(false)} className="py-4 text-md">Contact </li>
                  </Link>
                </ul>
                <div className='pt-15'>
                  <p className='uppercase tracking-widest text-[#5651e5]'>Lets Connect </p>
                  <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
                    <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-3 shadow-gray-400 hover:scale-105">  <LinkedInIcon className='text-2xl' /></div>
                    <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-3 shadow-gray-400 hover:scale-105">  <GitHubIcon className='text-2xl' /></div>
                    <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-3 shadow-gray-400 hover:scale-105">  <EmailIcon className='text-2xl' /></div>
                    <div className="p-2 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-3 shadow-gray-400 hover:scale-105">  <EmojiPeopleIcon className='text-2xl' /></div>
                  </div>

                </div>
              </div>
            </div>


          </div>


        </div>

      </div>


    </div>
  )
}

export default Navbar
