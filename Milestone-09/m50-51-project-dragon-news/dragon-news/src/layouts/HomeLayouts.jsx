import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import Header from '../components/Header';
import LatestNews from '../components/LatestNews';
import Navbar from '../components/Navbar';
import LeftAside from '../components/homeLayout/LeftAside';
import RightAside from '../components/homeLayout/RightAside';
import LoadingPage from '../pages/LoadingPage';

const HomeLayouts = () => {
    const { state } = useNavigation();
    return (
        <div>
            <header>
                <Header />
                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews />
                </section>
                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar />
                </nav>
            </header>
            {/* main section  */}
            <main className='w-11/12 mx-auto my-3  grid grid-cols-12 gap-10'>
                <aside className='col-span-3 h-fit sticky top-3 '>
                    <LeftAside />
                </aside>

                {/* outlet section  */}
                <section className="main col-span-6">
                    {state == 'loading' ? <LoadingPage /> : <Outlet></Outlet>
                    }
                </section>

                <aside className='col-span-3 h-fit sticky top-3'>
                    <RightAside />
                </aside>

            </main>
        </div>
    );
};

export default HomeLayouts;