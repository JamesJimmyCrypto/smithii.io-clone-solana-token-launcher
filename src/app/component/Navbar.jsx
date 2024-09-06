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
          {/* <div className='flex items-center'> */}
            {/* <div>
            <ul class="nav-menu">
      <li class="dropdown">
        <a href="#" class="dropbtn">Smithii Tools</a>
        <div class="dropdown-content">
          <ul class="submenu">
            <li class="hover-menu" id="token-menu">
              <a href="#">Tools for Token</a>
              <div class="submenu-content">
                <ul class="submenu-token" id="token-content">
                  <li class="hover-option"><a href="#">Option 1</a>
                  </li>
                  <li><a href="#">Option 2</a></li>
                </ul>
              </div>
            </li>
            <li class="hover-menu" id="nft-menu">
              <a href="#">Tools for NFT</a>
              <div class="submenu-content">
                <ul class="submenu-nft" id="nft-content">
                  <li><a href="#">Generate NFTs</a></li>
                  <li><a href="#">Create Mint</a></li>
                  <li><a href="#">Create NFT Presale</a></li>
                  <li><a href="#">Create NFT Staking</a></li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </li>
    </ul>
            </div> */}
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
