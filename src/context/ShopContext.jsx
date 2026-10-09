
import React, { createContext, useState } from "react";
import all_product from "../components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};

    for (const product of all_product) {
        cart[product.id] = 0;
    }

    return cart;
};

const ShopContextProvider = (props) => {
    const [cartitems, setcartitems] = useState(getDefaultCart());

    const addTocart = (itemid) => {
        setcartitems((prev) => ({
            ...prev,
            [itemid]: (prev[itemid] || 0) + 1
        }));
    };

    const removefromcart = (itemid) => {
        setcartitems((prev) => ({
            ...prev,
            [itemid]: Math.max(0, (prev[itemid] || 0) - 1)
        }));
    };

    const contextvalue = {
        all_product,
        cartitems,
        addTocart,
        removefromcart
    };

    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;

