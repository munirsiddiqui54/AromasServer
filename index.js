import express from "express";
// OR const express =require('express')
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js';
import cors from 'cors';


//Config env file from root
dotenv.config();
const PORT = process.env.PORT;

//connect and config Database
connectDB();


//rest object
const app = express();

//middlewares
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

//routes 
app.use("/api/v1/auth", authRoutes);

app.get('/', (req, res) => {
    res.send("Server Running...")
})

//index file --> Routes (middlewares) --> Controllers--> Models and Helpers

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`.bgGreen.black)
})