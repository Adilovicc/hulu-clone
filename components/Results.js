import React from 'react'
import MainItem from '../components/MainItem'
import Image from 'next/image'
import { Result } from 'postcss'
import { HandThumbUpIcon } from '@heroicons/react/24/outline'
import FlipMove from 'react-flip-move'

const csllog = (req) => {
   console.log(req)
}

function Results({request}) {
    
    return (
     <FlipMove className=" lg:px-5 md:px-3 sm:px-1 5xl:flex flex-wrap 5xl:justify-center sm:grid md:grid-cols-2 lg:grid-cols-3">
       {request.map((res)=>(
        <div key={res.id} className="group cursor-pointer p-3 transition duration-300 ease-in lg:hover:scale-[1.05] md:hover:scale-[1.05] hover:z-50">
            {console.log(res.id)}
          <Image src={`http://image.tmdb.org/t/p/w500${(res.backdrop_path || res.poster_path) || res.poster_path}`} alt="" width={640} height={480} onClick={()=>csllog(res)}/>
          <div className="p-2">
            <h2 className="text-2xl text-white transition-all duration-300 ease-in-out group-hover:font-bold">{res.title || res.original_name}</h2>
            <p className='truncate max-w-md'>{res.overview}</p>
            
            <div className='flex opacity-0 items-center space-x-1 transition-all group-hover:opacity-100 transform duration-300'>
                <div>{res.media_type && `${res.media_type} • `}{res.release_date || res.first_air_date}{" • "}</div>
                
                <div><HandThumbUpIcon className="h-5"/></div> 
                <div>{res.vote_count}</div>
            </div>
            
          </div> 
        </div>
       ))}
    </FlipMove>
    )
}

export default Results