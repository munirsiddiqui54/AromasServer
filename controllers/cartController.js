import { comparePassword, hashmypassword } from "../helpers/authHelper.js";
import cartModel from "../models/cartModel.js";
import JWT from 'jsonwebtoken';
import productsModel from "../models/productsModel.js";

export const deleteItemController = async (req, resp) => {
    try {
        const res = await cartModel.findByIdAndDelete({ _id: req.params.cid });
        if (res) {
            return resp.status(200).send({ message: 'Deleted' })
        }
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: 'Error removing item from cart',
            error
        })
    }
}

export const itemController = async (req, resp) => {
    try {
        const items = await cartModel.find({ user: req.params.uid });
        console.log(items)
        var mrp = 0
        items.map((item) => {
            mrp = mrp + item.price
        })

        //if user is new 
        let discount = 0
        if (mrp > 150) {
            discount = 99
        }
        // let shipping = 0

        // if user has already few orders 
        // discount=0
        let shipping = 50

        const subTotal = mrp + shipping - discount
        console.log(subTotal)

        const bill = {
            mrp, shipping, discount, subTotal
        }

        if (items) {
            resp.send({
                success: true,
                items,
                bill
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
        const isAdded = await cartModel.findOne({ product, user });
        if (isAdded) {
            resp.status(300).send({
                message: 'Product Already Added to Cart'
            })
            return
        }


        //Get the price of Product 
        var prod = await productsModel.find({ _id: product }).select('name price -_id');
        console.log(prod)
        const name = prod[0].name;
        let price = prod[0].price;
        price = price * quantity;

        const item = await new cartModel({ product, user, quantity, price, name }).save()

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