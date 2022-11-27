import react from 'react'



function HeaderItem({Icon, Title}) {
  return (
    <div className="group px-7 w-12 flex flex-col items-center hover:text-white">
        <Icon className="h-8 mb-1 group-hover:animate-bounce"/>
        <p className="opacity-0 tracking-widest group-hover:opacity-100">{Title}</p>
    </div>
  )
}

export default HeaderItem