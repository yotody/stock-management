const express = require('express')
const mysql = require('mysql')
const cors = require('cors');
const { result } = require('lodash');

const app = express();

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user:'root',
    host:'localhost',
    password:'',
    database:'stockdb'
})



app.post("/pro", (req,res)=>{
    const productName = req.body.name
    const productCatagory = req.body.catagory
    const productQuantity = req.body.quantity
    const vatOrTot = req.body.vatortot
    const productMeasurmentType = req.body.measurment 
    const productPrice = req.body.price 
    const productExpireDate = req.body.expire

    db.query(
        `INSERT INTO product (Product_name,Product_catagory, Product_quantity, vat_or_tot, Product_measurment_type, Product_price_before_vat_or_tot, Product_expire_date ) VALUES(?,?,?,?,?,?,?)`,
        [productName, productCatagory, productQuantity, vatOrTot, productMeasurmentType, productPrice, productExpireDate],
            (err, result)=>{
                if(err){
                    console.log(err)
                }else{
                    console.log("Product is inserted to database")
                    app.get('/pro',(req,res)=>{
                        res.send("true")
                    })
            
            }
        }
        )

})

app.get('/productdata',(req, res)=>{
    db.query(
        'SELECT * FROM product',(err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})

app.post('/addadmin',(req, res)=>{
    const firstname = req.body.firstname
    const lastname =req.body.lastname
    const username = req.body.username
    const password = req.body.password
    const usertype =req.body.usertype

    db.query(
        'INSERT INTO user(firstname, lastname, username, password, usertype)VALUES(?,?,?,?,?)', 
        [firstname, lastname, username, password,usertype], 
        (err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Admin information inserted to database successfully!!!")
            }
        }
    )
})

app.get('/admindata',(req, res)=>{
    db.query(
        'SELECT * FROM user',(err, result)=>{
            if(err){
                console.log(err)
            }else{
                res.send(result)
            }
        }
    )
})


app.post('/delete',(req,res)=>{

    const pid = req.body.pid
    db.query(
        `DELETE FROM product where id = ${pid} `,(err, result)=>{
            if(err){
                console.log(err)
            }else{
                console.log("Product Deleted!!!")
            }
        }
    )
})
app.listen(3002, ()=>{
    console.log("Listen to port 3002")
})