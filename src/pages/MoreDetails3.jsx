import React from 'react'
import { IoTime } from "react-icons/io5";
import { MdOutlineDateRange } from "react-icons/md";
import { RiVidiconLine } from "react-icons/ri";
import { IoPeople } from "react-icons/io5";

 function MoreDetails3() {
  return (
    <div className='text-black font-serif text-6xl text-center ms-5  '><u>More Details</u>
    <h1 className='text-left mt-10 text-4xl flex '> <IoTime className='mr-4'/><u>Time</u> : 3:00 PM </h1>
    <h1 className='text-left mt-10 text-4xl flex'> <MdOutlineDateRange className='mr-4'/><u>Date</u>: 11th Sept 2024 - 14th Sept 2024</h1>
    <h2 className='text-left mt-10 text-4xl flex'><RiVidiconLine className='mr-4'/><u>Mode</u>: Online</h2>
    <h2 className='text-left mt-10 text-4xl flex'><IoPeople className='mr-4'/><u>Number Of Students</u>: 24</h2>
    <h2 className='text-center mt-10 text-4xl mb-8'><u>Attendance</u></h2></div>
  )
 }
export default MoreDetails3;