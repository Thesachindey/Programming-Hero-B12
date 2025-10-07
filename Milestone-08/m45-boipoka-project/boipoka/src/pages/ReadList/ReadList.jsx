import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook } from '../../utility/addToDB';
import Book from '../Book/Book';
import { FaChevronDown } from 'react-icons/fa';

const ReadList = () => {
    //worst case 
    const [readList, setReadList] = useState([]);
    const [sort, setSort] = useState("");

    const data = useLoaderData();
    console.log(data);
    useEffect(() => {
        const storedBookData = getStoredBook();//str
        // console.log(storedBookData)
        const convertStrIdInNum = storedBookData.map(id => parseInt(id)) //num
        // console.log(convertStrIdInNum);
        const myReadList = data.filter(book => convertStrIdInNum.includes(book.bookId));
        setReadList(myReadList);
    }, [])

    const handelSort = (type) => {
        setSort(type);
        if (type === "pages") {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === "ratings") {
            const sortedByRating = [...readList].sort((a, b) => b.rating - a.rating);
            setReadList(sortedByRating);
        }
    }


    return (
        <div className=' p-4 my-20 '>
            <div >
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1">Sort By: {sort && sort} <FaChevronDown /></div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handelSort("pages")}>By Pages</a></li>
                        <li><a onClick={() => handelSort("ratings")}>By Ratings</a></li>
                    </ul>
                </div>
            </div>
            <Tabs>
                <TabList>
                    <Tab>Read Books</Tab>
                    <Tab>Wishlist Books </Tab>
                </TabList>

                <TabPanel>
                    <h2>Read books list {readList.length}</h2>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                        {
                            readList.map(b => <Book
                                key={b.bookId}
                                singleBook={b} />)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Wishlist Book list</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default ReadList;