import React from 'react'
import Image from 'next/image';
import bootstrap from "../public/assests/bootstrap_logo.svg.png"
import css from "../public/assests/css.png"
import firebase from "../public/assests/firebase.png"
import GitHub from "../public/assests/github1.png"
import Html from "../public/assests/html.png"
import MongoDB from "../public/assests/mongo.png"
import Node from "../public/assests/node.png"
import Material from "../public/assests/mui.png"
import Javascript from "../public/assests/react.png"
import React from "../public/assests/react.png"
import Material from "../public/assests/mui.png"
import TailWind from "../public/assests/tailwind.png"
import styled from "../public/assests/styled-components.png"



const data = [
    {
        Image:bootstrap,
        Title:"Bootstrap"
    },
    {
        Image:css,
        Title:"Css"
    },
    {
        Image:firebase,
        Title:"Firebase"
    },
    {
        Image:GitHub,
        Title:"GitHub"
    },
    {
        Image:Html,
        Title:"Html"
    },
    {
        Image:Javascript,
        Title:"Javascript"
    },
    {
        Image:Material,
        Title:"Material UI"
    },
    {
        Image:Node,
        Title:"Node JS"
    },
    {
        Image:React,
        Title:"React JS"
    },
    {
        Image:TailWind,
        Title:"TailWind Css"
    },
    {
        Image:MongoDB,
        Title:"MongoDB"
    },
    {
        Image:styled,
        Title:"Styled Component"
    },

]
export const Skills = () => {
    return (
        <div id="skills" className='w-full p-2 lg:h-screen'>
            <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
                <p className="text-xl tracking-widest text-[#5651e5] uppercase py-4">Skills</p>
                <h2 className="capitalize">What do i do</h2>
                <div className='grid gap-8 py-4 md:grid-cols-2 lg:grid-cols-3'>

                   {data.map((skill)=><>
                    <div className='p-6 duration-300 ease-in shadow-xl rounded-xl hover:scale-105'>
                        <div className="grid items-center justify-center grid-cols-2 gap-4">
                            <div className='m-auto'>  
                            <Image src={skill.Image} width="64px" height="64px" />
                            </div>
                            <div className='flex flex-col items-center justify-center '>
                                <h3>{skill.Title}</h3>
                            </div>
                            

                        </div>
                    </div>
                   </>)}
                   
                </div>
            </div>
        </div>
    )
}
