import React, { Component } from 'react';
import { useState  } from 'react';
import {Link, useNavigate} from 'react-router-dom';


export default function Login(){
    const [formdata, setFormData]= useState({
        username:"",
        password:""
    })

    const navigate=useNavigate();


    function handelFormdata(event){
        setFormData(prev=>{
            return{
                ...prev, 
                [event.target.name]:event.target.value
            }
        })
    }
    function handelSubmit(event){
        event.preventDefault()
        navigate('/dashboard')
        
    }

    return (
        <div className='login--form'>
            <div className='login-title'>
                <h5>Login</h5>
                <hr/>
            </div>
            <form onSubmit={handelSubmit}>
                <label htmlFor='user'>UserName</label>
                <input type="text" placeholder="Enter UserName" className='form-control' name='username' id='user' value={formdata.name}  onChange={handelFormdata}/>
                <label htmlFor='pass'>Password</label>
                <input type="password" placeholder="Enter Password" className='form-control' name='password' id='pass' value={formdata.password} onChange={handelFormdata}/>
                <button className='btn btn-success btn-m m-2'>Login</button>
                <div>
                <Link className="register--link" to="/register">
                    <small>Create a new Account</small>
                </Link>
                </div>
                <Link to="/changepassword">
                    <small>Forgot password ?</small>
                </Link>
            </form>
        </div> 
    )
}