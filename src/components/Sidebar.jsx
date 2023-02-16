import React,{useState} from 'react';
import { NavLink } from 'react-router-dom';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';

const Sidebar =({children})=>{
    const[isOpen,setIsOpen] = useState(false);
    const[isSidebarBg,setSidebarBg] = useState("");
   const toggle = () => {
        setIsOpen(!isOpen);
        setSidebarBg("red")
    };
    const menuItem=[
        {
            path:'/',
            name:"Home",
            icon:<HomeOutlinedIcon />
        },
        {
            path:'/weather',
            name:"Weather",
            icon:<CloudOutlinedIcon />
        },
        // {
        //     path:'/details',
        //     name:"Details",
        //     icon:<CheckCircleFilled />
        // },
        // {
        //     path:'/alerts',
        //     name:"Alerts",
        //     icon:<AlertFilled />
        // },
        // {
        //     path:'/stats',
        //     name:"Stats",
        //     icon:<PieChartFilled />
        // },
        // {
        //     path:'/plugins',
        //     name:"Plugins",
        //     icon:<ApiFilled />
        // },
    ]
    return(
        <div className="container">
            <div style={{width:isOpen ? "300px":'50px',backgroundColor:isOpen?'#1b1140':"linear-gradient(178.71deg, #6555A3 0.49%, rgba(27, 17, 64, 0) 99.81%)" }} className="sidebar">
                <div className="top_section">
                    
                    <div className="bars" style={{marginLeft:isOpen ? "50px":'0px'}}>
                        {isOpen?<MenuOpenIcon onClick={toggle}/>:<MenuIcon onClick={toggle}/>}
                        
                    </div>
                </div>

             

                {
                    menuItem.map((item,index)=>(
                        <NavLink to={item.path} key={index} className="link" activeclassName="active">
                            <div className="icon">
                                {item.icon}
                            </div>
                            <div style={{display:isOpen ? "block":'none'}} className="link_text">
                                {item.name}
                            </div>

                        </NavLink>
                    ))
                }
            </div>
            <main>
                {children}
            </main>
        </div>
    )
}


export default Sidebar;
