import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist" className=' h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap py-5 w-full mt-10'>
      <div className='flex-shrink-0 h-full w-[300px] p-5 bg-red-400 rounded-xl'>
            <div className='flex justify-between items-center'>
                <h3 className='bg-red-600 px-3 py-1 rounded'>High</h3>
                <h4 className='text-sm'>20 Feb 2024</h4>
            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make a Youtube video</h2>
            <p className='text-sm mt-2'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis pariatur eum neque placeat, maxime minima dolore est architecto, molestiae sunt, a corporis ipsum consectetur distinctio quidem fuga ratione iste eaque!
            </p>
      </div>
      
    </div>
  )
}

export default TaskList
