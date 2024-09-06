import React from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import Link from "next/link";
import Tokencreatorsolana from "./tokencreatorsolana";
import dollar from '../../../assets/dollar.webp';
import token from '../../../assets/token.webp';
import lock from '../../../assets/lock.webp';
import graph from '../../../assets/graph.webp';
import boxes from '../../../assets/boxes.webp';
import pen from '../../../assets/pen.webp';
import home from '../../../assets/home.webp';
import setting from '../../../assets/setting.webp';
import airplane from '../../../assets/airplane.webp';
import dollarAnimated from '../../../assets/dollarAnimated.gif';
import graphAnimated from '../../../assets/graph.gif';
import lockAnimated from '../../../assets/lock.gif';
import settingAnimated from '../../../assets/settingAnimtaed.gif';
import tokenAnimated from '../../../assets/tokenAnimated.gif';
import airplaneAnimated from '../../../assets/airplane.gif';
import homeAnimated from '../../../assets/homeAnimated.gif';
import Image from "next/image";

const CreateToken = ({ open, setOpen }) => {
  const menus = [
    { name:  "Home", link: "/", img: home, animate: homeAnimated},
    { name:  "Token Launchpad", link: "/", img: dollar, animate: dollarAnimated, margin: true  },
    { name: "Token Creator", link: "/", img: token, animate: tokenAnimated },
    { name: "Token Multisender", link: "/", img: airplane, animate: airplaneAnimated },
    { name: "Create Liquidity Pool", link: "/", img: graph, animate: graphAnimated },
    { name: "Create Token Staking", link: "/", img: lock, animate: lockAnimated },
    { name: "Token Manager", link: "/", img: setting, animate: settingAnimated, },
    { name: "Generate NFTs", link: "/", img: boxes, animate: boxes, margin: true },
    { name: "Create Mint", link: "/", img: dollar, animate: dollarAnimated },
    { name: "Create NFT Presale", link: "/",  img: pen, animate: pen, },
    { name: "Create NFT Staking", link: "/", img: lock, animate: airplaneAnimated },
    { name: "NFT Manager", link: "/", img: setting, animate: settingAnimated },
  ];

  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#1d1d1d] border-black border-r-2 min-h-screen ${
          open ? "w-72" : "w-20"
        } duration-500 text-gray-100 px-4`}
      >
        <div className="mt-4 flex flex-col justify-center gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              href={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm gap-3.5 font-medium p-2 hover:border-l-2 border-white `}
            >
              {/* Image for static and animated */}
              <div className="w-8 h-8">
                <Image
                width={100}
                height={100}
                  src={menu?.img.src}
                  alt={`${menu?.name} icon`}
                  className="group-hover:hidden w-full"
                />
                <Image
                width={100}
                height={100}
                  src={menu?.animate.src}
                  alt={`${menu?.name} animated icon`}
                  className="hidden group-hover:block w-full"
                />
              </div>

              <h2
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 overflow-hidden font-extrabold tracking-wide text-xl"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        <Tokencreatorsolana/>
      </div>
    </section>
  );
};

export default CreateToken;
