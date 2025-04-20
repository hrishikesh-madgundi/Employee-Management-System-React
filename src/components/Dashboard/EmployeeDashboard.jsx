import React from 'react'
import Header from '../Other/Header'
import TaskListNumbers from '../Other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = () => {
  return (
    <div className='p-10 bg-[#lClClC] h-screen'>
      <Header/>
      <TaskListNumbers/>
      <TaskList/>
    </div>
  )
}

export default EmployeeDashboard
