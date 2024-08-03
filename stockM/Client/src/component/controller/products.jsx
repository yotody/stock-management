import React, { Component, useState } from 'react';
import SideBar from '../SideBarLayOut';
import { FaPlus } from 'react-icons/fa';
import {Modal, Button} from "react-bootstrap";
import { BsFillCheckCircleFill } from 'react-icons/bs';



export default function Products(props){
  
      //MODAL CONTROLLER FOR ADD PRODUCT 
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    

    return(
        <div className="ForAllFlex">
        <SideBar/>
    <div className='product'>
        <div className="product-bar">
            <h5>Manage Product</h5>
                {show}
        </div>
        <div className="addproduct">
                 <Button variant="primary" onClick={handleShow}>
                    {<FaPlus/>} Add Product
                </Button>           

                <Modal show={show} size="x" onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add Product</Modal.Title>
                    </Modal.Header>
                    <form onSubmit={props.handelSubmit}>
                    <Modal.Body>
                        {props.successMessage === true ?
                                        <div className="alert alert-success">
                                            <h5>Stock Upload Successfully</h5>
                                        </div>:""}

                        
                        <div className="productname">
                            <label htmlFor="name">Product Name</label>
                            <input type="text" name='name' id='name' placeholder='Enter Product Name' className='form-control' onChange={props.handelChange}  />
                        </div>
                        <div className="catagory">
                            <label htmlFor="catagory">Product Catagory</label>
                            <input type="text" name='catagory' placeholder='Enter Catagory Of the Product' id=' catagory' className='form-control' onChange={props.handelChange} />
                        </div>
                        <div className="quantity">
                            <label htmlFor="quantity">Product Quantity</label>
                            <input type="number" name='quantity' id='quantity' placeholder='Enter quantity' className='form-control' onChange={props.handelChange} />
                        </div>
                        <div className="vatortot">
                            <label htmlFor="vatORtot" >Vat or Tot</label>
                            <select name="vatORtot" id="vatORtot" className='form-control' onChange={props.handelChange}>
                                <option value="">---Select Vat Or Tot</option>
                                <option value="Vat">Vat</option>
                                <option value="Tot">Tot</option>
                            </select>
                        </div>
                        <div className="unitmeasurement">
                            <label htmlFor="unit">Measurment</label>
                            <select name="measurment" id="unit" className='form-control' onChange={props.handelChange}>
                                <option value="">--Select Measurement Type--</option>
                                <option value="Piece">In Piece</option>
                                <option value="kg">In Kilogram</option>
                                <option value="liter">In Liter</option>
                            </select>
                        </div>
                        <div className="rate">
                            <label htmlFor="rate">Price</label>
                            <input type="number" name='price' id='price' placeholder='Enter Price Before Vat Or Tot' className='form-control' onChange={props.handelChange} />
                        </div>
                        <div className="expire">
                            <label htmlFor="expire">Expiered Date</label>
                            <input type="date" name='expire' id='expire' placeholder='Enter Expire Date' className='form-control' onChange={props.handelChange}/>
                        </div>

                    </Modal.Body>
                        <Modal.Footer>
                            <Button variant="success" onClick={props.handelAddProduct}>
                            {<BsFillCheckCircleFill/>} Save Changes
                            </Button>
                            <Button variant="danger" onClick={handleClose}>
                            Close
                            </Button>
                        </Modal.Footer>
                    </form>
                </Modal>
        </div>
        <div className="searchproduct">
            <label htmlFor='search' style={{marginRight:"10px"}}>Search:</label>
            <input type={"text"} className="form-control" placeholder="Search Product" name="search" id='search'/>
        </div>
        <table className='product-tabel'>
                    <tr>
                        <th >product Id</th>
                        <th>product Name</th>
                        <th>Catagory</th>
                        <th>Quantity</th>
                        <th>status</th>
                        <th>Option</th>
                    </tr>
                    {props.productlist.map((item, key)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.Product_name}</td>
                        <td>{item.Product_catagory}</td>
                        <td>{item.Product_quantity}</td>
                        <td ><h5 style={{background:item.Product_quantity > 0 ?"#28a745":"#d9534f", color:"white", fontSize:"15px", borderRadius:"9px"}}>{item.Product_quantity > 0 ? "Availabel":"Not Availabel"}</h5></td>
                        <td>
                           <Button variant="outline-success" style={{width:"55px"}} onClick={()=>props.handelShowEdit(item.id)}>Edit</Button>
                           <button className='btn btn-outline-danger btn-sm m-2' onClick={()=>props.handelDelete(item.id)}>Delete</button>

                        </td>
                    </tr>
                    ))}
        </table>
                    
                    

    </div>
</div>
            
    )
}