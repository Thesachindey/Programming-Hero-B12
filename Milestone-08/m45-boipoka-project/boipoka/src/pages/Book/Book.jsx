import React, { use } from 'react';
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data);
    console.log(singleBook);

    const { author, bookId, bookName, category, image, publisher, rating, review, tags, totalPages, yearOfPublishing } = singleBook;


    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 w-96 h-full shadow-sm p-6">

                <figure className='p-10 bg-gray-200 rounded-lg'>
                    <img
                        className=' h-[166px] '
                        src={image}
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex gap-3'>
                        {
                            tags.map((tag) => <button>{tag}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">{yearOfPublishing}</div>
                    </h2>
                    <p className='text-lg'>by : {author}</p>

                    <div className='border border-dashed'> </div>

                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">{category}</div>
                        <div className="badge badge-outline">{rating} <FaStarHalfAlt /> </div>
                    </div>
                </div>

            </div>
        </Link>
    );
};

export default Book;