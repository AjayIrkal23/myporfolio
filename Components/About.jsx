import React from 'react'
import  Link  from 'next/link';

export const About = () => {
  return (
 

  
    <div id="about" className="flex items-center w-full p-2 py-16 md:h-screen">
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className="col-span-2">
            <p className='text-xl tracking-widest uppercase text-[#5651e5]'>About</p>
            <h2 className='py-4'>Who I Am</h2>
            <p className="py-2 text-gray-600">// I am not your normal developer</p>
            <p className="py-2 text-gray-600">The crossover between design and programming has always been of interest to me, I've been lucky enough to work alongside some talented teams on a number of high profile websites. I have a wide range of skills that include back-end development using open source technologies (NodeJs), design (working closely with designers), front-end development ( ReactJs,NextJs, HTML5, CSS3, Javascript, Responsive, UX), database(MongoDB)
           </p>
            <p className="py-2 text-gray-600">With me you can get advantages of optimal performance, UserFriendly UI, LeastCosting etc Contact me Now
           !</p>
           <Link href="/#project"><p className="py-2 text-gray-600 underline cursor-pointer">Check out some of my latest projects</p></Link> 
        </div>
        <div className='flex items-center justify-center w-full h-auto p-4 m-auto duration-300 ease-in shadow-xl shadow-gray-400 rounded-xl hover:scale-105 '>
            <img className='rounded-xl' src="https://img.freepik.com/free-vector/cute-cool-astronaut-with-jacket-jeans-cartoon-vector-icon-illustration-science-fashion-icon-concept-isolated-premium-vector-flat-cartoon-style_138676-3318.jpg?w=2000" alt="" />
        </div>
        </div>
    
    </div>
  
  )
}
