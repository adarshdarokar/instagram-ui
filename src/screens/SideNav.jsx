import React from 'react'

const SideNav = () => {
  return (
    <>
    <div className=' h-full p-14 text-white fixed w-[18vw] black border-r-1 border-gray-500'>
         <h1 className=''>Instagram</h1>
        <div className='flex flex-col gap-8 list-none mt-10 mb-10'>
          <div className="flex items-center gap-3">
            <i className="ri-home-4-line text-2xl"></i>
            <span className="text-md">Home</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-search-line text-2xl"></i>
            <span className="text-md">Search</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-compass-line text-2xl"></i>
            <span className="text-md">Explore</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-video-line text-2xl"></i>
            <span className="text-md">Reels</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-message-2-line text-2xl"></i>
            <span className="text-md">Messages</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-notification-3-line text-2xl"></i>
            <span className="text-md">Notifications</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-add-circle-line text-2xl"></i>
            <span className="text-md">Create</span>
          </div>
          <div className="flex items-center gap-3">
            <i className="ri-user-line text-2xl"></i>
            <span className="text-md">Profile</span>
          </div>
        </div>
        <div className='flex flex-col gap-3 '>
          <div className='flex gap-3 items-center'>
            <i className="ri-menu-line text-2xl"></i>
            <h1>More</h1>
          </div>
        </div>
    </div>
    </>
  )
}

export default SideNav