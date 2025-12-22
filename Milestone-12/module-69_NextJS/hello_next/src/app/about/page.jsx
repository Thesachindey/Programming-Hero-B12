import Title from '@/Components/Title';
import Link from 'next/link';
import React from 'react';

const About = () => {
    const links=<>
        <Link href="/about/contact">Contact</Link>
        <Link href="/about/teams">Team</Link>
    </>;
    return (
        <div>
            <Title>Welcome to About us page of 🐳DevStory</Title>
            <div className="mt-4 space-x-6">
               {links}
            </div>
        </div>
    );
};

export default About;