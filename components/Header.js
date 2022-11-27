import React from 'react'
import Image from 'next/image'
import { 
    HomeIcon,
    CollectionIcon,
    BoltIcon,
    SearchIcon,
    UserIcon,
    CheckBadgeIcon,
    SwatchIcon,
    MagnifyingGlassIcon, } 
from '@heroicons/react/24/outline'

import HeaderItem from '../components/HeaderItem'


function Header() {
  return (
    <header className="flex flex-col md:flex md:flex-row md:justify-between md:items-center">
        <div className="flex flex-grow justify-evenly items-center md:max-w-2xl mt-5">
           <HeaderItem Icon={HomeIcon} Title={"Home"}/>
           <HeaderItem Icon={BoltIcon} Title={"Trending"}/>
           <HeaderItem Icon={CheckBadgeIcon} Title={"Verified"}/>
           <HeaderItem Icon={SwatchIcon} Title={"Collections"}/>
           <HeaderItem Icon={MagnifyingGlassIcon} Title={"Search"}/>
           <HeaderItem Icon={UserIcon} Title={"Account"}/>
        </div>
        <div className="flex justify-center md:justify-end">
           <Image className="object-contain md:pr-7" src="https://links.papareact.com/ua6" alt="" width={200} height={100}/>
        </div>
    </header>
  )
}

export default Header