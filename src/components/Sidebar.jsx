import React from 'react'
import dashboard_img from '../images/dashboard.png'
import upload_img from '../images/upload.png'
import generate_chart_img from '../images/generate-chat.png'
import history_img from '../images/history.png'
import ai_img from '../images/ai.png'
import logout_img from '../images/logout.png'
import profile_icon from '../images/name.png'

const Sidebar = () => {
    return (
        <div className='px-6'>
            <div className='flex flex-col p-4 max-w-50 text-sm font-bold text-gray-700  gap-4'>
                <div className=' bg-gray-300 rounded-xl p-4 flex gap-3 shadow-md cursor-pointer'>
                    <img className='w-6' src={profile_icon} alt="" />
                    <p>Name</p>
                </div>
                <div className=' bg-gray-300 rounded-xl p-4 flex flex-col gap-5 shadow-md'>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6' src={dashboard_img} alt="" />
                        <p>Dashboard</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6 ' src={upload_img} alt="" />
                        <p>Upload Excel</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6 ' src={generate_chart_img} alt="" />
                        <p>Generate Chart</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6 ' src={history_img} alt="" />
                        <p>History</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6 ' src={ai_img} alt="" />
                        <p>Ai Insights</p>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <img className='w-6 ' src={logout_img} alt="" />
                        <p>Logout</p>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Sidebar
