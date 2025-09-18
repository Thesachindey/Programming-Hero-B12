import { use } from "react";

export default function User({ fetchUser }) {
    const users = use(fetchUser);

    
    return (
        <div className="cardStyle font-bold text-2xl">
            <h3 style={{ size: '2rem', font: 'bold' }}>
                User: {users.length}
            </h3>
        </div>
    )
}