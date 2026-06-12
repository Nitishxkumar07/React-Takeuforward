import React from 'react'
import logoImage from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className='flex flex-row space-x-8 p-12 justify-center'>
                <img src={logoImage} alt="" className='w-40 h-7' />
                <div className='flex flex-wrap space-x-2.5 text-sm text-gray-400 max-w-xl justify-center'>
                    <Link className='hover:text-gray-100'>About</Link>
                    <p>|</p>
                    <Link className='hover:text-gray-100'>Contact us</Link>
                    <p>|</p>
                    <Link className='hover:text-gray-100'>Pricing</Link>
                    <p>|</p>
                    <Link className='hover:text-gray-100'>Privacy Policy</Link>
                    <p>|</p>
                    <Link className='hover:text-gray-100'>Terms and Conditions</Link>
                    <p>|</p>
                    <Link className='hover:text-gray-100'>Cancellation and Refund Policy</Link>
                    <br />
                    <p className='text-gray-600 font-bold mt-4'>Copyright © 2026 Moveforward Private Limited | All rights reserved</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <img src="https://www.bing.com//th?id=OSK.57e1d8262ea65f419f8e7732b524ee8f&w=80&h=80&qlt=90&c=6&rs=1&cdv=1&pid=RS" alt="" className='w-5 h-5 ' />
                    <img src="https://th.bing.com/th/id/ODF.fYZFrS0zcRTBamv-F6K_ww?w=16&h=16&qlt=80&o=6&dpr=1.5&pid=1.2" alt="" className='w-5 h-5 ' />
                    <img src="https://th.bing.com/th/id/ODF.F8hkx5f_DpSQJ5Rg49E4Pg?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2" alt="" className='w-5 h-5 ' />
                    <img src="https://th.bing.com/th/id/ODF.MrzzDTMlZsq_k5DWWmv7Hw?w=32&h=32&qlt=90&pcl=fffffc&o=6&pid=1.2" alt="" className='w-5 h-5 ' />
                </div>
            </div>
        </div>
    )
}

export default Footer
