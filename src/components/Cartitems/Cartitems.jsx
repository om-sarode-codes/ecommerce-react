
import React, { useContext } from 'react';
import './cartitem.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png';

const CartItems = () => {
    const {
        all_product,
        cartitems,
        removefromcart
    } = useContext(ShopContext);

    // Calculate total cart amount
    const getTotalCartAmount = () => {
        let totalAmount = 0;

        for (const product of all_product) {
            if (cartitems[product.id] > 0) {
                totalAmount +=
                    product.new_price * cartitems[product.id];
            }
        }

        return totalAmount;
    };

    return (
        <div className="cartitem">

            <h1>YOUR SHOPPING CART</h1>

            <div className="cartitems-format-main">
                <p>Product</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>

            <hr />

            {all_product.map((product) => {
                if (cartitems[product.id] > 0) {
                    return (
                        <div key={product.id}>
                            <div className="cartitems-format">

                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="carticon-product-icon"
                                />

                                <p>{product.name}</p>

                                <p>
                                    ${product.new_price}
                                </p>

                                <button className="cartiteems-quantity">
                                    {cartitems[product.id]}
                                </button>

                                <p>
                                    $
                                    {(
                                        product.new_price *
                                        cartitems[product.id]
                                    ).toFixed(2)}
                                </p>

                                <img
                                    src={remove_icon}
                                    onClick={() =>
                                        removefromcart(product.id)
                                    }
                                    alt="Remove product"
                                    className="cartitems-remove-icon"
                                />

                            </div>

                            <hr />
                        </div>
                    );
                }

                return null;
            })}

            <div className="cartitems-down">

                <div className="cartitems-total">

                    <h2>Cart Totals</h2>

                    <div className="cartitems-total-item">
                        <p>Subtotal</p>
                        <p>
                            ${getTotalCartAmount().toFixed(2)}
                        </p>
                    </div>

                    <hr />

                    <div className="cartitems-total-item">
                        <p>Shipping Fee</p>
                        <p>Free</p>
                    </div>

                    <hr />

                    <div className="cartitems-total-item">
                        <h3>Total</h3>
                        <h3>
                            ${getTotalCartAmount().toFixed(2)}
                        </h3>
                    </div>

                    <button
                        onClick={() =>
                            alert('Checkout coming soon!')
                        }
                    >
                        PROCEED TO CHECKOUT
                    </button>

                </div>

            </div>

        </div>
    );
};

export default CartItems;


