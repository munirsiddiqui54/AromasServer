import { comparePassword, hashmypassword } from "../helpers/authHelper.js";
import cartModel from "../models/cartModel.js";
import JWT from 'jsonwebtoken';
import productsModel from "../models/productsModel.js";

export const itemController = async (req, resp) => {
    try {
        const items = await cartModel.find();
        if (items) {
            resp.send({
                success: true,
                items
            })
        } else {
            resp.send({
                success: false,
                message: 'Unable to find cart Products'
            })
        }
    } catch (e) {
        resp.status(500).send({
            message: 'Error in fetching cart products',
            success: false
        })
    }
}

export const addItem = async (req, resp) => {
    try {
        //variables

        const { product, user, quantity } = req.body;

        if (!quantity) {
            quantity = 1;
        }
        //validation
        switch (true) {
            case !user: return resp.status(500).send({ error: 'user is unknown' })
            case !product: return resp.status(500).send({ error: 'product is Unknown' })
        }
        // const isAdded = await cartModel.findOne({ product });
        // if (isAdded) {
        //     resp.status(300).send({
        //         message: 'Product Already Added to Cart'
        //     })
        //     return
        // }



        //Get the price of Product 
        const prod = await productsModel.find({ _id: product });
        const price = prod.price
        console.log(prod.photo)

        const item = await new cartModel({ product, user, quantity, price: 99 }).save()

        resp.status(201).send({
            success: true,
            message: 'Product added to cart',
            item
        })
    } catch (error) {
        console.log(error)
        resp.status(500).send({
            success: false,
            error,
            message: 'Something went wrong'
        })
    }
}