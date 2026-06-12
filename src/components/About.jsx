import React from 'react'

const About = () => {
  return (
    <div className='flex flex-row space-x-6 p-16'>
      <div className='flex flex-col space-y-8 text-left text-gray-300 text-lg'>
        <h1 className='text-5xl font-semibold text-left'><span className='-z-10 text-gray-500'>Your Coach</span>, Not
          Just A Creator</h1>
        <i className='font-ilatic '>Hey, I'm Raj, Founder & CEO of takeUforward, formerly known as Striver.</i>
        <i >I began my journey at Media.net, moved to Google, and spent three incredible years there before choosing a different path; building something of my own. Today, I run takeUforward full-time, a platform born from passion, persistence, and the desire to make learning truly accessible.</i>
        <i>Remember:

          You don't need a perfect background to build a great future.
          You just need direction, discipline, and the courage to start.
        </i>
        <i>Let's move forward, one step, one skill, one leap at a time.</i>
        <button className='px-3 py-3 bg-orange-500 rounded-3xl font-semibold  max-w-fit'>Get Started Now➡️</button>
      </div>
      <img src="https://takeuforward.org/striver-coach.jpg" alt="" className='h-full w-4/7 rounded-full mt-30 opacity-50 bg-blend-darken'/>
    </div>
  )
}

export default About
