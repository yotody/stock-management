import React, { useState } from 'react';
import {FaCartPlus, FaClipboardList, FaProductHunt, FaStore, FaPlus, FaMinus} from "react-icons/fa";
import {Link} from  "react-router-dom";
import SideBar from '../SideBarLayOut';

export default function Home(){

    const dashboard=[
        {
            id:1,
            name:"Products",
            number:5,
            icon:<FaProductHunt/>,
            color:"blue",
            link:"/product"
        }, 
        {
            id:2,
            name:"Order",
            icon:<FaCartPlus/>,
            color:"yellow",
            link:"/order"
        },
        {
            id:3,
            name:"Report",
            icon:<FaClipboardList/>,
            color:"brown",
            link:"/report"
        },
        {
            id:4,
            name:"Add Subadmin",
            number:2,
            icon:<FaPlus/>,
            color:"skyblue",
            link:"/addsubadmin"
        },
        {
            id:5,
            name:"Stores",
            number:1,
            icon:<FaStore/>,
            color:"green",
            link:"/stores"
        },
        {
            id:5,
            name:"Low product",
            number:0,
            icon:<FaMinus/>,
            color:"Red",
        }
    
    
    ]    



    return(
        <div className="ForAllFlex">
            <SideBar/>
        <div className="dashboard">
            <h2>Welcome To Stock Management System</h2>
            <div className="catalogues">
                {dashboard.map(c=>(
                    <Link to= {`${c.link}`} style={{textDecoration:"none", color:"black"}} >
                    <div className='catalogue'>
                        <div className="catalogue-icon" style={{backgroundColor:`${c.color}`}}>
                            <div className='Icon'>{c.icon}</div>
                        </div>
                        <div className="catalogue-info">
                            <div className='catalogue-name'>{c.name}</div>
                            <div className="catalogue-amount">{c.number}</div>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
        </div>
    </div>
    )
}