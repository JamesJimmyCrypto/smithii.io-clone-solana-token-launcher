'use client'
import React, { useState } from 'react'
import { FaBars } from "react-icons/fa6";
import logo from '../../../assets/logo.webp'
import Image from 'next/image';
import NavbarDropDown from './NavbarDropDown';
import { MdOutlineLightMode } from "react-icons/md";
import { MdOutlineNightlight } from "react-icons/md";
import { DropdownBtn } from './DropDownBtn';
import { Dialogue } from './Dialogue';
import { HiOutlineExternalLink } from "react-icons/hi";


const Navbar = ({ setOpen, open }) => {
  const [darkMode, setDarkMode] = useState(true);

  const modeClick = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      <div className='flex items-center justify-between mx-8'>
        <div className='flex items-center'>
          {/* Use this icon to toggle sidebar */}
          <FaBars size={25} color='#fff' onClick={() => setOpen(!open)} />
          <Image src={logo} alt='logo' className='w-64' />
          <div>

            <NavbarDropDown />
          </div>
        </div>
        <div className='flex'>
          <div>
            {darkMode ? (
              <MdOutlineLightMode onClick={modeClick} size={30} color='#fff' />
            ) : (
              <MdOutlineNightlight onClick={modeClick} size={30} color='#fff' />
            )}
          </div>

          <DropdownBtn />
          <Dialogue />
        </div>
      </div>
      <div className='text-white flex justify-center bg-[#15292c] py-3'>
        <h3 className='flex gap-1'>
          Create your <span className='font-bold'> Token Staking </span> for FREE 🔥
          <span className='flex items-center gap-1 font-bold'>
            Token Staking Builder <HiOutlineExternalLink size={20} />
          </span>
        </h3>
      </div>
    </>
  );
};

export default Navbar;
