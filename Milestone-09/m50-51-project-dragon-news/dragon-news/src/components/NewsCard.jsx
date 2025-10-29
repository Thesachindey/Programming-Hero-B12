import React from "react";
import { FaStar, FaEye, FaShareAlt, FaRegBookmark } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
    const {
        id,
        title,
        rating,
        total_view,
        author,
        thumbnail_url,
        details,
        tags,
    } = news;

    return (
        <div className="bg-base-100  rounded-xl shadow-sm overflow-hidden">
            {/* Top Section - Author Info */}
            <div className="flex justify-between items-center p-4 bg-base-200">
                <div className="flex items-center gap-3">
                    <img
                        src={author.img}
                        alt={author.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <h3 className="font-semibold text-gray-800">{author.name}</h3>
                        <p className="text-sm text-gray-500">
                            {new Date(author.published_date).toISOString().split("T")[0]}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <FaRegBookmark className="text-gray-500 hover:text-primary cursor-pointer" />
                    <FaShareAlt className="text-gray-500 hover:text-primary cursor-pointer" />
                </div>
            </div>

            {/* Title */}
            <div className="px-4 pt-4">
                <h2 className="text-lg font-semibold text-gray-900 leading-snug">
                    {title}
                </h2>
            </div>

            {/* Image */}
            <div className="px-4 mt-3">
                <img
                    src={thumbnail_url}
                    alt={title}
                    className="w-full h-52 object-cover rounded-md"
                />
            </div>

            {/* Details */}
            <div className="px-4 py-4">
                <p className="text-sm text-gray-600 leading-relaxed">
                    Wednesday, August 24, 2022 | Tag Cloud Tags:{" "}
                    {tags.join(", ")} — {details.slice(0, 180)}...
                    <Link
                        to={`/news/${id}`}
                        className="text-orange-500 font-semibold ml-1 hover:underline"
                    >
                        Read More
                    </Link>
                </p>
            </div>

            {/* Footer */}
            <div className="flex justify-between items-center px-4 py-7 border-t  border-base-300 pt-5">
                
                {/* Rating */}
                <div className="flex items-center gap-1 text-orange-400">
                    {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                            key={i}
                            className={i < rating.number ? "text-orange-400" : "text-gray-300"}
                        />
                    ))}
                    <span className="text-gray-700 font-medium ml-1">
                        {rating.number}
                    </span>
                </div>

                {/* Views */}
                <div className="flex items-center gap-2 text-gray-500">
                    <FaEye />
                    <span className="text-sm font-medium">{total_view}</span>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;
