import React from 'react';
import { MdNotificationsActive } from "react-icons/md";
// Optional: for styling


function Header() {
  return (
    <header className='flex justify-between bg-gradient-to-r from-violet-400 to-violet-50 ... w-[77.9rem] p-8 '>
      
        
      
     
        <ul className='flex gap-3 text-black place-content-end '>
          
          <li className='hover:underline cursor-pointer flex items-center hover:underline cursor-pointer'><MdNotificationsActive className='mr-2'/>Notifications</li>
          
        </ul>
    </header>
  );
}

export default Header;

/*//.header {
  //display: flex;
  //justify-content: space-between;
  //align-items: center;
  //padding: 10px 20px;
  //background-color: #2f2e67;
  //color: white;
//}*/