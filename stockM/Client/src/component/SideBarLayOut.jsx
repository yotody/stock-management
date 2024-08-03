import React, {useState } from 'react';
import { ProSidebar, SidebarContent, SidebarHeader, SidebarFooter, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { FaClipboardList,FaProductHunt, FaCartPlus, FaTools, FaStore, FaPlus, FaList} from 'react-icons/fa';
import {SiApacheairflow} from 'react-icons/si';
import {GiAbstract050} from 'react-icons/gi';
import {BsPerson} from 'react-icons/bs'
import {FiArrowRightCircle, FiArrowLeftCircle, FiLogOut,} from 'react-icons/fi';
import "react-pro-sidebar/dist/css/styles.css"
import {Link} from 'react-router-dom';

export default function SideBar(){


        const [menuCollapse, setMenuCollapse]=useState(false);
        
        const menuIconClick = ()=>{
            setMenuCollapse(prev=>!prev)
        }

            const viewHeight = window.outerHeight;

    return (
             <div className="sidebar">
                <ProSidebar collapsed={menuCollapse} style={{height:viewHeight}}>
                <SidebarHeader>
                    <div style={{display:"flex", alignItems:"center", justifyContent:"space-between"}}>
                        <div className="logoText" style={{fontSize:"20px"}}>
                            <p>{menuCollapse ? <GiAbstract050/>:<SiApacheairflow/>}</p>
                        </div>

                        <div className="closemenu" onClick={menuIconClick}>
                            {menuCollapse ? (<FiArrowRightCircle/>):(<FiArrowLeftCircle/>)}
                        </div>
                    </div>
                </SidebarHeader>
                <SidebarContent>
                    <Menu iconShape='square'>
                        <MenuItem icon={<FaList/> } className="toogle">Dashboard <Link to="/dashboard" /></MenuItem><hr/>
                        <MenuItem icon={<FaProductHunt/>}  className="toogle">Product<Link to ="/product"/></MenuItem><hr/>
                        <MenuItem icon ={<FaCartPlus/>}  className="toogle">OrderItems<Link to ="/order"/></MenuItem><hr/>
                        <MenuItem icon={<FaClipboardList/>}  className="toogle">Report<Link to ="/report"/></MenuItem><hr/>
                        <MenuItem icon={<FaPlus/>}  className="toogle">Add SubAdmin<Link to ="/addsubadmin"/></MenuItem><hr/>
                        <MenuItem icon={<FaStore/>}  className="toogle">Stores <Link to="/stores"/></MenuItem><hr/>
                        <SubMenu title={"Profile"} icon={<BsPerson/>}  className="toogle">
                        <MenuItem icon={<FaTools />}  className="toogle">Setting<Link to ="/setting"/></MenuItem>
                        <MenuItem icon={<FiLogOut/>}  className="toogle">LogOut<Link to="/login"/></MenuItem>
                    </SubMenu><hr/>
                    </Menu>
                </SidebarContent>
                <SidebarFooter>

                </SidebarFooter>
            </ProSidebar>

         </div>
    
    )
}