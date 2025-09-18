import { use } from "react";
import Post from './Post';

export default function Posts({ postsPromise }) {
    const posts = use(postsPromise);
    
    return (

        <div className="cardStyle font-bold ">
            <h1 className="text-2xl">All post</h1>
            {
                posts.map((posts,i)=><Post post={posts} key={i}></Post>)
            }
        </div>

    )
}