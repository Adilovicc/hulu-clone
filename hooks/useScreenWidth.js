import React, {useState,useEffect} from 'react'

function useScreenWidth() {
  const [windowWidth,setWindowWidth] = useState(undefined);
  useEffect(()=>{
    const HandleResize = () =>{
       setWindowWidth(window.innerWidth);  
    }
    window.addEventListener("resize",HandleResize);
    HandleResize();
    return () => window.removeEventListener("resize", HandleResize);
  },[]);
  return windowWidth;
}

export default useScreenWidth