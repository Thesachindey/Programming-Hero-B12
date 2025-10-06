import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);

    // method 1
    // useEffect(() => {
    //     fetch("/public/data/booksData.json")
    //         .then(res => res.json())
    //         .then(data => {
    //             setAllBooks(data)
    //         })
    // }, [])

    // method 2
    // const bookPromise= fetch("/public/data/booksData.json").then(res=>res.json());


    return (
        <div>
            <h1 className='text-center text-6xl font-bold m-10'>Books</h1>

            <Suspense fallback={<span>Loading...</span>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>

                    {
                        data.map(singleBook =>
                            <Book
                                key={singleBook.bookId}
                                singleBook={singleBook}
                            />)
                    }
                </div>
            </Suspense>

        </div >
    );
};

export default Books;