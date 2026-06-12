import React from 'react'
import Navbar from '../components/Navbar';
export const sheetData = [
  {
    category: "DSA Sheets",
    sheets: [
      {
        id: 1,
        title: "A2Z Sheet",
        description: "Master DSA from Basics to Advanced",
        color: "#ff6b4a",
        actions: ["Sheet", "Track"]
      },
      {
        id: 2,
        title: "Blind 75 Sheet",
        description: "Interview Problems with Video Solutions",
        color: "#ff6b4a",
        actions: ["Sheet", "Track"]
      },
      {
        id: 3,
        title: "SDE Sheet",
        description: "Most Frequently Asked Interview Questions",
        color: "#ff6b4a",
        actions: ["Sheet", "Track"]
      },
      {
        id: 4,
        title: "Striver 79 Sheet",
        description: "Last Minute Preparation",
        color: "#ff6b4a",
        actions: ["Sheet", "Track"]
      }
    ]
  },

  {
    category: "Core CS Subjects",
    sheets: [
      {
        id: 5,
        title: "CN Sheet",
        description: "Most Asked Computer Networks Interview Questions",
        color: "#a78bfa",
        buttonText: "Start Learning"
      },
      {
        id: 6,
        title: "DBMS Sheet",
        description: "Most Asked DBMS Interview Questions",
        color: "#a78bfa",
        buttonText: "Start Learning"
      },
      {
        id: 7,
        title: "OS Sheet",
        description: "Most Asked Operating System Interview Questions",
        color: "#a78bfa",
        buttonText: "Start Learning"
      }
    ]
  },

  {
    category: "System Design",
    sheets: [
      {
        id: 8,
        title: "System Design Sheet",
        description: "Master HLD from Basics to Advanced",
        color: "#7dd3c0",
        buttonText: "Start Learning"
      }
    ]
  }
];
const Home = () => {
  return (
    <>
    <Navbar />
      <div className='p-15'>
        {
          sheetData.map((section) => (
            <div className='p-4' key={section.category}>
              <h2 className='text-3xl font-bold text-orange-200 p-10'>{section.category}</h2>

              <div className='flex flex-row space-x-10 p-4'>
                {section.sheets.map((sheet) => (
                  <div className="border border-gray-900 bg-gray-900 flex flex-col rounded-3xl max-w-52 h-44 p-4" key={sheet.id}>
                    <h3 className='text-xl font-bold text-left p-2'>{sheet.title}</h3>
                    <p className='text-sm p-2 '>{sheet.description}</p>

                    {sheet.actions ? (
                      <div className='flex flex-row space-x-4 p-4'>
                        <button className='text-base font-bold text-orange-200 p-2'>{sheet.actions[0]}</button>
                        <button className='text-bese font-bold text-orange-200 p-2'>{sheet.actions[1]}</button>
                      </div>
                    ) : (
                      <button>{sheet.buttonText}</button>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </>
  )
}

export default Home
