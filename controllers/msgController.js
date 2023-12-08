import messages from "../models/messages.js"
import orderModel from "../models/orderModel.js";
import subscriber from "../models/subscriber.js";
import userModel from "../models/userModel.js";


export const sendmsg = async (req, resp) => {
    try {
        const { name, email, msg } = req.body;
        const m = await new messages({ name: name, email: email, msg: msg }).save();
        if (m) {
            resp.send({
                success: true
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}


export const subscribe = async (req, resp) => {
    try {
        const { email } = req.body;
        const m = await new subscriber({ email: email }).save();
        if (m) {
            resp.send({
                success: true
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}

export const getusers = async (req, resp) => {
    try {
        const users = await userModel.find();
        console.log(users)
        if (users) {
            resp.send({
                success: true,
                users
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}

export const getMsg = async (req, resp) => {
    try {
        const msgs = await messages.find();
        console.log(msgs)
        if (msgs) {
            resp.send({
                success: true,
                msgs
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}

export const getSubs = async (req, resp) => {
    try {
        const subs = await subscriber.find();
        if (subs) {
            resp.send({
                success: true,
                subs
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}

export const getOrders = async (req, resp) => {
    try {
        const orders = orderModel.find();
        if (orders) {
            resp.send({
                success: true,
                orders
            })
        }
    } catch (err) {
        resp.send({
            success: false
        })
    }
}