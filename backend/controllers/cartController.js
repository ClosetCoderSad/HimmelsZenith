import userModel from "../models/userModel.js"


// add products to user cart
const addToCart = async (req, res) => {
    try {
        const { userId, itemId, size, color } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData;

        if (!cartData[itemId]) {
            cartData[itemId] = {};
        }

        if (!cartData[itemId][size]) {
            cartData[itemId][size] = {};
        }

        if (!cartData[itemId][size][color]) {
            cartData[itemId][size][color] = 0;
        }

        cartData[itemId][size][color] += 1;

        await userModel.findByIdAndUpdate(userId, { cartData });

        res.json({ success: true, message: "Added To Cart" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

// update user cart
const updateCart = async (req, res) => {
    try {
        const { userId, itemId, size, color, quantity } = req.body;

        const userData = await userModel.findById(userId);
        let cartData = userData.cartData;

        if (cartData[itemId] && cartData[itemId][size] && cartData[itemId][size][color] !== undefined) {
            cartData[itemId][size][color] = quantity;

            if (cartData[itemId][size][color] <= 0) {
                delete cartData[itemId][size][color];
                if (Object.keys(cartData[itemId][size]).length === 0) {
                    delete cartData[itemId][size];
                }
                if (Object.keys(cartData[itemId]).length === 0) {
                    delete cartData[itemId];
                }
            }

            await userModel.findByIdAndUpdate(userId, { cartData });
            res.json({ success: true, message: "Cart Updated" });
        } else {
            res.json({ success: false, message: "Item not found in cart" });
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



// get user cart data
const getUserCart = async (req,res) => {

    try {
        
        const { userId } = req.body
        
        const userData = await userModel.findById(userId)
        let cartData = await userData.cartData;

        res.json({ success: true, cartData })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }

}

export { addToCart, updateCart, getUserCart}