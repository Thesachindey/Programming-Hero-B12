import React from 'react';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
    const { id, name, category, price, image, description } = product;

    return (
        <div>
            <div className="card bg-base-100 w-full h-full shadow-sm hover:scale-102 transition-transform duration-300 cursor-pointer">
                <figure className='h-48 overflow-hidden'>
                    <img className='w-full object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>Price: ${price}</p>
                    <p>Category: {category}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/product/${id}`} className="btn btn-outline">
                            View Details
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;