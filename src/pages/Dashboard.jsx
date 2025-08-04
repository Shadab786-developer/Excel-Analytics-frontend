import React from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import DashboardUi from '../components/DashboardUi'

const Dashboard = () => {
  return (
    <div>
      <Navbar title='Welcome back!👋'/>
      <div className='flex gap-30'>
        <Sidebar />
      <DashboardUi />
      </div>
      
    </div>
  )
}

export default Dashboard
