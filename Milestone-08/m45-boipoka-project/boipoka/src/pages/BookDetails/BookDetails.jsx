import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToStoredDB } from '../../utility/addToDB';

const BookDetails = () => {

    const { id } = useParams();// this is string
    const numId = parseInt(id);// this is num
    const data = useLoaderData();
    const singleBookData = data.find(book => book.bookId === numId);
    const { author, bookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBookData || {};

    const handleMarkAsRead = id => {
        addToStoredDB(id);
    }

    return (
        <div className='w-2/3 mx-auto'>
            <img className=' w-48 ' src={image} alt="" />
            <h5>{bookName}</h5>

            <button onClick={() => handleMarkAsRead(id)} className='btn btn-outline'>Mark as Read</button>
            <button className='btn btn-accent ml-4'>Add To WishList</button>
        </div>
    );
};

export default BookDetails;