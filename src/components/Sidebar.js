import { useState } from 'react';

const Sidebar = () => {

    const [open, setOpen] = useState(false)
    
    const MenuList =[
      {title:"Dashboard", src:"Chart_fill"},
      {title:"Inbox", src:"Chat" },
      {title:"Accounts", src:"User",gap:true},
      {title:"Schedule", src:"Calendar"},
      {title:"Search", src:"Search"},
      {title:"Analytics", src:"Chart"},
      {title:"Files", src:"Folder", gap:true},
      {title:"Setting", src:"Setting"},
    
    ]

    return (
        <div className="flex">   
            
            {/* // SIDE BAR START HERE */}
            <div className={`${open ? "w-79" : "w-20"} 
                duration-300 h-screen bg-dark-purple relative
                p-5 pt-8`}>
                <img
                
                    src= {require ('../../src/assets/control.png')} alt="control_img"
                    className={` absolute cursor-pointer -right-3 top-9 w-7 border-dar-purple ${!open && "rotate-180"}`} 
                    onClick={()=> setOpen(!open)}
                />

                {/* LOGO IMAGE */}
                <div className=' flex gap-x-4 items-center'>
                    <img src={ require ("../../src/assets/logo.png")} alt="logo" 
                    className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}/>

                    <h1 className={`text-white origin-left font-medium text-xl duration-300 ${!open && 'scale-0'}`}>
                        Designer
                    </h1>
                </div>


            {/* MENU LIST */}
                <ul className=' pt-6 '>
                    {
                        MenuList.map
                        (
                            (menu,index) =>(
                                <li key={index} 
                                    className=
                                    {`
                                        text-gray-300 text-sm flex 
                                        items-center gap-x-4 
                                        cursor-pointer p-2 hover:bg-blue-900 
                                        hover:opacity-100 rounded-md
                                        ${menu.gap ? "mt-9" : "mt-2"} 
                                        ${index ===0 && 'bg-light-white'}
                                    `}
                                >

                                <img src={require (`../../src/assets/${menu.src}.png`)} alt="" />           
                                <span className={` ${!open && 'hidden'} origin-left duration-200`}>{menu.title}</span>
                                </li> 
                            )
                        )
                    }
                    </ul>
            </div>  
            {/* END SIDEBAR */}

    
            
            {/* RIGHT SIDE */}
            <div className="p-7 text-2xl font-semibold flex-1 h-screen">
                <h1> Home Page</h1>
            </div>
            
        </div>
  )
}

export default Sidebar