import React, { use } from 'react';
import { NavLink } from 'react-router';

// jyhytu ai data sudhu aikahnyi proyjon tai aivaby fetch korsi 
const categoriesPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
    const categoriesData = use(categoriesPromise);
    console.log(categoriesData);
    return (
        <div>
            <h1 className="font-bold ">All categories({categoriesData.length})</h1>
            <div className='grid grid-cols-1 gap-3 mt-5'>
                {
                    categoriesData.map(category => <NavLink
                        className={"btn text-accent bg-base-100 border-0 shadow-none hover:bg-base-200 "}
                        // ({ isActive }) =>
                        //                     `font-medium btn btn-ghost ${isActive ? 'text-[#632EE3] font-semibold border-b-2 border-[#632EE3]' : 'hover:text-[#632EE3]'}`
                        // style={({ isActive }) => ({
                        //     backgroundColor: isActive ? 'aqua' : 'inherit',
                        // })}
                        to={`/category/${category.id}`}
                        key={category.id}>{category.name}</NavLink>)
                }
            </div>
        </div>
    );
};

export default Categories;