import React from 'react'
import 'remixicon/fonts/remixicon.css'
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { PiThreadsLogoThin } from "react-icons/pi";
import { LuUserPlus } from "react-icons/lu";
import { AiOutlinePlus } from "react-icons/ai";
import { BiSolidGrid } from "react-icons/bi";
import { LuSquareUser } from "react-icons/lu";
const Main = () => {

    const photos = [
        {img:'https://i.pinimg.com/736x/35/61/63/356163dff241cb030ad7bb3874858d45.jpg'},
        {img:'https://i.pinimg.com/736x/fe/ba/c3/febac3d0247ad26059cc4533ad742f5d.jpg'},
        {img:'https://i.pinimg.com/736x/93/41/22/934122c05a0d3e99aa7c98618e61f173.jpg'},
        {img:'https://i.pinimg.com/736x/a2/83/3f/a2833f45d97dd0a8cfcfd561f03ba3f9.jpg'},
        {img:'https://i.pinimg.com/736x/7a/13/46/7a1346d61eab8a5d38834a3b7f7d4f30.jpg'},
        {img:'https://i.pinimg.com/1200x/85/7d/36/857d364ef04001f2e3bcd8af08eb0e7f.jpg'},
        {img:'https://i.pinimg.com/1200x/de/d6/9d/ded69d3d6b6553f46c1338a16e46a709.jpg'},
        {img:'https://i.pinimg.com/736x/e3/1b/3f/e31b3f33b789a2ae1c34c562648108fb.jpg'},
        {img:'https://i.pinimg.com/736x/1b/be/cf/1bbecf98dc662483759b6172545a9224.jpg'},
    ]
  return (
    <div className='h-screen md:ml-[30%] w-full text-white bg-black'>
     <div className="nav md:hidden flex justify-between text-2xl items-center list-none px-4 h-12 border-b-2 border-[#222]">
        <li><i class="ri-settings-2-line  text-white"></i></li>
        <li className='text-lg'>adarsh._.07</li>
        <li><i class="ri-threads-fill  text-white"></i></li>
     </div>

     <div className=' w-full flex items-center '>
        <div className='px-6'>
       <div className='h-24 w-24 overflow-hidden rounded-full mt-10'>
        <img className='h-full w-full object-cover' src="https://i.pinimg.com/736x/d1/07/2e/d1072ec210eda918676c72f665a98098.jpg" alt="" />
        </div>
        <div className='text-xl font-semibold mx- mt-2 flex items-center'><PiThreadsLogoThin/>ADARSH </div>
        </div>
        <div className='flex flex-col gap-3  w-[65%] px-2 '>
            <h1 className='text-xl font-semibold'>ADARSH DAROKAR <RiVerifiedBadgeFill className='text-blue-500 inline-block' /></h1>
            <div className='flex justify-between'>
            <div>
                <h5 className='text-xl font-semibold' >9</h5>
                <p className='text-lg'>Posts</p>
            </div>
            <div>
                <h5 className='text-xl font-semibold' >1022</h5>
                <p className='text-lg'>Followers</p>
            </div>
            <div>
                <h5 className='text-xl font-semibold' >439</h5>
                <p className='text-lg'>Following</p>
            </div>
            </div>
        </div>
     </div>
     <div className=' mt-8 w-full  flex items-center px-4 justify-between'>
        <div className='w-[45%] h-8 rounded-xl bg-[#3838389c] px-4 flex justify-center items-center'>Edit Profile</div>
        <div className='w-[45%] h-8 rounded-xl bg-[#3838389c] px-4 flex justify-center items-center'>Share Profile</div>
        <div ><LuUserPlus className='inline-block text-xl ' /></div>
     </div>
     <div className=' w-full mt-8 flex  items-center gap-5 px-2'>
       <div className='h-20 bg-black w-20 flex justify-center items-center rounded-full border'>
        <AiOutlinePlus className='text-3xl' />
       </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://i.pinimg.com/736x/5e/77/8d/5e778dbfa935cd03a0ee0e8cc0b1f107.jpg" alt="" />
              </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://i.pinimg.com/736x/d2/da/cb/d2dacb1262f55686940c5d90c3b6ba89.jpg" alt="" />
              </div>
              <div className='h-20 bg-black p-1 w-20 overflow-hidden flex justify-center items-center rounded-full border'>
                <img className='h-full w-full rounded-full object-cover' src="https://i.pinimg.com/1200x/b2/08/d2/b208d2be0c8f66e8877059c5079a6abd.jpg" alt="" />
              </div>
     </div>

     <div className=' w-full  mt-8'>
        <div className=' w-full flex justify-between  px-4'>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
              <li className='text-4xl   text-gray-400'><BiSolidGrid/></li>
            </div>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
            <li><img className='h-full w-full rounded-full object-cover' src="https://i.pinimg.com/1200x/fe/23/cf/fe23cfb9482a5f56dfe5e1766179f24d.jpg" alt="" /></li>
            </div>
            <div className='h-24 w-24 flex justify-center items-center list-none rounded-full'>
            <li className='text-4xl text-gray-300'><LuSquareUser/></li>
            </div>
        </div>
      <div className="grid grid-cols-3 gap-1 ">
             {photos.map((item,index)=>{
                return(
                    <div key={index} className="aspect-square bg-blue-300">
                       <img className='h-full w-full  object-cover' src={item.img} alt="" />
                    </div>
                )
             })}
      </div>
     </div>
    </div>
  )
}

export default Main