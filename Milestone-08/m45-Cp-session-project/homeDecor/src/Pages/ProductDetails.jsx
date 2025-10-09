import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import Wishlist from './Wishlist';
import { updateList } from '../utils/localStorage';

const ProductDetails = () => {
    const { id } = useParams();//use this hook for gating dynamic  url/:id //str
    // const numId = parseInt(id);// num
    const { products, loading, error } = useProducts();// main data form custom-hook
    const product = products.find(p => p.id === Number(id)); //we can also use Number()
    // loading animation 
    if (loading) { return <p>Loading...</p> }

    //product destructuring sob somy loading ayr lasty add korbo, arr ayk ta fall back object {} dibo jaty product na thaklyo problem na hoy.
    const { name, category, price, material, dimensions, stock, image, description } = product || {};


    // const handleAddToWishList = () => {
    //     const existingList = JSON.parse(localStorage.getItem('wishlist'))
    //     let updateList = []
    //     if (existingList) {
    //         const isDuplicate = existingList.some(p => p.id === product.id)
    //         if (isDuplicate) return alert('Sorry bro!!')
    //         updateList = [...existingList, product]

    //     }else{
    //         updateList.push(product)
    //     }
    //     localStorage.setItem('wishlist', JSON.stringify(updateList))
    // }


    return (
        <div>
            <div className="card bg-base-100 w-full h-full shadow-sm cursor-pointer">
                <figure className='h-48 overflow-hidden'>
                    <img className='w-full object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Category: {category}</p>
                    <p>Stock: {stock ? "Available" : "Not available"}</p>
                    <p>Dimensions: {dimensions}</p>
                    <p> Material:  {material}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button onClick={()=>updateList(product)} className="btn btn-outline">
                            Add to wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;