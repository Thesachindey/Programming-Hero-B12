import React from 'react';
import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, price, img, stock } = bottle;
    // console.log(bottle);
    return (
        <div className='card'>
            <img style={{ width: '200px', borderRadius: '8px' }} src={img} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{stock} remaining</p>
            <button onClick={() => handleAddToCart(bottle)}>Buy Now</button>
        </div>
    );
};

export default Bottle;