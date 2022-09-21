import React from 'react'

import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link'
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AccountContext } from './../Context/AppContext';




const InfoId = () => {

  const {ProjData} = useContext(AccountContext)

  const router = useRouter()
  const ProjectId = router.query.ProjectId
  const [Item,setItem] =useState({}) 

  useEffect(()=>{
    ProjData.filter((item)=>{
     if (ProjectId === item.Title){
      setItem(item)
     }
    })
  },[ProjectId])
  return (
    <div>
    <Head>
        <title>Mercy | {Item?.Title}</title>
        <meta name="description" content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
<link href="https://fonts.googleapis.com/css2?family=Crete+Round:ital@1&family=Montserrat:ital,wght@1,900&family=Ms+Madi&family=Oswald:wght@700&display=swap" rel="stylesheet"/> 
      </Head>
    <div className='w-full'>
    <div className='w-screen h-[50vh] relative'>
      <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
      <Image
        className='absolute z-1'
        layout='fill'
        objectFit='cover'
        src={Item?.Image}
        alt='/'
      />
      <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
        <h2 className='py-2'>{Item?.Title}</h2>
        <h3>{Item?.Stack}</h3>
      </div>
    </div>

    <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
      <div className='col-span-4'>
        <p>Project</p>
        <h2>Overview</h2>
        <p>
         {Item?.Description}
        </p>
        <a
          href=''
          target='_blank'
          rel='noreferrer'
        >
          <button disabled className='px-8 py-2 mt-4 mr-8 !bg-gray-700 !bg-none '>Code <span className='text-[8px]'> Coming Soon</span></button>
        </a>
        <a
          href={Item?.Visit}
          target='_blank'
          rel='noreferrer'
        >
          <button className='px-8 py-2 mt-4'>Demo</button>
        </a>
      </div>
      <div className='col-span-4 py-4 shadow-xl md:col-span-1 shadow-gray-400 rounded-xl'>
        <div className='p-2'>
          <p className='pb-2 font-bold text-center'>Technologies</p>
          <div className='grid grid-cols-3 md:grid-cols-1'>
           {Item?.Technologies?.map((item,index)=>
            <div key={index}>
            <p className='flex items-center py-2 text-gray-600'>
              <RiRadioButtonFill className='pr-1' /> {item}
            </p>
            </div>
           )}
          </div>
        </div>
      </div>
      <Link href='/#projects'>
        <p className='underline cursor-pointer'>Back</p>
      </Link>
    </div>
  </div>
  </div>
  )
}

export default InfoId