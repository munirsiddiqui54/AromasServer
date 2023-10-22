import express from "express";
// OR const express =require('express')
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js';


//Config env file from root
dotenv.config();
const PORT = process.env.PORT;

connectDB();


//rest object
const app = express();

//middlewares
app.use(express.json());
app.use(morgan("dev"));

//routes 
app.use("/api/v1/auth", authRoutes);

//index file --> Routes (middlewares) --> Controllers--> Models and Helpers

//rest APIS
app.get("/hello", (req, resp) => {
    resp.send("<h1>Hello World</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`.bgGreen.black)
})