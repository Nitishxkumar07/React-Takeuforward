import React from 'react'
import About from './About';

const Header = () => {
  return (
    <div>
      <div className='mt-10 space-y-5 text-left pl-24'>
        <div className='border border-white bg-white  self-center w-fit text-black rounded-3xl p-1.5 px-2 text-xs'>15,65,318+ Learner</div>
        <h1 className='font-bold m-1 text-5xl'>ONE STOP</h1>
        <h1 className='font-bold text-5xl'>Learning Platform For TECH Interviews</h1>
        <p className='text-md font-semibold text-gray-400 m-4'>Learn DSA, System Design,
          and Core CS Subjects with personalised roadmaps,
          expert videos, and practice built for results.
        </p>
        <div className='space-x-8'>
          <button className='border border-transparent bg-gray-100 text-gray-800 rounded-3xl text-md px-4 p-2 font-semibold'>Start Learning for Free</button>
          <button className='border border-transparent bg-orange-500 rounded-3xl text-md px-4 p-2 font-semibold shadow-amber-600'>Explore Plus</button>
        </div>
      </div>
      <div className='text-left p-24 flex flex-col space-y-2.5 '>
        <p className='text-gray-500 font-medium '>Curated sheets designed for a better learning experience.</p>
        <p className='text-gray-500 font-medium '>Detailed videos and editorials to help you master every problem.</p>
        <p className='text-gray-500 font-medium '>Stay consistent with streaks and leaderboard competition.</p>
        <p className='text-gray-500 font-medium '>AI-powered instant doubt support for faster learning.</p>
      </div>
      <div className='mt-24 flex bg-black/30 flex-col items-center text-center max-w-3xl mx-auto relative overflow-hidden rounded-xl'>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute  inset-0 w-full h-full object-cover opacity-30">
          <source
            src="https://takeuforward.org/videos/typing.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/60"></div>
        <h1 className='text-6xl text-orange-500 font-semibold relative z-10 '>15,65,317+</h1>
        <h1 className='font-semibold text-2xl text-gray-50 mt-10 relative z-10 '>Engineers learning on TUF</h1>
        <h1 className='font-semibold text-xs max-w-xs mt-5 text-gray-400 relative z-10 '>From YouTube to LinkedIn, our global community keeps growing every day. TUF is the go-to place for engineers preparing for tech interviews.</h1>
        <div className='mt-10 text-center relative z-10'>
          <div className='flex space-x-5 justify-center p-10 '>
            <div className='flex space-x-1 justify-center'>
              <img className='items-center max-w-12 h-12 mt-0' src="https://th.bing.com/th/id/ODF.MrzzDTMlZsq_k5DWWmv7Hw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2" alt="" />
              <div>
                <p className='text-shadow-md font-bold text-gray-400 '>1M subscribers</p>
                <p className='text-xs text-left text-gray-600 font-bold'>@takeuforward</p>
              </div>
            </div>
            <p className='text-shadow-md text-2xl text-gray-800'>|</p>
            <div className='flex space-x-1 justify-center'>
              <img className='items-center max-w-12 max-h-9 mt-2' src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAdTRDX.img" alt="" />
              <div>
                <p className='text-shadow-md font-bold text-gray-400 '>917K+ Followers</p>
                <p className='text-xs text-left text-gray-600 font-bold'>Raj Vikramaditya</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header;
