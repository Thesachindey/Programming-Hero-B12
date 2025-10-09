import React, { useEffect, useState } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadWishlist, removeFromWishlist } from '../utils/localStorage';

const Wishlist = () => {
    const [wishlist, setWishlist] = useState(()=>loadWishlist());
    const [sortOrder, setSortOrder] = useState('none');
 
    // useEffect(() => {
    //     const savedList = JSON.parse(localStorage.getItem('wishlist'));
    //     if (savedList) setWishlist(savedList);
    // }, [])

    if (!wishlist.length) return <p>No Data Available</p>
    
    const sortedItem = (() => {
        if (sortOrder === 'price-asc') {
            return [...wishlist].sort((a, b) => a.price - b.price)
        } else if (sortOrder === 'price-dsc') {
            return [...wishlist].sort((a, b) => b.price - a.price)
        }
        else {
            return wishlist
        }
    })()//invoke by IIFE function
    

    
   const handleRemove = id => {
    // remove from localstorage
    removeFromWishlist(id)
    // for ui instant update
    setWishlist(prev => prev.filter(p => p.id !== id))
  }
    
    //   generate chart data
    const totalsByCategory = {}
    wishlist.forEach(product => {
        const category = product.category

        totalsByCategory[category] =
            (totalsByCategory[category] || 0) + product.price
    })
    const chartData = Object.keys(totalsByCategory).map(category => ({
        category,
        'Total Price': totalsByCategory[category],
    }))
    console.log(chartData)


    return (
        <div className=''>
            <div className=''>
                <div className='flex justify-between items-center py-6'>
                    <h1 className='text-3xl font-semibold'>WishList <span className='text-sm text-gray-500'>({sortedItem.length}) Products found.</span></h1>

                    <label className='from-control w-full max-w-xs font-semibold '>
                        <select
                            className='select '
                            value={sortOrder} onChange={e => setSortOrder(e.target.value)}>
                            <option value="none">Sort by price</option>
                            <option value="price-asc">Low -&gt; High</option>
                            <option value="price-dsc">High -&gt; Low</option>
                        </select>
                    </label>

                </div>
            </div>
            {/* card  */}
            <div className='space-y-6'>
                {
                    sortedItem.map((p, i) => <div key={i} className="card card-side bg-base-100 shadow-sm ">
                        <figure className='h-48 overflow-hidden'>
                            <img className='w-full object-cover'
                                src={p.image}
                                alt="Shoes" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title text-2xl">{p.name}</h2>
                            <p className='text-xl font-semibold'>{p.category}</p>
                            <div className="card-actions justify-end">

                                <p className='text-2xl font-semibold'>${p.price}</p>
                                <button onClick={() => handleRemove(p.id)}
                                    className="btn btn-primary">Remove</button>
                            </div>
                        </div>
                    </div>)
                }
            </div>

            {/* chart */}
            <div className='space-y-3'>
                <h3 className='text-xl font-semibold'>Wishlist Summery</h3>
                <div className='bg-base-100 border rounded-xl p-4 h-80'>
                    <ResponsiveContainer width='100%' height='100%'>
                        <BarChart data={chartData}>
                            <CartesianGrid strokeDasharray='3 3' />
                            <XAxis dataKey='category' />
                            <YAxis />
                            <Tooltip />
                            <Legend />

                            <Bar dataKey='Total Price' fill='#82ca9d' />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>

        </div>
    );
};

export default Wishlist;