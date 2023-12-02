import productsmodel from "../models/productsModel.js";
import fs from 'fs'

export const getPhotoController = async (req, res) => {
    try {
        const product = await productsmodel.findById(req.params.pid).select('photo');
        if (product.photo.data) {
            res.set('Content-Type', product.photo.contentType)
            return res.status(200).send(product.photo.data)
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: 'Error while getting photo',
            error
        })
    }
}

export const deleteProduct = async (req, resp) => {
    try {
        const resp = await productsmodel.findByIdAndDelete(req.params.pid);
        if (resp) {
            return resp.status(200).send(resp)
        }
    } catch (error) {
        resp.status(500).send({
            success: false,
            message: 'Error deleting product',
            error
        })
    }
}

export const updateController = async (req, resp) => {
    try {
        //variables
        const { name, price, features, description } = req.fields;
        // const { photo } = req.files;

        //validation
        switch (true) {
            case !name: return resp.status(500).send({ error: 'Name of product is required' })
            case !price: return resp.status(500).send({ error: 'price of product is required' })
            // case photo && photo.size > 1000000: return resp.status(500).send({ error: 'Photo error' })
        }

        const product = await productsmodel.findByIdAndUpdate(req.params.pid, { name, price, features, description },);
        await product.save();
        resp.status(201).send({
            success: true,
            message: 'Product Updated',
            product
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

export const getSingleProduct = async (req, resp) => {
    try {
        const product = await productsmodel.findById(req.params.pid);
        if (product) {
            resp.send({
                success: true,
                product
            })
        } else {
            resp.send({
                success: false,
                message: 'Unable to find Products'
            })
        }
    } catch (e) {
        resp.status(500).send({
            message: 'Error in fetching a product',
            success: false
        })
    }
}

export const getProductsController = async (req, resp) => {
    try {
        console.log('triyng to fetch db for products')
        const products = await productsmodel.find();
        if (products) {
            resp.send({
                success: true,
                products
            })
        } else {
            resp.send({
                success: false,
                message: 'Unable to find Products'
            })
        }
    } catch (e) {
        resp.status(500).send({
            message: 'Error in fetching products',
            success: false
        })
    }
}

export const createProductController = async (req, resp) => {
    try {
        //variables
        const { name, price, features, description } = req.fields;
        const { photo } = req.files;

        //validation
        switch (true) {
            case !name: return resp.status(500).send({ error: 'Name of product is required' })
            case !price: return resp.status(500).send({ error: 'price of product is required' })
            case photo && photo.size > 1000000: return resp.status(500).send({ error: 'Photo error' })
        }

        const product = await productsmodel({ ...req.fields })
        if (photo) {
            console.log(photo)
            product.photo.data = fs.readFileSync(photo.path)
            product.photo.contentType = photo.type
        }
        await product.save();
        resp.status(201).send({
            success: true,
            message: 'Product added',
            product
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