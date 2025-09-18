export default function Friend({ friend }) {

    // console.log(friend);
    // {id: 8, name: 'Nicholas Runolfsdottir V', username: 'Maxime_Nienow', email: 'Sherwood@rosamond.me', address: {…}, …}
    const { id, name, username, email, address } = friend;
    // console.log(address)
    // {street: 'Dayna Park', suite: 'Suite 449', city: 'Bartholomebury', zipcode: '76495-3109', geo: {…}}
    const { street, suite, city, zipcode, geo } = address;

    return (
        <div className="cardStyle font-bold text-2xl border-amber-200 flex flex-col items-start justify-center">
            <h3>{id} Name: {name} </h3>
            <p>User-Name: {username}</p>
            <p>Email: {email}</p>
            <p>Address: {street},  {suite},  {city},  {zipcode}</p>
        </div>
    )
}