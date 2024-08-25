const router=require("express").Router();
const blogs=require("../models/blogs")


//POST
router.post("/post",async(req,res)=>{
    try {
        const {title,desc} =req.body;
        const newPost=new blogs({title,desc});
        await newPost.save().then(()=>res.status(200).json({message:"Data saved successfully"}));
    } catch (error) {
        res.status(400).json({message:"spme error has occcured"});
    }
})

//GET
router.get("/getAll",async(req,res)=>{
    try {
       const data=await blogs.find().sort({createdAt: -1});
       res.status(200).json({data:data});
    } catch (error) {
        res.status(400).json({message:"some error has occcured"});
    }
})


//Get Recent Blogs
router.get("/getRecentBlogs",async(req,res)=>{
    try {
       const data=await blogs.find().sort({createdAt: -1}).limit(3);
       res.status(200).json({data:data});
    } catch (error) {
        res.status(400).json({message:"some error has occcured"});
    }
})


//Gt Blog by ID
router.get("/getBlog/:id",async(req,res)=>{
    try {
       const { id }= req.params;
       const data=await blogs.findById(id);
       res.status(200).json({data:data});

    } catch (error) {
        res.status(400).json({message:"some error has occcured"});
    }
});

//Update by ID
router.put("/updateBlog/:id",async(req,res)=>{
    try {
       const { id }= req.params;
       const {title,desc} =req.body;
       await blogs.findByIdAndUpdate(id,{title,desc});
       res.status(200).json({message:"data updated successfully"});

    } catch (error) {
        res.status(400).json({message:"some error has occcured"});
    }
});





module.exports=router;