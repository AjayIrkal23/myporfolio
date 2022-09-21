import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Typewriter from "typewriter-effect"


const TypeText = ["A Full-Stack Web Developer","Video Editor","UI/UX Designer"]

export const Hero = () => {
const True = true
  return (
    <div style={{ originX: 0.5 }} className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center p-4'>
            <div>
            <p className="text-sm tracking-widest text-gray-600 uppercase">Lets Build Something Legendary Together</p>
            <h1 className="py-4 text-gray-800">Hi, I'm <span className='text-[#5651e5]'>Ajay</span> </h1>
            <h1 className="py-1.5 text-gray-800"><Typewriter   options={{loop: true}}
              onInit={(typewriter)=>{
                TypeText.map((item,index)=>{
                  typewriter.typeString(item).pauseFor(2000).deleteAll().start()
                })
                typewriter.typeString("Welcome To My Portfolio").pauseFor(2000).start()
                
              }}
             /> </h1>
            <p className='py-4 text-gray-600 max-w[70%] m-auto'> I'm a full-stack web developer specializing in building amazing and user-friendly websites. i build both frontend and backend web applications which are optimal and responsive using MERN Stack</p>
            <div className='flex items-center justify-between max-w-[320px] m-auto py-4 '>
            <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <LinkedInIcon  /></div>
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <GitHubIcon  /></div>
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <EmailIcon  /></div>
                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <EmojiPeopleIcon  /></div>

            </div>
            </div>
        </div>
    </div>
  )
}
