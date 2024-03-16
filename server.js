// const express =require("express")
import express from "express"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js'
import cors from 'cors';
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'
import path from'path';
import {fileURLToPath} from 'url';
//configure env
dotenv.config();

//database config
connectDB();
const app=express(); 

//esmodule fix
const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

//midddlewares
app.use(cors())
app.use(express.json())
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname,"./client/build")))

//routes 
app.use('/api/v1/auth',authRoutes)
app.use('/api/v1/category',categoryRoutes)
app.use('/api/v1/product',productRoutes)
app.use("*",function(req,res){
    res.sendFile(path.join(__dirname,'./client/build/index.html'));
}) 
//rest api
app.get("/",(req,res)=>{
    res.send("welcome to app");
})
const PORT=process.env.PORT || 6000
app.listen(PORT,()=>{
    console.log(`sever running on ${process.env.DEV_MODE} mode port ${PORT}`)
});
