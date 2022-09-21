import Image from 'next/image'
import React from 'react'
import contact from "../public/assests/contact.jpg"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import EmojiPeopleIcon from '@mui/icons-material/EmojiPeople';
import Link from 'next/link';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from "react"
import { Box, Typography } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CloseIcon from '@mui/icons-material/Close';


export const Contact = () => {

    const [open, setOpen] = useState(false);
    const [Name, setName] = useState("");
    const [PNumber, setPNumber] = useState("");
    const [Subject, setSubject] = useState("");
    const [Email, setEmail] = useState("");
    const [Message, setMessage] = useState("");

    const AutoClose = () => {
        setTimeout(() => {
            setOpen(false);
        }, 3000);
    }

    const handleClick = (e) => {
        e.preventDefault()
        setName("")
        setPNumber("")
        setSubject("")
        setEmail("")
        setMessage("")
        setOpen(true);


        AutoClose();

    }
    return (
        <div id="contact" className="w-full lg:h-screen">
            <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
                <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
                <h2 className='py-4'>Get In Touch</h2>
                <div className='grid  lg:grid-cols-5 gap-8 '>
                    <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                        <div className='lg:p-4 h-full '>
                            <img className='rounded-xl hover:scale-105 ease-in duration-300' src="https://cdn.dribbble.com/users/1602563/screenshots/8869646/media/ddc33ce2c8e2570c410123f375e2c35c.gif" alt="contact img" />
                            <div className="">
                                <h2 className='py-2'>Ajay Irkal</h2>
                                <p>Full Stack Developer</p>
                                <p className='py-4'>I am available for freelancing or full time positions. Contact me and lets talk.</p>
                            </div>
                            <div>
                                <p className='uppercase pt-8'>Connect With Me</p>
                                <div className='flex items-center justify-between max-w-full m-auto py-4 '>
                                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <LinkedInIcon /></div>
                                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <GitHubIcon /></div>
                                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <EmailIcon /></div>
                                    <div className="p-4 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-5 shadow-gray-400 hover:scale-110">  <EmojiPeopleIcon /></div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className='col-span-3 w-ful h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
                        <form className='p-4'>
                            <div className='grid md:grid-cols-2 w-full gap-4 py-2'>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Name </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" onChange={(e)=>setName(e.target.value)} value={Name} />
                                </div>
                                <div className='flex flex-col'>
                                    <label className='uppercase text-sm py-2'>Phone Number </label>
                                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" value={PNumber} onChange={(e)=>setPNumber(e.target.value)} />
                                </div>

                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Email</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" onChange={(e)=>setEmail(e.target.value)} value={Email} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Subject</label>
                                <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" onChange={(e)=>setSubject(e.target.value)} value={Subject} />
                            </div>
                            <div className='flex flex-col'>
                                <label className='uppercase text-sm py-2'>Message</label>
                                <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10" onChange={(e)=>setMessage(e.target.value)} value={Message} />
                            </div>
                            <Box style={{}} sx={{ width: '100%' }}>
                                <Collapse in={open}>
                                    <Alert
                                        action={
                                            <IconButton
                                                aria-label="close"
                                                color="inherit"
                                                size="small"
                                                onClick={() => {
                                                    setOpen(false);
                                                }}
                                            >
                                                <CloseIcon fontSize="inherit" />
                                            </IconButton>
                                        }
                                        sx={{ mb: 2 }}
                                    >
                                        Message Sent Successfully
                                    </Alert>
                                </Collapse>
                            </Box>
                            <button onClick={(e)=>{ handleClick(e); AutoClose()}} className='w-full p-3 mt-5'>send Message</button>
                            
                        </form>

                    </div>
                </div>
                <div className="flex justify-center py-12">
                    <Link href="/">
                        <div className="p-2.5 duration-300 ease-in rounded-full shadow-lg cursor-pointer sm:p-3 shadow-gray-400 hover:scale-110"><ArrowUpwardIcon className="text-[#5651e5]" /></div>

                    </Link>
                </div>
            </div>
        </div>
    )
}
