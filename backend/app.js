const express=require("express");
const app=express();
const cors=require("cors");
const blogs=require("./routes/blogs")
require("dotenv").config();
require("./conn/connection")

app.use(cors());
app.use(express.json({ limit: '50mb' }));


app.use("/api/v1",blogs);

app.get("/",(req,res)=>{
    res.send("HEllo");
})


app.listen(process.env.PORT,()=>{
    console.log(`running at : ${process.env.PORT}`);
})
