import express from "express";
// OR const express =require('express')
import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import morgan from "morgan";
import authRoutes from './routes/authRoute.js';
import productRoutes from './routes/productRoutes.js';
import cartRoutes from './routes/cartRoutes.js';
import orderRoute from './routes/orderRoute.js';
import cors from 'cors';
import Stripe from "stripe";
const stripe = new Stripe(process.env.B_PRIVATE_KEY);


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
app.use('/api/v1/product', productRoutes);
app.use('/api/v1/cart', cartRoutes);
app.use('/api/v1/order', orderRoute)



app.use(express.static('public'));



app.post('/create-checkout-session', async (req, res) => {

    try {
        const session = await stripe.checkout.sessions.create({
            line_items: [
                {
                    // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                    price: "price_1OKOvrSG8XzUFjmQuHkoZeFj",
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${process.env.YOUR_DOMAIN}/about`,
            cancel_url: `${process.env.YOUR_DOMAIN}/contactus`,
        });
        res.redirect(303, session.success_url);
    } catch (err) {

        console.log(err)
        res.send({
            success: false
        })
        // res.redirect(303, );
    }

});





app.get('/', (req, res) => {
    res.send("Server Running...")
})

//index file --> Routes (middlewares) --> Controllers--> Models and Helpers

app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`.bgGreen.black)
})