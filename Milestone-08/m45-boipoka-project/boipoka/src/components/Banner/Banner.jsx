import React from 'react';
import bookImg from '../../assets/books.jpg';
const Banner = () => {
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse sm:px-3 md:px-9 lg:px-20 ">
                <img
                    src={bookImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 style={{fontFamily: '"Playfair Display", "serif"'}} className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;