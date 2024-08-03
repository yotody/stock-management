import React,{useState} from 'react';
import { FaPen, FaPlus, FaRegSave, FaTrash } from 'react-icons/fa';
import SideBar from '../SideBarLayOut';
import Axios from 'axios'


export default function Order(){

    const [orderdata, setOrderData]= useState({
        date:"",
        product:"",
        due:"",
        paid:"",
        sub:"",
        total:"",
        totalsum:"",
        quantity:"",
        unitprice:"",
        vat:"",
        tot:"",
        type:"",
        status:"",
    })

    const [productdata, setProductdata]=useState([])
    //Axios Code Which Display In Product Page
    Axios.get('http://localhost:3002/productdata').
    then((response)=>{
        setProductdata(response.data)
    })

    const [addrows, setAddRow]= useState(1)
       


    function handelChange(event){
        setOrderData(prev=>{
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
        <div className='orders'>
             <div className="order-bar">
                <h5>Add Orders</h5>
            </div>
            <div className="orderform">
                <form onSubmit={handelSubmit}> 
                    <div className="orderdate">
                        <label htmlFor='orderdate'>OrderDate: </label>
                        <input type="date" className='form-control' placeholder="Ordered Date" onChange={handelChange} name="date" value={orderdata.date}/>
                    </div>
                    
                        <div className="orderproductinfo">
                            <ul>
                                <li>Product/s</li>
                                <li>Unity price</li>
                                <li>Quantity</li>
                                <li>Total</li>
                            </ul>
                        </div>
                        <div style={{marginLeft:"20px",marginBottom:"10px"}}>
                             <button className='btn btn-primary btn-sm' onClick={()=>setAddRow(addrows + 1)}> {<FaPlus/>}  Add row</button>
                        </div>
                        <div className="fillproduct">
                            {[...Array(addrows)].map((elementInArray, Index) => {
                                return(
                                    <ul>
                                    <li>
                                        {<select 
                                        className='form-control' 
                                        style={{marginLeft:"-20px", width:"250px"}}
                                        id="product"
                                        value={orderdata.product}
                                        name="product"
                                        onChange={handelChange}>
                                            <option>----Select Product----</option>
                                            {productdata.map((items,index)=>( 
                                                <option 
                                                key = {index}
                                                value={items.Product_name}
                                                >
                                                    {items.Product_name}
                                                </option>
                                                )
                                              )
                                            }
                                        </select>  }
                                    </li>
                                    <li><input type={"text"} className="form-control"  onChange={handelChange} name='unitprice'  value={orderdata.unitprice}/></li>
                                    <li><input type="number" className='form-control'  onChange={handelChange} name='quantity'  value={orderdata.quantity}/></li>
                                    <div className="Totalplusdelete" style={{display:"flex", alignItems:"baseline"}}>
                                        <li><input type="text" className='form-control'  onChange={handelChange} name='totalsum'  value={orderdata.totalsum}/></li>
                                        <div className="deleteorderbox">
                                            <button className='deleteorder' type='button' onClick={()=>setAddRow(addrows-1)}>{<FaTrash/>}</button>
                                        </div>
    
                                    </div>  
                                </ul> 
                                );
                            })}
                           
                    </div>
                    <hr/>
               

            <div className="additonalinfo" style={{display:"flex", justifyContent:"space-between"}}>
                <div className="row" style={{margin:"0px 30px", display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center", width:"500px"}}>
                        <label htmlFor='sub' style={{width:"150px"}}> Sub Amount</label>
                        <input type={"text"} placeholder="Sub Amount" className="form-control" id='sub'  onChange={handelChange}  name='sub' value={orderdata.sub}/>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='vat' style={{width:"150px"}}> Vat 15%</label>
                        <input type={"text"} placeholder="Vat"  className="form-control" id='vat'  onChange={handelChange}  name='vat'  value={orderdata.vat}/>
                    </div>
                    <br/>
                     <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='tot' style={{width:"150px"}}> Tot 2%</label>
                        <input type={"text"} placeholder="Tot"  className="form-control" id='tot'  onChange={handelChange}  name='tot'  value={orderdata.tot}/>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                         <label htmlFor='total' style={{width:"150px"}}> Total Amount</label>
                         <input type={"text"} placeholder="TotalAmount"  className="form-control" id='total'  onChange={handelChange}  name='total'  value={orderdata.total}/>
                    </div>
                        
                    
                </div>
                <div className="row" style={{marginRight:"30px", display:"flex",flexDirection:"column"}}>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='paid' style={{width:"200px"}}> Paid Amount</label>
                        <input type={"text"} placeholder="Paid Amount"  className="form-control" id='paid'  onChange={handelChange}  name='paid'  value={orderdata.paid}/>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='due' style={{width:"200px"}}> Due Amount</label>
                        <input type={"text"} placeholder="Due Amount"  className="form-control" id='due'  onChange={handelChange} name='due'  value={orderdata.due}/>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='type' style={{width:"200px"}}> Payment Type</label>
                        <select 
                            id="type"
                            value={orderdata.type}
                            onChange={handelChange}
                            name="type"
                            className="form-control">
                            <option value="">---Payment type---</option>
                            <option value="Fullpayment">In Cash</option>
                            <option value="Advance">Credit Card</option>
                            <option value="No Payment">Debit Card</option>
                        </select>
                    </div>
                    <br/>
                    <div style={{display:"flex", justifyContent:"space-around", alignItems:"center"}}>
                        <label htmlFor='status' style={{width:"200px"}}> Payment Status</label>
                        <select 
                            id="status"
                            value={orderdata.status}
                            onChange={handelChange}
                            name="status"
                            className="form-control">
                            <option value="">---Payment status---</option>
                            <option value="Fullpayment">Fullpayment</option>
                            <option value="Advance">AdvancePayment</option>
                            <option value="No Payment">NoPayment</option>
                        </select>
                    </div>
                </div>
            </div>
            <br/>

            <button className='btn btn-success btn-m m-1'> {<FaRegSave/>}  Save Changes</button>
            <button className='btn btn-info btn-m m-1' > {<FaPen/>}  Reset</button>
        </form>
    </div>
</div>
</div>
    )
}