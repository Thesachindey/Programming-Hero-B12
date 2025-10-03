import React from 'react';
import Link from './Link';

const navigation = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "About", path: "/about" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const Navbar = () => {

    return (
        <nav>
            <ul className='flex gap-10'>
                {
                    navigation.map(route => <Link key={route.id} route={route} />)
                }
            </ul>


            {/* <ul className='flex gap-8'>

                {
                    navigation.map(route =>  <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                }

            </ul> */}


            {/* <ul className='flex gap-4'>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Info</a></li>
            </ul>
             */}
        </nav>
    );
};

export default Navbar;