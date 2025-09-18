import { use } from "react";
import Friend from './Friend';

export default function Friends({ friendsPromise }) {

    const friends = use(friendsPromise);
    console.log(friends);

    return (
        <div className="cardStyle font-bold text-2xl">
            {friends.map((friend,i) => <Friend key={i}  friend={friend}></Friend> )}

        </div>
    )
}