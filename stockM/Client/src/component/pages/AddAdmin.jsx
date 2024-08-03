import React,{useState} from 'react';
import { FaPlus } from 'react-icons/fa';
import { BsFillCheckSquareFill } from 'react-icons/bs';
import {Modal, Button} from "react-bootstrap"
import SideBar from '../SideBarLayOut';
import Axios from 'axios';




export default function AddAdmin(){


    const [admin,setAdmin]=useState({
        firstname:"",
        lastname:"",
        username:"",
        password:"",
        usertype:""
    })

    const [admindata, setAdminData]= useState([])

    const addAdmin = ()=> {
        Axios.post('http://localhost:3002/addadmin', {
                firstname : admin.firstname,
                lastname : admin.lastname,
                username :admin.username,
                password: admin.password,
                usertype :admin.usertype
                })
        }

        Axios.get('http://localhost:3002/admindata').then((response)=>{
            setAdminData(response.data)
        })

    function handelAdminData(event){
        setAdmin(prev=>{
            return{
                ...prev,
                [event.target.name]: event.target.value
            }
        })

    }
    console.log(admin)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    return(
        <div className="ForAllFlex">
            <SideBar/>
        <div className="addadmin">
                 <div className="addadmin-bar">
                  <h5>System Users</h5>
                </div>
            <div className="addsubadmin">
                     <Button variant="primary" onClick={handleShow} className="addsubbutton">
                        {<FaPlus/>} Add SubAdmin
                    </Button>           

                    <Modal show={show} size="x" onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add SubAdmin</Modal.Title>
                        </Modal.Header>
                        <form>
                        <Modal.Body>
                            <div className="productname">
                                <label htmlFor="name">First Name</label>
                                <input type="text" name='firstname' id='name' placeholder='Enter First Name' className='form-control' onChange={handelAdminData} />
                            </div>
                            <div className="catagory">
                                <label htmlFor="catagory">Last Name</label>
                                <input type="text" name='lastname' placeholder='Enter Last Name' id=' catagory' className='form-control' onChange={handelAdminData} />
                            </div>
                            <div className="UserName">
                                <label htmlFor="username">UserName</label>
                                <input type="text" name='username' id='UserName' placeholder='Enter UserName' className='form-control' onChange={handelAdminData} />
                            </div>
                            <div className="password">
                                <label htmlFor="password">Password</label>
                                <input type="password" name='password' id='password' placeholder='Enter password' className='form-control' onChange={handelAdminData}/>
                            </div>
                            <div className="MainorSub">
                                <label htmlFor="MainorSub" ></label>
                                <select name="usertype" id="MainorSub" className='form-control' onChange={handelAdminData}>
                                    <option value="">---User Type --</option>
                                    <option value="mainadmin">Main Admin</option>
                                    <option value="subadmin">Sub Admin</option>
                                </select>
                            </div>

                        </Modal.Body>
                            <Modal.Footer>
                                <Button variant="success" onClick={addAdmin}>
                                {<BsFillCheckSquareFill/>} Save
                                </Button>
                                <Button variant="danger" onClick={handleClose}>
                                Close
                                </Button>
                            </Modal.Footer>
                        </form>
                    </Modal>
            </div>

                    <table className='product-tabel' style={{border:"grid"}}>
                                <tr>
                                    <th >Id</th>
                                    <th>UserName</th>
                                    <th>UserType</th>
                                    <th>Action</th>
                                </tr>
                                {admindata.map((data, key)=>(
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.username}</td>
                                        <td>{data.usertype}</td>
                                        <td>
                                        <Button variant="outline-success" style={{width:"55px"}}>Edit</Button>
                                        <button className='btn btn-outline-danger btn-sm m-2'>Delete</button>
                                        </td>
                                    </tr>
                                ))}
                    </table>
        </div>
        </div>
    )
}