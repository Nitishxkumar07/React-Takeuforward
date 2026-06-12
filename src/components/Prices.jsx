import React from 'react'
import { Link } from 'react-router-dom';
export const pricingPlans = [
    {
        id: 1,
        title: "DSA",
        learners: "7K+ Learners",

        originalPrice: 5099,
        discountedPrice: 3314,
        discount: "35% OFF",

        duration: "12 Months",

        features: [
            {
                text: "DSA (Basics to Advanced)",
                included: true,
            },
            {
                text: "DSA (Revision Pattern Sheet)",
                included: true,
            },
            {
                text: "DSA (Quick Revision Sheet)",
                included: true,
            },
            {
                text: "AI Features",
                included: true,
            },
            {
                text: "Career Guidance Group Sessions",
                included: true,
            },
            {
                text: "Premium/Company Problems",
                included: false,
            },
            {
                text: "Other Subjects",
                included: false,
            },
        ],

        buttonText: "Upgrade Now",
    },

    {
        id: 2,
        title: "LLD",
        learners: "13K+ Learners",

        originalPrice: 4998,
        discountedPrice: 3249,
        discount: "35% OFF",

        duration: "12 Months",

        features: [
            {
                text: "OOPs (Learning + Practice)",
                included: true,
            },
            {
                text: "Low Level Design",
                included: true,
            },
            {
                text: "AI Features",
                included: true,
            },
            {
                text: "Career Guidance Group Sessions",
                included: true,
            },
            {
                text: "Premium/Company Problems",
                included: false,
            },
            {
                text: "Other Subjects",
                included: false,
            },
        ],

        buttonText: "Upgrade Now",
    },

    {
        id: 3,
        title: "OOPs + LLD + SQL",
        learners: "13K+ Learners",

        originalPrice: 6650,
        discountedPrice: 4323,
        discount: "35% OFF",

        duration: "12 Months",

        features: [
            {
                text: "OOPs (Learning + Practice)",
                included: true,
            },
            {
                text: "Low Level Design",
                included: true,
            },
            {
                text: "SQL",
                included: true,
            },
            {
                text: "AI Features",
                included: true,
            },
            {
                text: "Career Guidance Group Sessions",
                included: true,
            },
            {
                text: "Premium/Company Problems",
                included: false,
            },
            {
                text: "Other Subjects",
                included: false,
            },
        ],

        buttonText: "Upgrade Now",
    },
];

const Prices = () => {
    return (
        <div>
            <h1 className='text-6xl w-2xl font-bold p-3.5 pl-20 mt-30  text-left'>Explore More Plans
                <span className='text-gray-400 -z-10'> Tailored to Your Needs</span></h1>
            <div className='flex flex-wrap space-x-10 items-center justify-center'>
                {pricingPlans.map((item, index) => (
                    <div key={index} className='border-3 space-y-2 rounded-2xl border-gray-700 max-w-sm h-4xl p-4 mt-5 bg-gray-950 hover:scale-105'>
                        <h1 className='text-2xl font-semibold '>{item.title}</h1>
                        <p className='text-sm text-green-600'>({item.learners})</p>
                        <hr />
                        <s className='text-xl font-semibold text-gray-400'>₹ {item.originalPrice}.00</s>
                        <div className='flex space-x-2'>
                            <h1 className='text-xl font-bold'>₹ {item.discountedPrice}.00</h1>
                            <p className='text-xs mt-1 text-orange-400'>{item.discount}🏷️</p>
                        </div>
                        <p className='font-semibold text-base text-gray-400'>📆 {item.duration}</p>
                        <div className='flex flex-col space-y-0.5'>
                            {item.features.map((price, i) => (
                                <p key={i}
                                    className={price.included ? "text-green-500 text-xs" : "text-gray-400 text-xs"}
                                >{price.included ? "✓" : "✕"} {price.text}</p>
                            ))}
                        </div>
                        <button className='text-base mt-3 font-semibold border border-transparent bg-orange-400 p-2 rounded-3xl'><Link>{item.buttonText} →</Link></button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Prices
