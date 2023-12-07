import orderModel from "../models/orderModel.js"
import userModel from "../models/userModel.js";

export const placeOrder = async (req, resp) => {
    try {
        const { userDetail, cartitems, paymentoption, price } = req.body;
        const user = await userModel.findByIdAndUpdate(req.params.uid, { fname: userDetail.fname, lname: userDetail.lname, address: userDetail.address, phone: userDetail.phone },);
        await user.save();
        const o = await new orderModel({ cart: cartitems, buyer: req.params.uid, payment: { paymentoption, price } }).save()
        if (o) {
            resp.status(200).send({
                success: true,
            })
        } else {
            resp.status(500).send({
                success: false,
            })
        }

    } catch (err) {
        console.log(err)
    }
}