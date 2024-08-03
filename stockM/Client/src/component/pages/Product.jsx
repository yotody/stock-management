import React, { useState } from 'react';
import Products from '../controller/products';
import Axios from 'axios'
import {Modal, Button} from "react-bootstrap";



export default function Product(){
    

   // useState to accept data from Add product Form
   const [addproduct, setAddProduct] = useState({
    name:'',
    catagory:'',
    quantity:'',
    vatORtot:'',
    measurment:'',
    price:'',
    expire:'',
})
console.log(addproduct)
const [successMessage, setSuccessMessage]=useState("")

const [productlist, setProductlist]=useState([])
//Axios Code Which Display In Product Page
Axios.get('http://localhost:3002/productdata').
then((response)=>{
    setProductlist(response.data)
})
 //handler which add product to the database
 const handelAddProduct = ()=>{
    if(Axios.post('http://localhost:3002/pro',{
    name:addproduct.name, 
    catagory:addproduct.catagory,
    quantity:addproduct.quantity,
    vatortot:addproduct.vatORtot,
    measurment:addproduct.measurment,
    price:addproduct.price,
    expire:addproduct.expire
    })){
    Axios.get('http://localhost:3002/pro').
    then((response)=>{
            setSuccessMessage(response.data)
    })
    }
}

//handel change and save to addproduct variabel which is constant
function handelChange(event){
    setAddProduct(prev=>{
        return {
            ...prev, 
            [event.target.name]: event.target.value
        }
    })
}

//handel Delete of the product
function handelDelete(productid){
   Axios.post('http://localhost:3002/delete',{
    pid: productid
   })

}

//handelSubmit
function handelSubmit(event){
    event.PreventDefault()
}

//MODAL CONTROLLE FOR EDIT PRODUCT
const [showEdit, setShowEdit] = useState(false);
const handleCloseEdit = () => setShowEdit(false);
const handelShowEdit = (productid) => {
    setShowEdit(true);
    
    }
   
    
    return(
        <div>
            <Products
            
            productlist={productlist}
            handelAddProduct={handelAddProduct}
            handelChange = {handelChange}
            handelSubmit= {handelSubmit}
            handelDelete = {handelDelete}
            successMessage = {successMessage}
            handelShowEdit = {handelShowEdit}
            handleCloseEdit = {handleCloseEdit}
            showEdit = {showEdit}
        />


                 <Modal show={showEdit} size="x" onHide={handleCloseEdit}>
                 <Modal.Header closeButton>
                     <Modal.Title>Edit Product Information</Modal.Title>
                 </Modal.Header>
         <form>
             <Modal.Body>
                 <h5>Product Id</h5>
                 <div className="name">
                     <label htmlFor="name">Product Name</label>
                     <input type={"text"} placeholder="" name="name" className='form-control'/>
                 </div>
               <div className="catagory">
                 <label htmlFor="catagory">Catagory</label>
                 <input type={"text"} placeholder="" name="catagory" className='form-control'/>
               </div>
               <div className="quantity">
                 <label htmlFor="quantity">Quantity</label>
                 <input type={"number"} placeholder="" name="quantity" className='form-control'/>
               </div> 
             </Modal.Body>

             <Modal.Footer>
                 <Button variant="danger" onClick={handleCloseEdit}>
                     Close
                 </Button>
                 <Button variant="success" onClick={handleCloseEdit}>
                     Save Changes
                 </Button>
             </Modal.Footer>
         </form>
             </Modal>
               

        </div>
        
    )
}