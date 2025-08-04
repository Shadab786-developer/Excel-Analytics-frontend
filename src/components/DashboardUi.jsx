import React from 'react'
import file_img from '../images/file-upload.png' 
import chart_img from '../images/chart-generate.png'
import history from '../images/last-upload.png'
import ai_insights from '../images/ai-insights.png'
import chart from '../images/hero-chart.png'

const DashboardUi = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4 gap-3 w-4xl">
        <div className="bg-fuchsia-100  p-4 rounded-lg">
            <div className='flex gap-5 items-center mb-2'>
              <div className='p-4 bg-white w-fit rounded-lg shadow-md'>
                <img className='w-6' src={file_img} alt="" />
              </div>
                0
            </div>
            <p>File Uploaded</p>
        </div>
        <div className="bg-orange-100 p-4 rounded">
             <div className='flex gap-5 items-center mb-2'>
              <div className='p-4 bg-white w-fit rounded-lg shadow-md'>
                <img className='w-6' src={chart_img} alt="" />
              </div>
                0
            </div>
            <p>Chart Generated</p>
        </div>
        <div className="bg-blue-100 p-4 rounded">
             <div className='flex gap-5 items-center mb-2'>
              <div className='p-4 bg-white w-fit rounded-lg shadow-md'>
                <img className='w-6' src={history} alt="" />
              </div>
                0
            </div>
            <p>Last Uploaded</p>
        </div>
        <div className="bg-cyan-100 p-4 rounded">
             <div className='flex gap-5 items-center mb-2'>
              <div className='p-4 bg-white w-fit rounded-lg shadow-md'>
                <img className='w-6' src={ai_insights} alt="" />
              </div>
                0
            </div>
            <p>AI Insigthts Used</p>
        </div>
      </div>

      <div className='flex gap-3'>
        <div className='flex flex-col'>
          <div className='bg-gray-200 w-80 h-48 mt-5 rounded-lg flex flex-col gap-2 p-3'>
          <p>
            Recent Uploads
          </p>
            <div className='bg-white w-full h-full rounded-lg'>

            </div>
            
        </div>
        <button className='mt-5 p-4 bg-fuchsia-700 text-white rounded-2xl shadow-lg cursor-pointer'>Try the Platform</button>
        </div>
        
        <div className='bg-gray-200   mt-5 rounded-lg flex flex-col gap-2 p-3'>
          <p>
            Last Generated Chart
          </p>
            <img className='rounded-lg w-100' src={chart} alt="" />
        </div>
      </div>
    </div>
  )
}

export default DashboardUi
