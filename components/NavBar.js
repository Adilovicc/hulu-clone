import React, {useState, useEffect} from 'react'
import requests from '../utils/requests'
import useScreenWidth from '../hooks/useScreenWidth'
import {ArrowLeftCircleIcon,ArrowRightCircleIcon,ArrowLeftIcon, ArrowRightIcon,
ChevronDoubleLeftIcon, ChevronDoubleRightIcon} from '@heroicons/react/24/solid'
import {useRouter} from 'next/router'

function NavBar() {
  const router = useRouter();
  const scrWidth= useScreenWidth();
  const [colNum,setColNum] = useState(1);
  useEffect(()=>{
       setColNum(Math.floor(parseInt(scrWidth)/160));
       console.log(colNum);
  },[scrWidth])

  const nazivi= Object.entries(requests);
  const [visibleNavItems, setVisibleNavItems] = useState([]);
  const [firstItemPointer, setFirstItemPointer] = useState(0);
  const [lastItemPointer, setLastItemPointer] = useState(0);
  
  
  useEffect(()=>{
    setVisibleNavItems([]);
    for(let i=0; i<nazivi.length; i++){
        let itemIndex=(firstItemPointer+i)%nazivi.length;
        if(i<colNum){
        setVisibleNavItems(visibleNavItems=>[...visibleNavItems, nazivi[itemIndex]]);
        }
    }
    
  },[colNum,firstItemPointer])

  const ScrollLeft = () => {
     if(firstItemPointer===(nazivi.length-1)){
        setFirstItemPointer(0);
     }
     else{
        setFirstItemPointer(firstItemPointer+1);
     }
  }
  
  const ScrollRight = () => {
    if(firstItemPointer===0){
        setFirstItemPointer(nazivi.length-1)
    }
    else{
        setFirstItemPointer(firstItemPointer-1);
    }

  }
  return (
    /*<div className="">
    <div className="flex mt-5 bg-black text-2xl whitespace-nowrap 
    overflow-x-scroll scrollbar-hide space-x-10 sm:space-x-20">
        <div className="flex space-x-10 justify-evenly items-center  w-full">
        {Object.entries(requests).map(([key, {title, url},i]) => (
               <div className="hover:text-white cursor-pointer transition 
               duration-100 transform hover:scale-125 active:text-red-600" key={key}>{title}</div>
        ))}
        <div className="bg-white w-[160px] h-full text-gray-800">{}</div>
        </div>
    </div>
    </div>/*/
    <div>
        <div className={`grid grid-flow-col group relative h-10 items-center mt-10 pl-10 pr-10`}>
            {
                visibleNavItems?.map(([key,{title,url}])=>(
                   
                    <div key={key} className="flex justify-center text-lg md:text-xl lg:text-2xl">
                        <div className="cursor-pointer hover:scale-125" onClick={()=>{router.push(`/?genre=${key}`)}}>
                          {title}
                        </div>
                    </div>
                   ))
            }
            <div className="absolute left-12 md:left-16 lg:left-14 h-full w-16 bg-gradient-to-r from-[#06202A]"></div>
            <div className="absolute right-12 md:right-16 lg:right-14 h-full w-16 bg-gradient-to-l from-[#06202A]"></div>
            <ChevronDoubleLeftIcon onClick={()=>ScrollLeft()} className="absolute hidden group-hover:inline transition duration-300 hover:scale-125 left-[0.5] h-[30px] text-sky-600"/>
            <ChevronDoubleRightIcon onClick={()=>ScrollRight()} className="absolute hidden group-hover:inline transition duration-300 hover:scale-125 right-0 h-[30px] text-sky-600"/>

        </div>
    </div>

  )
}

export default NavBar