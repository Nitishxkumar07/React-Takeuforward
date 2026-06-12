import React from 'react'
import firstVideo from '../assets/first.mp4'
import secondVideo from '../assets/second.mp4'
import thirdVideo from '../assets/third.mp4'
import fiurthVideo from '../assets/fiurth.mp4'

const sections = [
  {
    id: "1",
    heading: "COMPANY-SPECIFIC INTERVIEW PREP",
    paragraph:
      "Target your dream job with practice sets curated for companies like Google, Amazon, Microsoft, and more. Train with their most frequently asked questions to build confidence and precision.",
    video: firstVideo,
  },
  {
    id: "2",
    heading: "PERSONALIZED ROADMAPS",
    paragraph:
      "Create a custom learning path based on your schedule and skill level. Whether you have 2 months or 12, get a clear step-by-step roadmap that keeps you focused.",
    video: secondVideo,
  },
  {
    id: "3",
    heading: "Master DSA, System Design, and Core CS",
    paragraph:
      "Build a rock-solid foundation with 1000+ DSA problems, 100+ system design challenges, and complete coverage of DBMS, OS, and CN to ace every coding interview.",
    video: thirdVideo,
  },
  {
    id: "4",
    heading: "Ace Interviews with Shared Experiences",
    paragraph:
      "Read verified stories from real candidates. Learn what to expect in interviews, common questions, and proven strategies to perform your best.",
    video: fiurthVideo,
  },
];

const Dashboard = () => {
  return (
    <div className='mt-44'>
      <div className='flex flex-row space-x-16 items-center p-5'>
        <div className='text-5xl text-gray-300 font-bold  text-left'>
          <span className='-z-10 text-gray-600'>Everything You
          Need To</span> Crack
          Tech Interviews
        </div>
        <div className='font-bold text-gray-400 mt-1.5  text-left'>A single platform that combines structured learning, real practice, and expert guidance so you can master coding, system design, and core CS subjects with confidence.</div>
      </div>
      <div className='grid grid-cols-2 space-x-3 space-y-5 p-5 mt-4'>
        {sections.map((section) => (
          <div className=' border border-gray-400 p-5 '>
            <div key={section.id}>
              <h2 className='text-3xl font-bold text-gray-300'>{section.heading}</h2>

              <p className='text-xl font-bold text-gray-700'>{section.paragraph}</p>

              <video playsInline autoPlay loop muted >
                <source className='h-36 w-40' src={section.video} type="video/mp4" />
              </video>
            </div>
          </div>
        ))}
      </div>
      <div className='p-8 ml-12 space-x-5 flex flex-row'>
        <div className='space-y-3 max-w-sm'>
          <h3 className='text-gray-300 text-lg font-bold '>Community Support</h3>
          <p className='text-gray-500 font-semibold'>Join 1.2M+ coders worldwide, share progress, ask questions, and accelerate learning through an active, supportive global network.</p>
        </div>
        <div className='space-y-3 max-w-sm'>
          <h3 className='text-gray-300 text-lg font-bold '> Mock Tests & Contests</h3>
          <p className='text-gray-500 font-semibold'>Sharpen your speed, accuracy, and problem-solving stamina by competing in realistic, high-pressure scenarios that prepare you for assessments.</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
