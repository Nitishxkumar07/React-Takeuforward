import React, { useState } from 'react'

export const faqData = [
  {
    category: "Subscription & Future Updates",
    questions: [
      {
        id: 1,
        question: "Will I get access to new features or content released in the future?",
        answer: "Yes, you will get access to future updates and newly released content according to your plan."
      },
      {
        id: 2,
        question: "Will the videos be downloadable after the subscription ends?",
        answer: "No, access to videos depends on your subscription validity."
      },
      {
        id: 3,
        question: "Can I upgrade from Sprint later?",
        answer: "Yes, you can upgrade your plan anytime."
      },
      {
        id: 4,
        question: "Can we extend the validity after expiry?",
        answer: "Validity extension options may be available depending on the course policy."
      },
      {
        id: 5,
        question: "Where can I find the course validity information?",
        answer: "You can check the validity information on the course details page."
      },
      {
        id: 6,
        question: "Can two learners buy together or share an account?",
        answer: "No, account sharing is generally not allowed."
      },
      {
        id: 7,
        question: "Is there any free trial session available?",
        answer: "Free trial availability depends on the specific course."
      }
    ]
  },
  {
    category: "Features & Functionality",
    questions: [
      {
        id: 1,
        question: "What exactly is Code Review and how does it work?",
        answer: "Code Review allows mentors to review your submitted code and provide feedback on logic, optimization, coding standards, and best practices."
      },
      {
        id: 2,
        question: "For aptitude, do we have any videos?",
        answer: "Yes, aptitude preparation videos are available covering quantitative aptitude, logical reasoning, and interview-focused problem solving."
      },
      {
        id: 3,
        question: "How often do you conduct live sessions?",
        answer: "Live sessions are conducted regularly throughout the month, depending on the course schedule and mentor availability."
      },
      {
        id: 4,
        question: "Programming languages supported",
        answer: "The platform supports multiple languages including C++, Java, Python, JavaScript, and others commonly used in interviews."
      },
      {
        id: 5,
        question: "How do login options work? Why does it log out automatically? (Only for plus users)",
        answer: "For security reasons, sessions may expire after inactivity or when the account is accessed from another device."
      }
    ]
  },
  {
    category: "Course Content & Curriculum",
    questions: [
      {
        id: 1,
        question: "Does TUF+ include YouTube content?",
        answer: "Some concepts may overlap with public content, but premium courses include structured lessons, practice sheets, and exclusive resources."
      },
      {
        id: 2,
        question: "What topics are covered in the DSA course?",
        answer: "The course covers Arrays, Strings, Linked Lists, Stacks, Queues, Trees, Graphs, Dynamic Programming, Greedy Algorithms, and more."
      },
      {
        id: 3,
        question: "Are there any prerequisites?",
        answer: "Basic programming knowledge is recommended, but most courses start with fundamentals before moving to advanced topics."
      },
      {
        id: 4,
        question: "Is the content updated regularly?",
        answer: "Yes, course content is reviewed and updated frequently to keep pace with industry trends and interview patterns."
      },
      {
        id: 5,
        question: "Does the platform help with doubts and interview follow-ups?",
        answer: "Yes, learners can ask doubts through discussion channels and receive guidance related to interviews and preparation."
      },
      {
        id: 6,
        question: "Can I get a sample lesson?",
        answer: "Sample lessons and previews are available for selected courses so learners can evaluate the teaching style."
      },
      {
        id: 7,
        question: "How much time is needed to complete the course?",
        answer: "Completion time varies by learner, but most students finish the curriculum within a few months of consistent study."
      }
    ]
  },
  {
    category: "Account Management",
    questions: [
      {
        id: 1,
        question: "Is account sharing allowed?",
        answer: "No, account sharing is generally prohibited to ensure fair usage and account security."
      },
      {
        id: 2,
        question: "Can I use TUF+ on multiple devices?",
        answer: "Yes, you can access your account on multiple devices, subject to platform policies and security restrictions."
      },
      {
        id: 3,
        question: "Can I delete my account permanently?",
        answer: "Yes, you can request permanent account deletion through account settings or customer support."
      },
      {
        id: 4,
        question: "Is my personal information secure?",
        answer: "User information is protected using industry-standard security measures and privacy practices."
      },
      {
        id: 5,
        question: "Is TUF+ globally accessible?",
        answer: "Yes, the platform can be accessed from most countries with a stable internet connection."
      }
    ]
  },
  {
    category: "Payment & Refunds",
    questions: [
      {
        id: 1,
        question: "How to request a refund?",
        answer: "We currently do not offer refunds once a course is purchased."
      },
      {
        id: 2,
        question: "What if I cannot pay from my country?",
        answer: "Please reach out to our support team on Whatsapp +91 63714 18920, they will help you with bank details for transferring the payment."
      },
      {
        id: 3,
        question: "Can I pay from outside India?",
        answer: "Yes, you can. Please reach out to our support team on Whatsapp +91 63714 18920, they will help you with bank details for transferring the payment."
      },
      {
        id: 4,
        question: "What if I want to opt out?",
        answer: "Striver teaches DSA himself, and opt-out rates are almost zero. We're confident you'll love the content."
      },
      {
        id: 5,
        question: "Payment modes available",
        answer: `Multiple payment options available at checkout:\nUPI\nCredit/Debit cards\nCardless EMI\nEMI options`
      },
    ]
  }
];

const Questions = () => {
  const [selecteCategory, setSelectCategory] = useState(0)
  const [aopen, setAopen] = useState(null);

  const showAnswer = (id) => {
    aopen === id ? setAopen(null) : setAopen(id);
  }

  return (
    <div className='flex flex-row p-14 space-x-24 mt-14  max-w-5xl'>
      <div className='flex flex-col items-start space-y-5'>
        {faqData.map((item, index) => (
          <div>
            <div>
              <button key={index} className={selecteCategory === index ? 'px-4 font-bold py-2 bg-orange-500 rounded-3xl' : 'px-4 font-bold py-2 bg-gray-900 rounded-3xl'}
                onClick={() => setSelectCategory(index)}>
                {item.category}</button>
            </div>
          </div>
        ))}
      </div>
      <div className='space-y-2 max-w-3xl'>
        {faqData[selecteCategory].questions.map((item) => (
          <div className='border border-gray-700 p-2 space-y-2 rounded-2xl' key={item.id}>
            <div className='flex space-x-5 justify-between flex-row text-sm p-2 max-h-fit ' onClick={() =>
              showAnswer(item.id)
            }>
              <p className='text-base font-bold'>{item.question}</p>
              <span>
                {aopen === item.id ? "▼" : "▲"}
              </span>
            </div>
            {aopen === item.id && (
              <div className="text-sm font-medium">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Questions
