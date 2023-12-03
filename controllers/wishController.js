import wishModel from "../models/wishModel.js";

export const deleteWish = async (req, resp) => {
    try {
        const res = await wishModel.findByIdAndDelete({ _id: req.params.wid });
        if (res) {
            return resp.status(200).send({ message: 'Deleted' })
        }
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: 'Error removing item from wishlist',
            error
        })
    }
}

export const getwishlist = async (req, resp) => {
    try {
        const items = await wishModel.find({ user: req.params.uid });
        if (items) {
            resp.send({
                success: true,
                items
            })
        } else {
            resp.send({
                success: false,
                message: 'Unable to find your wishlist'
            })
        }
    } catch (e) {
        resp.status(500).send({
            message: 'Error in fetching wishlist',
            success: false
        })
    }
}

export const addtowish = async (req, resp) => {
    try {
        //variables

        const { product, user } = req.body;

        //validation
        switch (true) {
            case !user: return resp.status(500).send({ error: 'user is unknown' })
            case !product: return resp.status(500).send({ error: 'product is Unknown' })
        }

        const isAdded = await wishModel.findOne({ product, user });
        if (isAdded) {
            resp.status(300).send({
                message: 'Product Already Added to wishList'
            })
            return
        }

        // // Get the Product 
        // var prod = await productsModel.find({ _id: product }).select('name price -_id');
        // console.log(prod)
        // const name = prod[0].name;
        // let price = prod[0].price;
        // price = price * quantity;

        const item = await new wishModel({ product, user }).save()

        resp.status(201).send({
            success: true,
            message: 'Product added to wishlist',
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