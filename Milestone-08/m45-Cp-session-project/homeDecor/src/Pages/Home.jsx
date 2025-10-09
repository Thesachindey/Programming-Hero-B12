import React from 'react';
import { Link } from 'react-router';
import ProductCard from '../components/ProductCard';
import useProducts from '../hooks/useProducts';
import SkeletonLoader from '../components/SkeletonLoader';

const Home = () => {

    // const products = useLoaderData();
    const { products, loading } = useProducts();//this is from custom hook = {products,loading,error}
    // console.log(products);

    const featuredProducts = products.slice(0, 6);// karon amra sob product homey dykhabona.


    return (
        <div>
            <h1 className='font-bold text-4xl text-center mb-10'>Home</h1>

            <div className='flex justify-between items-center py-6'>
                <h1 className='text-3xl font-semibold'>Featured Products</h1>
                <Link to='/products' className='btn btn-outline'>
                    See All Products
                </Link>
            </div>
            {
                loading
                    ?
                    <SkeletonLoader />
                    :
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                        {

                            featuredProducts.map(product =>
                                <ProductCard key={product.id} product={product}></ProductCard>
                            )
                        }
                    </div>
            }
        </div>
    );
};

export default Home;