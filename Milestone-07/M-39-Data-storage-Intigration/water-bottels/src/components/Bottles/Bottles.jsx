// rsc 
import React, { use, useEffect, useState } from 'react';
import Bottle from '../Bottle/Bottle';
import './Bottles.css'
import { addToStoredCart, getStoreCart } from '../../utilities/localStorage';

const Bottles = ({ bottlesPromise }) => {
    const bottles = use(bottlesPromise);
    const [cart, setCart] = useState([])


    const handleAddToCart = (bottle) => {
        // console.log('Item added to the cart.', bottle);
        const newCart=[...cart, bottle];
        setCart(newCart);
        addToStoredCart(bottle.id);
    }

    // useEffect
    useEffect(() => {
        const storedCartIds = getStoreCart();
        // console.log(storedCartIds, bottles);

        const storedCart = [];

        for (const id of storedCartIds) {
            // console.log(id);
            const cartBottle = bottles.find(bottle => bottle.id === id);
            if (cartBottle) {
                storedCart.push(cartBottle);
            }
        }

        console.log('stored cart', storedCart);
        setCart(storedCart);

    }, [bottles])

    return (
        <div>
            <h3>Bottles: {bottles.length}</h3>
            <p>Added to cart: {cart.length}</p>
            <div className='bottles-container'>
                {
                    bottles.map((bottle) => <Bottle key={bottle.id} bottle={bottle} handleAddToCart={handleAddToCart}></Bottle>)
                }

            </div>
        </div>
    );
};

export default Bottles;