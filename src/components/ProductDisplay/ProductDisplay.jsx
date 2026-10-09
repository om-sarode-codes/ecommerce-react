import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'

const ProductDisplay = (props) => {

    const { product } = props;
    const { addTocart } = useContext(ShopContext)
    return (
        <div className='productdisplay'>

            <div className="productdisplay-left">

                <div className="productdisplay-img-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>

                <div className="productdisplay-img">
                    <img
                        className='productdisplay-main-img'
                        src={product.image}
                        alt=""
                    />
                </div>

            </div>

            <div className="productdisplay-right">

                <h1>{product.name}</h1>

                <div className="productdisplay-right-star">

                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />

                    <p>(122)</p>

                </div>
                <div className="productdisplay-rigth-prices">
                    <div className="productdisplay-rigth-price-old">
                        ${product.old_price}
                    </div>
                    <div className="productdisplay-rigth-price-new">
                        ${product.new_price}
                    </div>
                    <div className="productdisplay-rigth-description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem ducimus minus magnam consequuntur aut error vero earum, vel, id inventore itaque soluta? Dignissimos qui dolorem obcaecati in possimus omnis numquam?
                    </div>
                    <div className="productdisplay-rigth-size">
                        <h1>Select size</h1>
                        <div className="productdisplay-rigth-size">
                            <div>S</div>
                            <div>M</div>
                            <div>L</div>
                            <div>XL</div>
                            <div>XXL</div>
                        </div>
                    </div>
                    <button onClick={() => addTocart(product.id)}>
                        Add to Cart
                    </button>
                    <p className='productdisplay-rigth-category'> <span>Catrgory : </span> Women, T-shrit,crop-top</p>
                    <p className='productdisplay-rigth-category'> <span>Tags : </span> Modern, Latest</p>
                </div>

            </div>

        </div>
    )
}

export default ProductDisplay