'use client';
import React, { useState } from 'react';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuLink, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
import Image from 'next/image';
import Link from 'next/link';

const icons = {
    "Token Launchpad": { normal: dollar, hover: dollarAnimated },
    "Token Creator": { normal: token, hover: tokenAnimated },
    "Token Multisender": { normal: lock, hover: lockAnimated },
    "Create Liquidity Pool": { normal: graph, hover: graphAnimated },
    "Token Manager": { normal: setting, hover: settingAnimated },
    "Generate NFTs": { normal: boxes, hover: boxes },
    "Create Mints": { normal: pen, hover: pen },
    "Create NFT Presale": { normal: home, hover: homeAnimated },
    "Create NFT Stacking": { normal: airplane, hover: airplaneAnimated },
};

const menuItems = [
  {
    title: "Tools for Token",
    items: [
      { name: "Token Launchpad", href: "#generate-nfts" },
      { name: "Token Creator", href: "#create-mint" },
      { name: "Token Multisender", href: "#create-nft-presale" },
      { name: "Create Liquidity Pool", href: "#create-nft-staking" },
      { name: "Token Manager", href: "#token-manager" }
    ]
  },
  {
    title: "Tools for NFT",
    items: [
      { name: "Generate NFTs", href: "#another-tool-1" },
      { name: "Create Mints", href: "#another-tool-2" },
      { name: "Create NFT Presale", href: "#another-tool-3" },
      { name: "Create NFT Stacking", href: "#another-tool-4" },
      { name: "Token Manager", href: "#another-tool-5" },
    ]
  }
];

const NavbarDropDown = () => {
    const [activeMenu, setActiveMenu] = useState(null);
    const [hoveredItem, setHoveredItem] = useState(null);

    return (
      <div className="relative">
        <NavigationMenu>
          <NavigationMenuList className="flex bg-black">
            <NavigationMenuItem>
              <NavigationMenuTrigger onMouseEnter={() => setActiveMenu(menuItems[0].items)}>
                Smithii Tools
              </NavigationMenuTrigger>
              <div className="absolute left-0 mt-1 w-[500px]" onMouseLeave={() => setActiveMenu(null)}>
                {activeMenu && (
                  <div className="flex">
                    <div className="w-1/2 border-r border-gray-700">
                      {menuItems.map((menu, index) => (
                        <div className='text-white h-[40%] pt-5 pl-6 bg-[#141414]' key={index} onMouseEnter={() => setActiveMenu(menu.items)}>
                          {menu.title}
                        </div>
                      ))}
                    </div>
                    <div className="w-1/2 bg-[#1d1d1d] text-white">
                      <ul>
                        {activeMenu.map((item, index) => (
                          <li key={index} className="p-2 hover:bg-gray-800 flex gap-2 items-center"
                              onMouseEnter={() => setHoveredItem(item.name)}
                              onMouseLeave={() => setHoveredItem(null)}>
                            <Image
                              src={icons[item.name]?.[hoveredItem === item.name ? 'hover' : 'normal'] || dollar}
                              alt={item.name}
                              width={30}
                              height={30}
                              className="mr-2"
                            />
                            <NavigationMenuLink href={item.href}>
                              {item.name}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            </NavigationMenuItem>
            <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Learn
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            <NavigationMenuItem>
                    <Link href="/docs" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                            Support
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    );
};

export default NavbarDropDown;
