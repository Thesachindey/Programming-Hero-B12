import Link from 'next/link';
import React from 'react';

const Header = () => {
    const links=<>
        <Link href="/about">About</Link>
        <Link href="/stories">Stories</Link>
        <Link href="/tutorials">Tutorials</Link>
        <Link href="/register">Register</Link>
    </>;
    return (
        <div>
            <div className="border border-gray-200  p-4 flex justify-between items-center flex-wrap">
                <Link href={'/'} className="text-2xl font-bold">🐳DevStory</Link>
                <nav className='space-x-4'>
                    {links}
                </nav>
            </div>
        </div>
    );
};

export default Header;