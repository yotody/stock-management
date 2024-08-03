import React from 'react';
import { Button } from 'react-bootstrap';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { FaTools } from 'react-icons/fa';
import SideBar from '../SideBarLayOut';



export default function Profile(){
    return(
        <div className="ForAllFlex">
            <SideBar/>
        <div className="profile">
              <div className="profilebar">
                    <h5>{<FaTools/>} Setting</h5>
                </div>

                <h5 style={{padding:"10px 10px 0px 10px"}}>Change Username</h5>
                <hr/>
                <form >
                    <div className="changeusername" style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:"20px"}}>
                        <label htmlFor="changeusername"  style={{width:"150px"}}>UserName: </label>
                        <input type="text" placeholder='Username' name="username" value={""} className="form-control" id='changeusername'/>
                    </div>
                    <Button variant="success">{<BsFillCheckCircleFill/>} Save Change</Button>
                </form>
                <h5 style={{padding:"50px 10px 0px 10px"}}>Change Password</h5>
                <hr/>
                <form>
                    <div className="changepassword" style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:"20px"}}>
                        <label htmlFor="changepassword" style={{width:"200px"}}>Current Password: </label>
                        <input type="password" placeholder='Current password' name="current" className="form-control" id='changepassword'/>
                    </div>
                    <div className="changepassword" style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:"20px"}}>
                        <label htmlFor="new" style={{width:"200px"}}>New Password: </label>
                        <input type="password" placeholder='New password' name="new" className="form-control" id='new'/>
                    </div>
                    <div className="changepassword" style={{display:"flex", alignItems:"baseline", justifyContent:"space-between", marginBottom:"20px"}}>
                        <label htmlFor="confirm"  style={{width:"200px"}}>Confirm Password: </label>
                        <input type="password" placeholder='Confirm password' name="confirm" className="form-control" id='confirm'/>
                    </div>
                  <Button variant="success">{<BsFillCheckCircleFill/>} Save Change</Button>
                </form>
                
        </div>
        </div>
    )
}