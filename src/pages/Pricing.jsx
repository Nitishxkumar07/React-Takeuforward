import React, { useState } from 'react'
import Navbar from '../components/Navbar';
import Reviews from '../components/Reviews';
import Prices from '../components/Prices';
import Questions from '../components/Questions';
import Footer from '../components/Footer';


export const roadmapData = [
  {
    id: 0,
    title: "DSA Mastery",
    icon: "🚀",
    description:
      "Master DSA with structured roadmaps, 1000+ problems, and clear explanations to crack coding interviews faster.",

    courses: [
      {
        id: 101,
        title: "DSA",
        icon: "🚀",
        description:
          "Designed for beginners as well as experts to prepare DSA.",
        stats: [
          "19+ Topics",
          "16+ Contests",
          "474+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 102,
        title: "DSA (Concept Revision)",
        icon: "📚",
        description:
          "For people looking to study concepts for similar problems.",
        stats: [
          "40+ Topics",
          "199+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 103,
        title: "DSA (Quick Revision)",
        icon: "⚡",
        description:
          "Bump up your last moment confidence with quick revision.",
        stats: [
          "10+ Topics",
          "79+ Problems"
        ],
        buttonText: "View Syllabus"
      }
    ]
  },

  {
    id: 1,
    title: "Design Simplified",
    icon: "📖",
    description:
      "Learn system design from basics to advanced with real-world examples.",
    courses: [
      {
        id: 101,
        title: "DSA",
        icon: "🚀",
        description:
          "Designed for beginners as well as experts to prepare DSA.",
        stats: [
          "19+ Topics",
          "16+ Contests",
          "474+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 102,
        title: "DSA (Concept Revision)",
        icon: "📚",
        description:
          "For people looking to study concepts for similar problems.",
        stats: [
          "40+ Topics",
          "199+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 103,
        title: "DSA (Quick Revision)",
        icon: "⚡",
        description:
          "Bump up your last moment confidence with quick revision.",
        stats: [
          "10+ Topics",
          "79+ Problems"
        ],
        buttonText: "View Syllabus"
      }
    ]
  },

  {
    id: 2,
    title: "Data Engineering",
    icon: "🗄️",
    description:
      "Master databases, pipelines, warehousing, and distributed systems.",
    courses: [
      {
        id: 101,
        title: "DSA",
        icon: "🚀",
        description:
          "Designed for beginners as well as experts to prepare DSA.",
        stats: [
          "19+ Topics",
          "16+ Contests",
          "474+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 102,
        title: "DSA (Concept Revision)",
        icon: "📚",
        description:
          "For people looking to study concepts for similar problems.",
        stats: [
          "40+ Topics",
          "199+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 103,
        title: "DSA (Quick Revision)",
        icon: "⚡",
        description:
          "Bump up your last moment confidence with quick revision.",
        stats: [
          "10+ Topics",
          "79+ Problems"
        ],
        buttonText: "View Syllabus"
      }
    ]
  },

  {
    id: 3,
    title: "Core CS Fundamentals",
    icon: "💻",
    description:
      "Strengthen DBMS, OS, CN, and OOPs concepts for interviews.",
    courses: [
      {
        id: 101,
        title: "DSA",
        icon: "🚀",
        description:
          "Designed for beginners as well as experts to prepare DSA.",
        stats: [
          "19+ Topics",
          "16+ Contests",
          "474+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 102,
        title: "DSA (Concept Revision)",
        icon: "📚",
        description:
          "For people looking to study concepts for similar problems.",
        stats: [
          "40+ Topics",
          "199+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 103,
        title: "DSA (Quick Revision)",
        icon: "⚡",
        description:
          "Bump up your last moment confidence with quick revision.",
        stats: [
          "10+ Topics",
          "79+ Problems"
        ],
        buttonText: "View Syllabus"
      }
    ]
  },

  {
    id: 4,
    title: "Aptitude Accelerator",
    icon: "⚡",
    description:
      "Practice aptitude, logical reasoning, and quantitative concepts.",
    courses: [
      {
        id: 101,
        title: "DSA",
        icon: "🚀",
        description:
          "Designed for beginners as well as experts to prepare DSA.",
        stats: [
          "19+ Topics",
          "16+ Contests",
          "474+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 102,
        title: "DSA (Concept Revision)",
        icon: "📚",
        description:
          "For people looking to study concepts for similar problems.",
        stats: [
          "40+ Topics",
          "199+ Problems"
        ],
        buttonText: "View Syllabus"
      },
      {
        id: 103,
        title: "DSA (Quick Revision)",
        icon: "⚡",
        description:
          "Bump up your last moment confidence with quick revision.",
        stats: [
          "10+ Topics",
          "79+ Problems"
        ],
        buttonText: "View Syllabus"
      }
    ]
  }
];

const pricing = () => {
  const [course, setCourse] = useState(0)
  return (
    <div>
      <Navbar />
      <div className='mt-10 space-y-5 text-left p-32 max-w-5xl'>
        <h1 className='font-semibold text-5xl'>Your Entire Interview Prep Journey Simplified in ONE STOP</h1>
        <p className='text-xl text-left text-gray-400'>Trusted by 1M+ learners, TUF+ simplifies your interview preparation by bringing everything high-quality under one umbrella. It saves you the time and confusion that many candidates waste while hopping between multiple resources - and regret later...</p>
        <div className='space-x-8 mt-10'>
          <button className='border border-transparent bg-gray-100 text-gray-800 rounded-3xl text-md px-4 p-2 font-semibold'>Try Free Preview</button>
          <button className='border border-transparent bg-orange-500 rounded-3xl text-md px-4 p-2 font-semibold shadow-amber-600'>Upgrade Now</button>
        </div>
        <iframe className='mt-30 self-center' width="1000" height="600" src="https://www.youtube.com/embed/F3g2kD-yxOg?si=SbFEBZJ2-wgC0dfT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
      <div className='flex flex-row space-x-10 max-w-screen pl-20 mb-20'>
        <div className='flex flex-col space-y-4'>
          {roadmapData.map((item, index) => (
            <button className='border border-transparent bg-gray-950 rounded-3xl text-left p-3 max-w-sm'
             key={item.id} onClick={() => {
              setCourse(index)
            }}>
              <p className='text-base '>{item.icon}{item.title}</p>
              {course === item.id && (<p className='text-xs mt-2'>{item.description}</p>)}
            </button>
          ))}
        </div>
        <div className='flex flex-wrap space-x-4 space-y-4 '>
          {roadmapData[course].courses.map((course) =>(
            <div className='border-gray-900 w-sm border-4 space-y-2 rounded-3xl p-2' key={course.id}>
              <p >{course.icon}</p>
              <p className='text-lg font-bold'>{course.title}</p>
              <p className='text-sm'>{course.description}</p>
              <ul className='text-sm flex flex-col font-bold'>
                {course.stats.map((stat,i) =>(
                  <li key={i}>⇛ {stat}</li>
                ))}
              </ul>
              <button className='text-sm font-semibold p-3 bg-blue-500 rounded-3xl w-fit '>{course.buttonText}</button>
            </div>
          ))}
        </div>
      </div>
      <Reviews />
      <Prices />
      <Questions />
      <Footer />
    </div>
  )
}

export default pricing;
