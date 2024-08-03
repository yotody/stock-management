import React, { useState } from 'react';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import SideBar from '../SideBarLayOut';


export default function Report(){

    const [reportdata, setReportData]= useState({
        Sdate:"",
        Edate:"",
    })


    function handelChange(event){
        setReportData(prev=>{
            return{
                ...prev, 
                [event.target.name]:event.target.value
            }
        })
    }
    function handelSubmit(event){
        event.preventDefault()
        console.log(event.target.data)
    }





    return(
        <div className="ForAllFlex">
            <SideBar/>
        <div className="reports">
                <div className="reportbar">
                    <h5>Stock Report</h5>
                </div>

                <form onSubmit={handelSubmit}> 
                    <div className="startdate">
                        <label htmlFor='orderdate'>Start Date: </label>
                        <input type="date" className='form-control' placeholder="Start Date" onChange={handelChange} name="startdate" value={reportdata.Sdate} id="startdate"/>
                    </div>
                    <div className="startdate">
                        <label htmlFor='enddate'>End Date: </label>
                        <input type="date" className='form-control' placeholder="End Date" onChange={handelChange} name="enddate" value={reportdata.Edate} id="enddate"/>
                    </div>
                    <button className='btn btn-success btn-m m-1'> {<BsFillPatchCheckFill/>}  Generate Report</button>
              </form>
        </div>
        </div>
    )
}