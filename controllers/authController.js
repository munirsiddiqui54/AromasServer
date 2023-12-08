import { comparePassword, hashmypassword } from "../helpers/authHelper.js";
import cartModel from "../models/cartModel.js"
import userModel from "../models/userModel.js";
import JWT from 'jsonwebtoken';

export const registerController = async (req, resp) => {
    try {
        //get req body
        const { name, password, email, role } = req.body;

        //validations
        if (!name) {
            return resp.send({ message: 'Name is required' })
        }
        if (!email) {
            return resp.send({ message: 'Email is required' })
        }
        if (!password) {
            return resp.send({ message: 'Password is required' })
        }

        //check if existing users
        const Ex_user = await userModel.findOne({ email });
        if (Ex_user) {
            return resp.status(200).send({
                success: false,
                message: 'User Already Exists. Please Login'
            })
        }
        const hashedpassword = await hashmypassword(password);
        const user = await new userModel({ fname: name, email, role, password: hashedpassword }).save();
        resp.status(201).send({
            success: true,
            message: 'User registered successfully',
            user
        })

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: "Error in Registeration",
            error
        })
    }
}

export const loginController = async (req, resp) => {
    try {

        //get user request details
        const { email, password } = req.body;
        if (!email || !password) {
            return resp.status(200).send({
                success: false,
                message: "Invalid Credentials"
            })
        }

        //check for existing email
        const user = await userModel.findOne({ email });
        if (!user) {
            return resp.status(404).send({
                success: false,
                message: 'user is not registered'
            })
        }
        const match = await comparePassword(password, user.password);
        if (!match) {
            return resp.status(200).send({
                success: false,
                message: 'Invalid Password'
            })
        }
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, { expiresIn: "10h" });
        // const count = await cartModel.find({user:user._id})

        let cartCount = 0
        await cartModel.count({ user: user._id }).then(count => {
            cartCount = count
            console.log(count)
        })

        console.log(cartCount)
        resp.status(200).send({
            success: true,
            message: 'Successfully Login',
            user: {
                _id: user._id,
                name: user.fname,
                lname: user.lname ? user.lname : '',
                email: user.email,
                address: user.address ? user.address : '',
                phone: user.phone ? user.phone : '',
                role: user.role
            },
            token,
            items: cartCount
        })

    } catch (error) {
        console.log(error);
        resp.status(500).send({
            success: false,
            message: 'Error in Login'
        })
    }
}