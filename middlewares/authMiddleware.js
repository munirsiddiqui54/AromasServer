import JWT from 'jsonwebtoken';
import userModel from '../models/userModel.js';

export const requiresLogin = async (req, resp, next) => {
    try {
        const decode = await JWT.verify(req.headers.authorization, process.env.JWT_SECRET);
        req.user = decode;
        next();
    } catch (error) {
        console.log(error);
    }
}

export const isAdmin = async (req, resp, next) => {
    try {
        const user = await userModel.findOne({ _id: req.user._id });
        if (user.role !== 1) {
            //Not Admin
            return resp.status(401).send({
                success: false,
                message: 'Unauthorized Access'
            })
        } else {
            next();
        }
    } catch (error) {
        console.log(error)
        resp.send({
            message: 'error in admin login'
        })
    }
}