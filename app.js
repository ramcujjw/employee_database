const express=require ("express");
const app= new express();
const morgan=require ('morgan');
app.use(morgan('dev'));

app.use(express.static('public')); 


const employeeRoutes=require('./routes/employeeRoutes');
app.use('/basic',employeeRoutes); 

 
 require('dotenv').config();

const PORT =process.env.PORT; 
require('./db/connection');

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
})