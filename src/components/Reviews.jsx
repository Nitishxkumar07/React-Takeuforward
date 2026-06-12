import React from 'react'
import { Link } from 'react-router-dom';

const reviews = [
  {
    id: 1,
    name: "Shubham Tandon",
    company: "Optum",
    role: "Full Stack Engineer Intern",
    review:
      "Hey Striver, I just wanted to send a huge thank you for your amazing A2Z DSA sheet. It was the most important resource in my preparation. Because of your sheet, I was able to crack my on-campus interviews and have just accepted an internship offer.",
    profileImage: "https://static.takeuforward.org/content/picture-1763641065518-3aPFoW6K",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833231213_Optum",
    linkedin: true,
  },
  {
    id: 2,
    name: "Rohit Sharma",
    company: "Amazon",
    role: "SDE 1 Intern",
    review:
      "Getting selected as an SDE Intern at Amazon has been one of the biggest milestones of my journey. When I started my preparation, I struggled with consistency and direction. TUF and Striver played a huge role in helping me succeed.",
    profileImage: "https://static.takeuforward.org/content/picture-1762086932408-6YU95M9f",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833482148_Amazon",
    linkedin: true,
  },
  {
    id: 3,
    name: "Anusha Jha",
    company: "Deloitte",
    role: "ADMM (Application and Data Modernization and Migration) Analyst",
    review:
      "My journey truly began in the third year of my college. Although I was involved in extracurricular activities, I lacked consistency in DSA practice. TUF helped me build strong fundamentals and confidence.",
    profileImage: "https://static.takeuforward.org/content/picture-1759398686686-XEifrUAV",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833514832_Deloitte",
    linkedin: true,
  },
  {
    id: 4,
    name: "Abilaash S. S",
    company: "",
    role: "",
    review:
      "My journey with takeUforward has been nothing short of transformational. When I started preparing for interviews, I was struggling with DSA concepts and felt overwhelmed by the volume of problems. Striver's explanations helped me stay on track.",
    profileImage: "https://static.takeuforward.org/content/picture-1757689473399-BB5gv3rv",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833709679_BNY",
    linkedin: true,
  },
  {
    id: 5,
    name: "Jeet Undaviya",
    company: "LinkedIn",
    role: "Software Engineer",
    review:
      "TUF+ helped me practice DSA in a fully structured way without wasting time. The clear path, quality problems, and focused approach strengthened my preparation. It played a major role in helping me secure my role as a Software Engineer at Oracle.",
    profileImage: "https://static.takeuforward.org/content/picture-1757618264315-dxNX81Bs",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833800871_Oracle",
    linkedin: true,
  },
  {
    id: 6,
    name: "Prathamesh Patil",
    company: "LinkedIn",
    role: "SDE 2 Backend",
    review:
      "I recently received offers from Fountane and LTIMindtree, and I could not be more grateful for the journey that brought me here.The journey was not easy.Staying consistent with DSA, system design, OS, and DBMS preparation was challenging.",
    profileImage: "https://static.takeuforward.org/content/picture-1757649270438-XVAxPuFT",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833787936_Foutane",
    linkedin: true,
  },
  {
    id: 7,
    name: "Vishnupriya",
    company: "LinkedIn",
    role: "SDE 2 Backend",
    review:
      "When I started college, I was initially more drawn to the management domain, as I believed the software field might not be the right fit for me. It played a major role in helping me secure my role as a Software Engineer at Oracle.",
    profileImage: "https://static.takeuforward.org/content/picture-1758879343467-uPIbtdBe",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833530317_Mogan%20Stanley",
    linkedin: true,
  },
  {
    id: 8,
    name: "Bathula A.V Reddy",
    company: "LinkedIn",
    role: "SDE 2 Backend",
    review:
      "When I started college, I was initially more drawn to the management domain, as I believed the software field might not be the right fit for me. It played a major role in helping me secure my role as a Software Engineer at Oracle.",
    profileImage: "https://static.takeuforward.org/content/picture-1758623041945-7JpyGhTt",
    companyLogo: "https://static.takeuforward.org/content/upload_1764833544520_Caelius%20Consulting",
    linkedin: true,
  },
];

const Reviews = () => {
  return (
    <div>
      <div className='flex flex-row p-10 justify-between'>
        <p className='text-5xl font-bold text-gray-50 max-w-sm'><span className='-z-10 font-semibold text-gray-400'>Coders that </span>
          turned around
          their careers</p>
          <p className='text-lg font-bold text-orange-500 mt-24'>16,06,262+ Learners!</p>
      </div>
      <Link className='flex flex-row flex-wrap space-x-4 space-y-5 justify-center mt-10'>
        {reviews.map((review) => (
          <div key={review.id} className='flex flex-col max-h-fit space-y-5 bg-gray-800 pt-5 rounded-2xl pb-5 pl-1 hover:scale-105 hover:border hover:border-gray-600 max-w-72'>
            <div className='flex flex-row space-x-1'>
              <img src={review.profileImage} alt="" className='w-10 h-10 rounded-full' />
              <p className='font-bold'>{review.name}</p>
            </div>
            <div>
              <p>{review.review}</p>
            </div>
            <div className='flex flex-row'>
              <img src={review.companyLogo} alt="" className='w-10 h-10 rounded-full' />
              <div className='flex flex-col '>
                <p className='text-sm'>{review.role}</p>
                <p className='text-xs'>{review.company}</p>
              </div>
            </div>
          </div>
        ))}
      </Link>
    </div>
  )
}

export default Reviews
