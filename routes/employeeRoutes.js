const express=require('express');
const router=express.Router();
router.use(express.json());
router.use(express.urlencoded({extended:true}));

const employeeModel=require('../model/employeeData');

router.get('/', async (req,res)=>{
    try{
        const data =await employeeModel.find();   
        res.status(200).send(data);

    }
 catch(error){
    res.status(404).send('Data not found')
 }
})

//post
router.post('/addemployee',async (req,res)=>{
    try{
        var item=req.body; 
        const data1=new employeeModel(item);
  
    const saveData= await data1.save(); 
    res.status(200).send("post successful");
    }
    catch(error){
        res.status(404).send("post unsuccessful");  

    }
})
//put operation
router.put('/edit/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data =await employeeModel.findByIdAndUpdate(id,req.body);
        res.status(200).send("Update successful"); 
    } catch (error) {
        res.status(404).send("Update unsuccessful"); 
    }
})
//delete operation
router.delete('/delete/:id',async (req,res)=>{
    try {
        const id =req.params.id;
        const data2 =await employeeModel.findByIdAndDelete(id);//the req.body contain the thing to be updated
        res.status(200).send("Delete successful"); 
    } catch (error) {
        res.status(404).send("Delete unsuccessful"); 
    }
})

module.exports=router;