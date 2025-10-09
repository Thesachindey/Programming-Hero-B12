import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import { FiSearch } from 'react-icons/fi';

const Products = () => {
    const { products } = useProducts();//data from custom hook
    const [search, setSearch] = useState('');
    const term = search.trim().toLocaleLowerCase();//this is correction data what people search

    //now filter data from main product data by 
    // term(data what people search). and add it into new variable. then we can map it
    const searchedProducts = term
        ? products.filter(product =>
             product.name.toLocaleLowerCase().includes(term))
        : products

console.log(searchedProducts)



    return (
        <div>
            <h1 className='font-bold text-4xl text-center mb-10'>Products</h1>

            <div className='flex justify-between items-center py-6'>
                <h1 className='text-3xl font-semibold'>All Products <span className='text-sm text-gray-500'>({ searchedProducts.length}) Products found.</span></h1>

                <label className="input">
                    <FiSearch />
                    {/* controlled input field */}
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)} type="search" required placeholder="Search Your Products" />
                </label>

            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    searchedProducts.map(product =>
                        <ProductCard key={product.id} product={product}></ProductCard>
                    )
                }
            </div>
        </div>
    );
};

export default Products;