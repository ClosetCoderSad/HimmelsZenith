import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from 'axios'

export const ShopContext = createContext();

const ShopContextProvider = (props) => {

    const currency = '৳';
    const delivery_fee = 50;
    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [cartItems, setCartItems] = useState({});
    const [products, setProducts] = useState([]);
    const [token, setToken] = useState('')
    const navigate = useNavigate();


    const addToCart = async (itemId, size, color) => {

        if (!size) {
            toast.error('Select Product Size');
            return;
        }
        if(!color){
            toast.error('Select Product Color')
            return;
        }

        // Retrieve cart data from localStorage or use an empty object if not found
        let cartData = JSON.parse(localStorage.getItem('cartItems')) || {};

       
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

        setCartItems(cartData);
        localStorage.setItem('cartItems', JSON.stringify(cartData));
        toast.success('Item added to cart');

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/add', { itemId, size, color }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }

    }

    const getCartCount = () => {
        let totalCount = 0;
        for (const itemId in cartItems) {
            for (const size in cartItems[itemId]) {
                for (const color in cartItems[itemId][size]) {
                    totalCount += cartItems[itemId][size][color];
                }
            }
        }
        return totalCount;
    };


    const updateQuantity = async(itemId, size, color, quantity) => {
        let cartData = structuredClone(cartItems);

        if (cartData[itemId] && cartData[itemId][size] && cartData[itemId][size][color]) {
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

            setCartItems(cartData);
            localStorage.setItem('cartItems', JSON.stringify(cartData));
            toast.success('Cart updated');
        } else {
            toast.error('Item not found in cart');
        }

        if (token) {
            try {

                await axios.post(backendUrl + '/api/cart/update', { itemId, size, quantity, color }, { headers: { token } })

            } catch (error) {
                console.log(error)
                toast.error(error.message)
            }
        }
    };

    const getCartAmount = () => {
        let totalAmount = 0;
        for (const itemId in cartItems) {
            let itemInfo = products.find((product) => product._id === itemId);
            if (itemInfo) {
                for (const size in cartItems[itemId]) {
                    for (const color in cartItems[itemId][size]) {
                        totalAmount += cartItems[itemId][size][color] * itemInfo.price;
                    }
                }
            }
        }
        return totalAmount;
    };

    const getProductsData = async () => {
        try {

            const response = await axios.get(backendUrl + '/api/product/list')
            if (response.data.success) {
                setProducts(response.data.products.reverse())
            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const getUserCart = async (token) => {
        try {
            const response = await axios.post(backendUrl + '/api/cart/get', {}, { headers: { token } })
            if (response.data.success) {
                setCartItems(response.data.cartData)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    useEffect(() => {
        getProductsData()
    }, [])

    useEffect(() => {
        if (!token && localStorage.getItem('token')) {
            setToken(localStorage.getItem('token'))
            getUserCart(localStorage.getItem('token'))
        }
        if (token) {
            getUserCart(token)
        }
    }, [token])
    
    useEffect(() => {
        const storedCart = JSON.parse(localStorage.getItem('cartItems'));
        if (storedCart) {
            setCartItems(storedCart);
        }
    }, []);

    const value = {
        products, currency, delivery_fee,
        search, setSearch, showSearch, setShowSearch,
        cartItems, addToCart,setCartItems,
        getCartCount, updateQuantity,
        getCartAmount, navigate, backendUrl,
        setToken, token
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )

}

export default ShopContextProvider;